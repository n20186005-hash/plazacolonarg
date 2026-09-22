/**
 * Centralised, language-neutral SEO site-name constants for plazacolonarg.com.
 * Format convention (per site brief): "attraction name + city + travel guide".
 */

export const SITE_NAME = 'Plaza Colón Córdoba — Guía de visita';
export const SITE_NAME_EN = 'Plaza Colón Córdoba — Visitor Guide';

/** Append the SEO site name to a sub-page title: `Title | SITE_NAME`. */
export function withSiteName(title: string, locale: 'es' | 'en' = 'es'): string {
  const base = locale === 'en' ? SITE_NAME_EN : SITE_NAME;
  return `${title} | ${base}`;
}
