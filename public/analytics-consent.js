(() => {
  const KEY = 'plaza-colon-analytics';
  const VETO = 'plaza-colon-analytics-refusal';
  const ID = 'G-HXM22WWPKP';
  const en = document.documentElement.lang.startsWith('en');
  let refused = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  const read = () => {
    try { return !refused && !sessionStorage.getItem(VETO) && localStorage.getItem(KEY) === 'granted'; }
    catch { return false; }
  };
  const apply = (granted) => {
    window['ga-disable-' + ID] = !granted;
    window.gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    if (granted && !window.__plazaAnalyticsLoaded) {
      window.__plazaAnalyticsLoaded = true;
      window.gtag('js', new Date()); window.gtag('config', ID);
      const script = document.createElement('script'); script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ID);
      document.head.appendChild(script);
    }
  };
  const notify = () => window.dispatchEvent(new Event('plaza-consent-updated'));
  const deny = () => {
    refused = true; apply(false);
    let tab = false; let shared = false;
    try { sessionStorage.setItem(VETO, '1'); tab = sessionStorage.getItem(VETO) === '1'; } catch {}
    try { localStorage.setItem(KEY, 'denied'); shared = localStorage.getItem(KEY) === 'denied'; } catch {}
    if (!shared) { try { localStorage.removeItem(KEY); shared = localStorage.getItem(KEY) === null; } catch {} }
    notify();
    const scope = tab ? (en ? 'in this tab, including reloads' : 'en esta pestaña, incluso al recargar') : (en ? 'on this page only' : 'solo en esta página');
    return { granted: false, saved: shared, message: shared ? (en ? 'Analytics is off. Refusal saved in this browser.' : 'Analítica desactivada. Rechazo guardado en este navegador.') : (en ? 'Analytics is off ' + scope + '. We could not confirm saved refusal: other tabs or future visits may use an earlier permission, including one from this attempt. Review or clear site storage.' : 'Analítica desactivada ' + scope + '. No pudimos confirmar el rechazo guardado: otras pestañas o futuras visitas podrían usar un permiso anterior, incluso de este intento. Revisá o borrá el almacenamiento del sitio.') };
  };
  window.plazaConsent = {
    read,
    save(granted) {
      if (granted !== true) return deny();
      try {
        sessionStorage.getItem(VETO); sessionStorage.removeItem(VETO);
        if (sessionStorage.getItem(VETO) !== null) return deny();
        localStorage.getItem(KEY); localStorage.setItem(KEY, 'granted');
        if (localStorage.getItem(KEY) !== 'granted') return deny();
        refused = false;
        if (!read()) return deny();
        apply(true); notify();
        return { granted: true, saved: true, message: en ? 'Analytics enabled and preference saved in this browser.' : 'Analítica activada y preferencia guardada en este navegador.' };
      } catch { return deny(); }
    }
  };
  window.addEventListener('storage', (event) => { if (event.key === KEY || event.key === null) { apply(read()); notify(); } });
  apply(read());
})();
