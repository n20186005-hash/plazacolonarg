import { defineMiddleware } from 'astro:middleware';
export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.url);
  if (url.hostname === 'plazacolonarg.com' && url.protocol === 'http:') {
    url.protocol = 'https:';
    return Response.redirect(url.href, 308);
  }
  if (url.pathname === '/404.html' || url.pathname === '/404') return context.rewrite('/404/');
  const response = await next();
  if (response.status === 404) {
    const headers = new Headers(response.headers);
    headers.set('X-Robots-Tag', 'noindex, follow');
    headers.set('Cache-Control', 'no-store');
    return new Response(response.body, { status: 404, headers });
  }
  return response;
});
