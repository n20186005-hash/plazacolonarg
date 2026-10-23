// Server-side current conditions + 7-day outlook for Plaza Colón, Córdoba.
// Data: Open-Meteo (no key required). Coordinates are the plaza's published point.
// Results are cached by locale for ten minutes. The response timestamp is
// shown separately from the model estimate; failures have a shorter cache.

const LAT = -31.4092824;
const LON = -64.1957511;
const TZ = 'America/Argentina/Buenos_Aires';

export interface WeatherLabel {
  es: string;
  en: string;
  icon: string;
}

export interface WeatherCurrent {
  temp: number;
  feels: number;
  humidity: number;
  wind: number; // m/s
  precipProb: number;
  uv: number;
  code: number;
  label: WeatherLabel;
}

export interface WeatherDay {
  date: string;
  max: number;
  min: number;
  precipProb: number;
  uvMax: number;
  windMax: number;
  code: number;
  label: WeatherLabel;
}

export interface WeatherAdvice {
  outfit: string[]; // 出行穿搭
  activity: string[]; // 游玩安排
  items: string[]; // 随身物品
  risks: string[]; // 风险提醒（有才显示）
}

export interface WeatherResult {
  ok: boolean;
  current?: WeatherCurrent;
  today?: WeatherDay;
  days: WeatherDay[];
  advice?: WeatherAdvice;
  error?: string;
  updatedAt?: string;
}

// WMO weather interpretation codes → bilingual, human label + emoji icon.
function describe(code: number): WeatherLabel {
  const map: Record<number, WeatherLabel> = {
    0: { es: 'Despejado', en: 'Clear', icon: '☀️' },
    1: { es: 'Mayormente despejado', en: 'Mainly clear', icon: '🌤️' },
    2: { es: 'Parcialmente nublado', en: 'Partly cloudy', icon: '⛅' },
    3: { es: 'Nublado', en: 'Overcast', icon: '☁️' },
    45: { es: 'Niebla', en: 'Fog', icon: '🌫️' },
    48: { es: 'Niebla helada', en: 'Rime fog', icon: '🌫️' },
    51: { es: 'Llovizna leve', en: 'Light drizzle', icon: '🌦️' },
    53: { es: 'Llovizna', en: 'Drizzle', icon: '🌦️' },
    55: { es: 'Llovizna intensa', en: 'Dense drizzle', icon: '🌧️' },
    56: { es: 'Llovizna helada', en: 'Freezing drizzle', icon: '🌧️' },
    57: { es: 'Llovizna helada fuerte', en: 'Freezing drizzle', icon: '🌧️' },
    61: { es: 'Lluvia leve', en: 'Slight rain', icon: '🌦️' },
    63: { es: 'Lluvia', en: 'Rain', icon: '🌧️' },
    65: { es: 'Lluvia fuerte', en: 'Heavy rain', icon: '🌧️' },
    66: { es: 'Lluvia helada', en: 'Freezing rain', icon: '🌧️' },
    67: { es: 'Lluvia helada fuerte', en: 'Heavy freezing rain', icon: '🌧️' },
    71: { es: 'Nieve leve', en: 'Slight snow', icon: '🌨️' },
    73: { es: 'Nieve', en: 'Snow', icon: '🌨️' },
    75: { es: 'Nieve fuerte', en: 'Heavy snow', icon: '🌨️' },
    77: { es: 'Granizo', en: 'Snow grains', icon: '🌨️' },
    80: { es: 'Chubasco leve', en: 'Slight shower', icon: '🌦️' },
    81: { es: 'Chubascos', en: 'Showers', icon: '🌧️' },
    82: { es: 'Chubascos fuertes', en: 'Violent showers', icon: '⛈️' },
    85: { es: 'Nieve leve', en: 'Slight snow', icon: '🌨️' },
    86: { es: 'Nieve fuerte', en: 'Heavy snow', icon: '🌨️' },
    95: { es: 'Tormenta', en: 'Thunderstorm', icon: '⛈️' },
    96: { es: 'Tormenta con granizo', en: 'Thunderstorm w/ hail', icon: '⛈️' },
    99: { es: 'Tormenta fuerte con granizo', en: 'Severe thunderstorm', icon: '⛈️' },
  };
  return map[code] ?? { es: 'Variable', en: 'Variable', icon: '🌡️' };
}

function beaufort(ms: number): number {
  const t = [
    [0.3, 0], [1.6, 1], [3.4, 2], [5.5, 3], [8.0, 4], [10.8, 5],
    [13.9, 6], [17.2, 7], [20.8, 8], [24.5, 9], [28.5, 10], [32.7, 11],
  ];
  for (const [limit, lvl] of t) if (ms < limit) return lvl;
  return 12;
}

function rainLevel(code: number): 'none' | 'light' | 'moderate' | 'heavy' | 'thunder' {
  if ([95, 96, 99].includes(code)) return 'thunder';
  if ([82, 65, 66, 67].includes(code)) return 'heavy';
  if ([63, 81].includes(code)) return 'moderate';
  if ([51, 53, 55, 56, 57, 61, 80].includes(code)) return 'light';
  return 'none';
}

// Actionable, jargon-free advice for an urban heritage square. Multi-select:
// each branch appends only when its condition holds, so empty groups are hidden.
function buildAdvice(
  es: boolean,
  cur: WeatherCurrent,
  today: WeatherDay,
): WeatherAdvice {
  const out: WeatherAdvice = { outfit: [], activity: [], items: [], risks: [] };
  const add = (arr: string[], s?: string) => { if (s && !arr.includes(s)) arr.push(s); };

  const prob = Math.max(cur.precipProb, today.precipProb);
  const rl = rainLevel(cur.code);
  const windLvl = beaufort(cur.wind);
  const tmax = today.max;
  const tmin = today.min;
  const diff = tmax - tmin;

  // 降水概率
  if (prob >= 60) {
    add(out.activity, es
      ? 'Alta probabilidad de lluvia: llevá paraguas; si podés, priorizá espacios cubiertos.'
      : 'High rain chance: carry an umbrella; prefer covered areas if you can.');
    add(out.items, es ? 'Paraguas / impermeable' : 'Umbrella / raincoat');
  }

  // 降雨强度
  if (rl === 'light') {
    add(out.outfit, es
      ? 'Lluvia leve, caminos resbaladizos: usá calzado antideslizante.'
      : 'Light rain, slippery paths: wear grippy shoes.');
    add(out.activity, es
      ? 'La lluvia baja la comodidad al aire libre; aprovechá los bancos a la sombra.'
      : 'Light rain lowers outdoor comfort; use the shaded benches.');
    add(out.items, es ? 'Paraguas plegable' : 'Compact umbrella');
  } else if (rl === 'moderate') {
    add(out.activity, es
      ? 'Lluvia moderada: acortá el paseo al aire libre.'
      : 'Moderate rain: shorten the outdoor walk.');
    add(out.items, es ? 'Paraguas' : 'Umbrella');
  } else if (rl === 'heavy') {
    add(out.risks, es
      ? 'Lluvia intensa: evitá bajos y desagües; los tramos abiertos se complican.'
      : 'Heavy rain: avoid low spots and drains; open areas get uncomfortable.');
    add(out.activity, es
      ? 'No es el mejor momento para el paseo al aire libre; buscá galerías o cafés cercanos.'
      : 'Not ideal for an outdoor walk; seek nearby galleries or cafés.');
    add(out.items, es ? 'Impermeable (el paraguas largo se complica con viento)' : 'Raincoat (a long umbrella is awkward in wind)');
  } else if (rl === 'thunder') {
    add(out.risks, es
      ? 'Tormenta eléctrica: no te refugies bajo árboles ni en zona abierta; los paseos se suspenden.'
      : 'Thunderstorm: don’t shelter under trees or in open ground; walks pause.');
    add(out.activity, es
      ? 'Las actividades al aire libre cierran con la tormenta.'
      : 'Outdoor activities pause during storms.');
    add(out.items, es ? 'Impermeable' : 'Raincoat');
  }

  // 高温
  if (tmax >= 32 || cur.temp >= 32) {
    add(out.outfit, es ? 'Hace calor: ropa ligera y transpirable.' : 'Hot: light, breathable clothing.');
    add(out.activity, es
      ? 'Evitá la hora central; hacé pausas a la sombra del arbolado.'
      : 'Avoid midday; take shade breaks under the canopy.');
    add(out.items, es ? 'Protector solar, gafas de sol, agua' : 'Sunscreen, sunglasses, water');
  }

  // 紫外线
  if (cur.uv >= 5 || today.uvMax >= 5) {
    add(out.outfit, es ? 'Sol fuerte: gorra y protector solar.' : 'Strong sun: cap and sunscreen.');
    add(out.items, es ? 'Protector solar, gafas de sol, gorra' : 'Sunscreen, sunglasses, cap');
  }

  // 低温 / 温差
  if (diff > 8) {
    add(out.outfit, es
      ? 'Mucha diferencia día/noche: llevá una prenda para sumar o sacar.'
      : 'Big day–night swing: bring a layer to add or remove.');
  }
  if (tmax <= 10) {
    add(out.outfit, es ? 'Frío: abrigo y bufanda.' : 'Cold: coat and scarf.');
    add(out.items, es ? 'Abrigo' : 'Coat');
  }

  // 风力
  if (windLvl >= 7) {
    add(out.risks, es
      ? 'Viento fuerte: alejate de carteles y ramas; los tramos al aire libre se cierran.'
      : 'Strong wind: keep away from signs and branches; open stretches close.');
    add(out.items, es ? 'Prenda de abrigo ceñida' : 'Fitted outer layer');
  } else if (windLvl >= 5) {
    add(out.outfit, es
      ? 'Viento: una gorra puede volar; evitá faldas amplias.'
      : 'Wind: a cap can blow away; avoid wide skirts.');
    add(out.activity, es
      ? 'El viento molesta en las áreas abiertas de la plaza.'
      : 'Wind is annoying in the open parts of the square.');
  }

  // 晴 / 阴
  if ([0, 1].includes(cur.code)) {
    add(out.activity, es
      ? 'Día despejado: ideal para recorrer la plaza y fotografiar la fuente.'
      : 'Clear day: ideal to walk the square and shoot the fountain.');
    add(out.items, es ? 'No olvides el protector solar' : 'Don’t skip sunscreen');
  } else if (cur.code === 3) {
    add(out.activity, es
      ? 'Cielo cubierto: luz suave, muy buena para fotos y paseo largo.'
      : 'Overcast: soft light, great for photos and a long walk.');
  }

  // 雾
  if ([45, 48].includes(cur.code)) {
    add(out.risks, es
      ? 'Niebla: poca visibilidad; no es el momento de fotos lejanas.'
      : 'Fog: low visibility; not a time for distant photos.');
  }

  // 高湿体感
  if (cur.humidity >= 85) {
    add(out.outfit, es
      ? 'Humedad alta: la sensación es más pesada; ropa liviana ayuda.'
      : 'High humidity: it feels heavier; light clothing helps.');
  }

  return out;
}

const cache = new Map<'es' | 'en', { at: number; value: WeatherResult }>();
const TTL = 10 * 60 * 1000;

function buildUrl(): string {
  const cur = 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m';
  const daily = 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,wind_speed_10m_max';
  const p = new URLSearchParams({
    latitude: String(LAT),
    longitude: String(LON),
    current: cur,
    daily,
    timezone: TZ,
    forecast_days: '7',
    wind_speed_unit: 'ms',
  });
  return `https://api.open-meteo.com/v1/forecast?${p.toString()}`;
}

export async function getWeather(locale: 'es' | 'en' = 'es'): Promise<WeatherResult> {
  const saved = cache.get(locale);
  if (saved && Date.now() - saved.at < (saved.value.ok ? TTL : 60000)) return saved.value;

  try {
    const opts: any = {
      // Edge cache of the upstream response in the Cloudflare Workers runtime.
      cf: { cacheTtl: 600, cacheEverything: true },
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(6000),
    };
    const res = await fetch(buildUrl(), opts);
    if (!res.ok) throw new Error(`upstream ${res.status}`);
    const d: any = await res.json();
    const currentFields = ['temperature_2m','relative_humidity_2m','apparent_temperature','weather_code','wind_speed_10m'];
    const dailyFields = ['temperature_2m_max','temperature_2m_min','precipitation_probability_max','uv_index_max','wind_speed_10m_max','weather_code'];
    if (!currentFields.every((key) => typeof d?.current?.[key] === 'number' && Number.isFinite(d.current[key]))) throw new Error('invalid current weather');
    const dates = d?.daily?.time;
    if (!Array.isArray(dates) || dates.length === 0 || !dates.every((date) => typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date))) throw new Error('invalid forecast dates');
    if (!dailyFields.every((key) => Array.isArray(d.daily[key]) && d.daily[key].length === dates.length && d.daily[key].every((value) => typeof value === 'number' && Number.isFinite(value)))) throw new Error('invalid forecast values');

    const cur: WeatherCurrent = {
      temp: Math.round(d.current.temperature_2m),
      feels: Math.round(d.current.apparent_temperature),
      humidity: Math.round(d.current.relative_humidity_2m),
      wind: d.current.wind_speed_10m,
      precipProb: Math.round(d.daily.precipitation_probability_max[0]),
      uv: Math.round(d.daily.uv_index_max[0]),
      code: d.current.weather_code,
      label: describe(d.current.weather_code),
    };

    const days: WeatherDay[] = (d.daily.time as string[]).map((date: string, i: number) => ({
      date,
      max: Math.round(d.daily.temperature_2m_max[i]),
      min: Math.round(d.daily.temperature_2m_min[i]),
      precipProb: Math.round(d.daily.precipitation_probability_max[i] ?? 0),
      uvMax: Math.round(d.daily.uv_index_max[i] ?? 0),
      windMax: d.daily.wind_speed_10m_max[i],
      code: d.daily.weather_code[i],
      label: describe(d.daily.weather_code[i]),
    }));

    const today = days[0];
    const result: WeatherResult = {
      ok: true,
      updatedAt: new Date().toISOString(),
      current: cur,
      today,
      days,
      advice: buildAdvice(locale === 'es', cur, today),
    };
    cache.set(locale, { at: Date.now(), value: result });
    return result;
  } catch (e) {
    const fallback: WeatherResult = { ok: false, days: [], error: e instanceof Error ? e.message : 'weather error' };
    cache.set(locale, { at: Date.now(), value: fallback });
    return fallback;
  }
}
