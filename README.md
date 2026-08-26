# Plaza Colón · Guía de visita

Sitio estático de una sola página sobre Plaza Colón, Córdoba, construido con Astro, Tailwind CSS y TypeScript para Cloudflare Workers.

## Desarrollo

El proyecto requiere Node.js 24.12.0 y usa pnpm 11.24.0 mediante el campo `packageManager`.

```sh
corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Para previsualizar el Worker generado:

```sh
pnpm preview
```

## Dominio y SEO

El único punto de configuración del dominio es `SITE_URL`; Astro lo recibe en `astro.config.mjs` como su campo `site`. Sin `SITE_URL`, el build sigue funcionando, no se genera sitemap y las etiquetas URL absolutas se omiten de forma deliberada. Cuando exista un dominio definitivo, compilá con, por ejemplo:

```sh
SITE_URL=https://tu-dominio-real.ar pnpm build
```

El sitemap se genera exclusivamente mediante `@astrojs/sitemap` cuando `SITE_URL` tiene valor. No hay una lista de URL escrita a mano ni fechas `lastmod`.

## Despliegue

El adaptador de Cloudflare y `wrangler.jsonc` producen un Worker. Tras crear un checkpoint, usá el control **Publish** de la interfaz del proyecto para publicarlo.

## Fuentes de contenido

- Turismo Córdoba: Plaza Colón y el recorrido “Córdoba a cielo abierto”.
- Tu Bondi, herramienta de movilidad de la Municipalidad de Córdoba.
- Google Maps para coordenadas, ubicación y puntuación mostrada en la investigación.

La guía es independiente y no oficial.
