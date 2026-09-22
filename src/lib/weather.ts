/**
 * Server-side weather helper for Plaza Colón, Córdoba.
 * Uses the Open-Meteo forecast API (no key required). Values are fetched on the
 * server and cached so visitor-facing copy never needs to mention the data source.
 */

export const PLAZA_COLON = {
  latitude: -31.4092824,
  longitude: -64.1957511,
  timezone: 'America/Argentina/Buenos_Aires',
} as const;

export interface LocalizedText {
  es: string;
  en: string;
  icon: string;
}

export interface DayForecast {
  date: string;
  code: number;
  label: LocalizedText;
  max: number;
  min: number;
  precipProb: number;
}

export interface WeatherData {
  ok: boolean;
  fetchedAt: string;
  current: {
    temp: number;
    feels: number;
    humidity: number;
    wind: number;
    code: number;
    label: LocalizedText;
    precip: number;
  };
  days: DayForecast[];
  /** Simple visitor-facing hint: should I bring an umbrella today? */
  umbrella: boolean;
}

const RAINY_CODES = new Set([
  51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99,
]);

const WMO: Record<number, { es: string; en: string; icon: string; rainy: boolean }> = {
  0: { es: 'Despejado', en: 'Clear', icon: '☀️', rainy: false },
  1: { es: 'Mayormente despejado', en: 'Mainly clear', icon: '🌤️', rainy: false },
  2: { es: 'Parcialmente nublado', en: 'Partly cloudy', icon: '⛅', rainy: false },
  3: { es: 'Nublado', en: 'Overcast', icon: '☁️', rainy: false },
  45: { es: 'Niebla', en: 'Fog', icon: '🌫️', rainy: false },
  48: { es: 'Niebla con escarcha', en: 'Rime fog', icon: '🌫️', rainy: false },
  51: { es: 'Llovizna ligera', en: 'Light drizzle', icon: '🌦️', rainy: true },
  53: { es: 'Llovizna', en: 'Drizzle', icon: '🌦️', rainy: true },
  55: { es: 'Llovizna intensa', en: 'Dense drizzle', icon: '🌦️', rainy: true },
  56: { es: 'Llovizna helada', en: 'Freezing drizzle', icon: '🌧️', rainy: true },
  57: { es: 'Llovizna helada intensa', en: 'Freezing drizzle', icon: '🌧️', rainy: true },
  61: { es: 'Lluvia leve', en: 'Slight rain', icon: '🌧️', rainy: true },
  63: { es: 'Lluvia', en: 'Rain', icon: '🌧️', rainy: true },
  65: { es: 'Lluvia intensa', en: 'Heavy rain', icon: '🌧️', rainy: true },
  66: { es: 'Lluvia helada', en: 'Freezing rain', icon: '🌧️', rainy: true },
  67: { es: 'Lluvia helada intensa', en: 'Freezing rain', icon: '🌧️', rainy: true },
  71: { es: 'Nieve leve', en: 'Slight snow', icon: '❄️', rainy: true },
  73: { es: 'Nieve', en: 'Snow', icon: '❄️', rainy: true },
  75: { es: 'Nieve intensa', en: 'Heavy snow', icon: '❄️', rainy: true },
  77: { es: 'Granizo menudo', en: 'Snow grains', icon: '❄️', rainy: true },
  80: { es: 'Chubascos leves', en: 'Slight showers', icon: '🌦️', rainy: true },
  81: { es: 'Chubascos', en: 'Showers', icon: '🌦️', rainy: true },
  82: { es: 'Chubascos intensos', en: 'Violent showers', icon: '⛈️', rainy: true },
  85: { es: 'Chubascos de nieve', en: 'Snow showers', icon: '🌨️', rainy: true },
  86: { es: 'Chubascos de nieve intensos', en: 'Heavy snow showers', icon: '🌨️', rainy: true },
  95: { es: 'Tormenta', en: 'Thunderstorm', icon: '⛈️', rainy: true },
  96: { es: 'Tormenta con granizo', en: 'Thunderstorm with hail', icon: '⛈️', rainy: true },
  99: { es: 'Tormenta con granizo intensa', en: 'Severe thunderstorm', icon: '⛈️', rainy: true },
};

function describe(code: number): { es: string; en: string; icon: string; rainy: boolean } {
  return WMO[code] ?? { es: 'Cielo variable', en: 'Changeable sky', icon: '🌡️', rainy: false };
}

const CACHE_TTL_MS = 10 * 60 * 1000;
let memoryCache: { data: WeatherData; ts: number } | null = null;

function buildUrl(): string {
  const p = new URLSearchParams({
    latitude: String(PLAZA_COLON.latitude),
    longitude: String(PLAZA_COLON.longitude),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max',
    timezone: PLAZA_COLON.timezone,
    forecast_days: '7',
    wind_speed_unit: 'kmh',
  });
  return `https://api.open-meteo.com/v1/forecast?${p.toString()}`;
}

function fallback(date = new Date()): WeatherData {
  return {
    ok: false,
    fetchedAt: date.toISOString(),
    current: { temp: 0, feels: 0, humidity: 0, wind: 0, code: 0, label: { es: 'Información no disponible', en: 'Unavailable', icon: '🌡️' }, precip: 0 },
    days: [],
    umbrella: false,
  };
}

export async function getWeather(): Promise<WeatherData> {
  const now = Date.now();
  if (memoryCache && now - memoryCache.ts < CACHE_TTL_MS) return memoryCache.data;

  try {
    const opts: any = {
      // Edge cache of the upstream response in the Cloudflare Workers runtime.
      cf: { cacheTtl: 600, cacheEverything: true },
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(6000),
    };
    const res = await fetch(buildUrl(), opts);
    if (!res.ok) throw new Error(`weather ${res.status}`);
    const json = (await res.json()) as any;
    const cur = json.current;
    const daily = json.daily;

    const current = {
      temp: Math.round(cur.temperature_2m),
      feels: Math.round(cur.apparent_temperature),
      humidity: Math.round(cur.relative_humidity_2m),
      wind: Math.round(cur.wind_speed_10m),
      code: cur.weather_code,
      label: describe(cur.weather_code),
      precip: cur.precipitation ?? 0,
    };

    const days: DayForecast[] = (daily?.time ?? []).map((date: string, i: number) => {
      const code = daily.weather_code[i];
      return {
        date,
        code,
        label: describe(code),
        max: Math.round(daily.temperature_2m_max[i]),
        min: Math.round(daily.temperature_2m_min[i]),
        precipProb: Math.round(daily.precipitation_probability_max?.[i] ?? 0),
      };
    });

    const today = days[0];
    const umbrella =
      current.precip > 0.1 || current.label.rainy || (today ? today.precipProb >= 40 : false);

    const data: WeatherData = {
      ok: true,
      fetchedAt: new Date().toISOString(),
      current,
      days,
      umbrella,
    };
    memoryCache = { data, ts: now };
    return data;
  } catch {
    if (memoryCache) return memoryCache.data;
    return fallback();
  }
}
