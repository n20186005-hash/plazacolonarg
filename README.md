# Plaza Colón · Córdoba, Argentina

Guía independiente en español e inglés sobre Plaza Colón en Alberdi. Astro renderiza las páginas y el pronóstico en el servidor mediante el adaptador de Cloudflare.

## Reproducción

Usar Node 24 y pnpm 11 compatibles con `package.json`:

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm preview
```

El build produce `dist/client` para recursos y `dist/server/entry.mjs` para el Worker. La configuración generada es `dist/server/wrangler.json`. No se usa la antigua ruta `_worker.js/index.js`. Las sesiones de servidor y la transformación remota de imágenes están desactivadas porque la guía no las utiliza.

El sitio canónico predeterminado es `https://plazacolonarg.com`; `SITE_URL` permite una sustitución autorizada. El proyecto configurado es `plazacolonarg`. El sitemap incluye las ocho páginas existentes de ambos idiomas y excluye errores. Los controles de analítica conservan el almacenamiento `plaza-colon-analytics` y la integración de Google Analytics; el mapa y las fuentes externas tienen un flujo independiente descrito en la privacidad.

El pronóstico procede de Open-Meteo; el caché de orientación está separado por idioma y se muestra la hora de consulta. Las imágenes servidas son referencias históricas con fuente y licencia individual en la guía y en `PHOTO_CREDITS.md`.

Un build local no acredita despliegue ni aceptación visual o funcional en producción.
