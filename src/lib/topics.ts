/**
 * Central registry for Plaza Colón / Alberdi long-tail topic pages.
 * Each entry is a self-contained Spanish page (es only, per the 2026-10-30 SEO plan).
 * Adding a new batch means appending entries here; the catch-all route
 * src/pages/[category]/[slug].astro and the homepage TopicLinks pick them up automatically.
 */

export type TopicCategory = 'visita' | 'historia' | 'alrededores' | 'comer' | 'rutas';

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface TopicFaq {
  question: string;
  answer: string;
}

export interface TopicRelated {
  href: string;
  label: string;
}

export interface Topic {
  slug: string; // second URL segment, e.g. "como-llegar"
  category: TopicCategory;
  title: string; // H1
  metaTitle: string;
  metaDescription: string;
  lead: string;
  updated: string;
  facts?: Array<[string, string]>;
  sections: TopicSection[];
  faqs: TopicFaq[];
  related: TopicRelated[];
}

export const CATEGORY_LABELS: Record<TopicCategory, string> = {
  visita: 'Visita',
  historia: 'Historia',
  alrededores: 'Alrededores',
  comer: 'Comer y beber',
  rutas: 'Rutas',
};

/** Municipal tourism source cited across the site. */
export const TOPIC_SOURCE = 'https://turismo.cordoba.gob.ar/cordoba-a-cielo-abierto-plaza-colon/';

export const TOPICS: Topic[] = [
  // ───────────────────────── visita ─────────────────────────
  {
    slug: 'como-llegar',
    category: 'visita',
    title: 'Cómo llegar a Plaza Colón Córdoba',
    metaTitle: 'Cómo llegar a Plaza Colón Córdoba: opciones de transporte',
    metaDescription:
      'Cómo llegar a Plaza Colón sobre Av. Colón en Alberdi, Córdoba. Desde el centro, la terminal de ómnibus y el aeropuerto, y cómo planificar el recorrido.',
    lead:
      'Plaza Colón está sobre Av. Colón, en el barrio Alberdi de Córdoba. Usá la dirección completa como destino y confirmá el recorrido vigente el día de la visita.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Ubicación y punto de destino',
        paragraphs: [
          'La plaza se encuentra sobre Av. Colón, en Alberdi, al oeste del centro de Córdoba. La referencia postal es X5000EPZ, Córdoba, Argentina.',
          'Como destino en el navegador o la app de mapas, usá: "Plaza Colón, Av. Colón, Alberdi, Córdoba, Argentina".',
        ],
      },
      {
        heading: 'Desde el centro de la ciudad',
        paragraphs: [
          'Alberdi queda a pocas cuadras del microcentro. Dependiendo del punto exacto, podés combinar una caminata corta con transporte público.',
          'Revisá cruces y señalización de peatones sobre Av. Colón, que es una avenida de tránsito intenso.',
        ],
      },
      {
        heading: 'Desde la Terminal de Ómnibus',
        paragraphs: [
          'La Terminal de Ómnibus de Córdoba está a varios kilómetros de Alberdi. Consultá la combinación, línea y tarifa vigentes con el operador antes de viajar.',
          'Esta guía no verifica un servicio ni una duración concretos.',
        ],
      },
      {
        heading: 'Desde el aeropuerto',
        paragraphs: [
          'El Aeropuerto Internacional Ingeniero Ambrosio Taravella (Pajas Blancas) queda a unos 30–40 minutos en vehículo, según el tránsito.',
          'Confirmá el medio, la tarifa y el punto de descenso del día con tu operador.',
        ],
      },
      {
        heading: 'Transporte público urbano',
        paragraphs: [
          'Usá el planificador vigente del transporte local con tu origen real. Verificá recorrido, paradas, tarifa y desvíos antes de salir: las líneas cambian.',
        ],
      },
      {
        heading: 'A pie, en bicicleta o en auto',
        paragraphs: [
          'A pie o en bici, revisá ciclovías y cruces. En auto, confirmá por separado las condiciones de estacionamiento; esta guía no ofrece ni garantiza cocheras.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la dirección exacta?',
        answer:
          'Av. Colón, barrio Alberdi, Córdoba (X5000EPZ), Argentina. Ingresá "Plaza Colón, Av. Colón, Alberdi, Córdoba, Argentina" como destino.',
      },
      {
        question: '¿Hay una línea de colectivo recomendada?',
        answer:
          'No verificamos una línea concreta en esta guía. Usá el planificador del transporte local con tu origen real y confirmá antes de viajar.',
      },
      {
        question: '¿Se puede llegar en bicicleta?',
        answer:
          'Sí. Alberdi cuenta con senderos y ciclovías; revisá el cruce de Av. Colón y la señalización según tu ruta.',
      },
    ],
    related: [
      { href: '/visita/ubicacion-y-mapa/', label: 'Ubicación y mapa' },
      { href: '/#transporte', label: 'Cómo llegar (guía principal)' },
      { href: '/visita/con-ninos/', label: 'Visita con niños' },
    ],
  },
  {
    slug: 'ubicacion-y-mapa',
    category: 'visita',
    title: 'Dónde está Plaza Colón: ubicación y mapa',
    metaTitle: 'Plaza Colón Córdoba: ubicación, mapa y cómo no confundirla',
    metaDescription:
      'Dónde queda Plaza Colón en Córdoba: sobre Av. Colón en Alberdi, calles cercanas y el mapa. Cómo distinguirla de otras plazas homónimas.',
    lead:
      'Plaza Colón es la plaza del barrio Alberdi, en la ciudad de Córdoba, Argentina. No la confundas con plazas del mismo nombre en otras localidades.',
    updated: '30 de octubre de 2026',
    facts: [
      ['Barrio', 'Alberdi'],
      ['Avenida', 'Av. Colón'],
      ['Ciudad', 'Córdoba, Argentina'],
      ['Código postal', 'X5000EPZ'],
    ],
    sections: [
      {
        heading: 'La plaza, en Alberdi',
        paragraphs: [
          'Está sobre Av. Colón, en el barrio Alberdi, al oeste del centro de Córdoba. Es un espacio público abierto rodeado de veredas, árboles y edificios residenciales e institucionales.',
        ],
      },
      {
        heading: 'Calles y referencias cercanas',
        paragraphs: [
          'El punto de referencia es Av. Colón. La iglesia María Auxiliadora, mencionada en el relato municipal de Alberdi, queda a pocas cuadras sobre la misma avenida.',
          'No verificamos el número de calle ni esquinas exactas en esta guía; usá el mapa enlazado para ubicarte.',
        ],
      },
      {
        heading: 'Cómo no confundirla',
        paragraphs: [
          'Existen otras plazas y espacios públicos llamados "Plaza Colón" en distintas ciudades. Esta guía trata la de Córdoba, en el barrio Alberdi.',
          'Para evitar confusiones, usá siempre "Plaza Colón, Av. Colón, Alberdi, Córdoba, Argentina" como destino.',
        ],
      },
      {
        heading: 'El mapa',
        paragraphs: [
          'El mapa embebido abre la ubicación en Google Maps. Verificá el recorrido desde tu punto real antes de salir.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿En qué barrio queda?',
        answer: 'En Alberdi, al oeste del centro de Córdoba, sobre Av. Colón.',
      },
      {
        question: '¿Cuál es su código postal?',
        answer: 'X5000EPZ, Córdoba, Argentina.',
      },
      {
        question: '¿Hay riesgo de confundirla con otra?',
        answer:
          'Sí: otras ciudades tienen plazas "Colón". Usá la dirección completa con "Alberdi, Córdoba".',
      },
    ],
    related: [
      { href: '/visita/como-llegar/', label: 'Cómo llegar' },
      { href: '/#map', label: 'Mapa en la guía principal' },
      { href: '/alrededores/iglesia-maria-auxiliadora/', label: 'Iglesia María Auxiliadora' },
    ],
  },
  {
    slug: 'con-ninos',
    category: 'visita',
    title: 'Plaza Colón con niños',
    metaTitle: 'Visitar Plaza Colón con niños: patio de las infancias y consejos',
    metaDescription:
      'Plaza Colón con niños: el patio de las infancias según turismo municipal, sombra, descanso y precauciones cerca de la avenida y la fuente.',
    lead:
      'El relato municipal de turismo describe un patio de las infancias en Plaza Colón. Es un espacio público al aire libre; planificá la visita con sombra, agua y supervisión.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'El patio de las infancias',
        paragraphs: [
          'Turismo municipal de Córdoba incluye un "patio de las infancias" entre los equipamientos de la plaza. No verificamos su estado ni horario actuales; confirmalo al llegar.',
          'Tratá esta descripción como una orientación, no como una garantía de disponibilidad el día de tu visita.',
        ],
      },
      {
        heading: 'Sombra, descanso y agua',
        paragraphs: [
          'El arbolado (fresnos, tilos, tipas, robles y palmeras pindó, según la fuente municipal) da sombra en parte del recorrido. Llevá agua, sobre todo en verano.',
          'No contamos con verificación actual de baños públicos ni de puntos de agua potable en la plaza; prevení esas necesidades.',
        ],
      },
      {
        heading: 'Precauciones cerca de la avenida y la fuente',
        paragraphs: [
          'Av. Colón es una avenida de tránsito intenso. Supervisá a los niños cerca del borde de la vereda y de la fuente.',
          'No dejes a los menores solos cerca del espejo de agua ni de la calle.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Hay un sector para niños?',
        answer:
          'Turismo municipal menciona un patio de las infancias. No auditamos su estado actual; confirmalo al llegar.',
      },
      {
        question: '¿Es apta para ir con bebés?',
        answer:
          'Es un espacio público al aire libre. Llevá sombra, agua y lo necesario para cambio y descanso; no hay servicios verificados en la plaza.',
      },
      {
        question: '¿Conviene ir en carrera o en tarde?',
        answer:
          'Las tardes suelen ser más frescas. Revisá el clima del día y evitá las horas de más calor en verano.',
      },
    ],
    related: [
      { href: '/visita/accesibilidad/', label: 'Accesibilidad' },
      { href: '/visita/ubicacion-y-mapa/', label: 'Ubicación y mapa' },
      { href: '/rutas/paseo-corto/', label: 'Paseo corto por la plaza' },
    ],
  },
  {
    slug: 'accesibilidad',
    category: 'visita',
    title: 'Accesibilidad en Plaza Colón',
    metaTitle: 'Accesibilidad en Plaza Colón Córdoba: rampas y senderos podotáctiles',
    metaDescription:
      'Accesibilidad en Plaza Colón según turismo municipal: rampas de esquina y senderos podotáctiles. Qué está documentado y qué conviene verificar al llegar.',
    lead:
      'Turismo municipal documenta rampas de esquina y senderos podotáctiles en Plaza Colón. Esta guía no audita las superficies ni una ruta continua sin escalones el día de hoy.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Lo que documenta la fuente municipal',
        paragraphs: [
          'El relato de turismo de Córdoba describe rampas en las esquinas y sendas podotáctiles en la plaza.',
          'Estas descripciones son parte del relato patrimonial; no reemplazan una inspección actual de superficies y cruces.',
        ],
      },
      {
        heading: 'Lo que conviene verificar al llegar',
        paragraphs: [
          'No hemos auditado el estado de las veredas, los cruces ni la continuidad de un recorrido sin escalones. Llegando, revisá pendientes, desniveles y el cordón de las esquinas.',
          'Si usás silla de ruedas o andador, planificá el acceso desde el punto de la avenida más conveniente.',
        ],
      },
      {
        heading: 'Acompañamiento y descanso',
        paragraphs: [
          'El recorrido puede hacerse a ritmo suave, con pausas a la sombra del arbolado. Llevá agua.',
          'Para necesidades específicas, confirmá con la fuente municipal o servicios de la ciudad antes de la visita.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Tiene rampas?',
        answer:
          'Turismo municipal documenta rampas de esquina. No auditamos su estado actual; revisalas al llegar.',
      },
      {
        question: '¿Hay senderos podotáctiles?',
        answer:
          'La fuente municipal los menciona. Esta guía no verifica su trazado ni continuidad el día de hoy.',
      },
      {
        question: '¿Es apta para silla de ruedas?',
        answer:
          'En principio sí por las rampas documentadas, pero no garantizamos un recorrido continuo sin escalones; planificá y revisá al llegar.',
      },
    ],
    related: [
      { href: '/visita/con-ninos/', label: 'Visita con niños' },
      { href: '/visita/ubicacion-y-mapa/', label: 'Ubicación y mapa' },
      { href: '/#servicios', label: 'Servicios en la guía principal' },
    ],
  },

  // ───────────────────────── historia ─────────────────────────
  {
    slug: 'plaza-colon',
    category: 'historia',
    title: 'Historia de Plaza Colón',
    metaTitle: 'Historia de Plaza Colón Córdoba: de Juárez Celman a hoy',
    metaDescription:
      'Historia de Plaza Colón en Córdoba: desde la antigua Plaza Juárez Celman (1892) hasta la remodelación de Carlos David en la década de 1950.',
    lead:
      'Plaza Colón nació como Plaza Juárez Celman y adoptó su nombre actual en 1892. Su paisaje actual debe mucho a la remodelación de la década de 1950 a cargo del arquitecto Carlos David.',
    updated: '30 de octubre de 2026',
    facts: [
      ['Nombre anterior', 'Plaza Juárez Celman'],
      ['Año de cambio', '1892'],
      ['Remodelación', 'década de 1950'],
      ['Arquitecto', 'Carlos David'],
    ],
    sections: [
      {
        heading: 'De Juárez Celman a Plaza Colón',
        paragraphs: [
          'El relato municipal sitúa el origen de la plaza a fines del siglo XIX, durante el crecimiento de Alberdi, con el nombre de Plaza Juárez Celman.',
          'En 1892 adoptó el nombre Plaza Colón.',
        ],
      },
      {
        heading: 'La remodelación de Carlos David',
        paragraphs: [
          'En la década de 1950, el arquitecto Carlos David remodeló el paisaje y las fuentes de venecitas de colores.',
          'Esa intervención definió buena parte de la imagen que se conserva.',
        ],
      },
      {
        heading: 'Recuperación documentada',
        paragraphs: [
          'Turismo municipal describe la recuperación de piezas de hierro, la plantación y los sectores recreativos.',
          'El estado y el acceso actuales pueden haber cambiado; confirmalos al llegar.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cómo se llamaba antes?',
        answer: 'Plaza Juárez Celman. Adoptó el nombre Plaza Colón en 1892.',
      },
      {
        question: '¿Quién remodeló la plaza?',
        answer:
          'El arquitecto Carlos David, en la década de 1950, según el relato municipal.',
      },
      {
        question: '¿Cuál es su fecha de fundación?',
        answer:
          'No hay una fecha única verificada; el relato municipal la sitúa a fines del siglo XIX. Tratá las fechas como orientativas.',
      },
    ],
    related: [
      { href: '/historia/fuente-de-hierro/', label: 'La fuente de hierro' },
      { href: '/visita/ubicacion-y-mapa/', label: 'Ubicación y mapa' },
      { href: '/rutas/circuito-cultural-alberdi/', label: 'Circuito cultural de Alberdi' },
    ],
  },
  {
    slug: 'fuente-de-hierro',
    category: 'historia',
    title: 'La fuente de hierro de Plaza Colón',
    metaTitle: 'La fuente de hierro de Plaza Colón: historia y diseño',
    metaDescription:
      'La fuente de hierro fundido de Plaza Colón: su lugar en el paisaje, la conexión con la Exposición de París de 1889 y su cuidado patrimonial.',
    lead:
      'La fuente de hierro fundido es el elemento más reconocible de Plaza Colón. Su historia se entrelaza con la Exposición Universal de París de 1889, según fuentes locales.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Una pieza de hierro fundido',
        paragraphs: [
          'La fuente es de hierro fundido, material que caracteriza el "herbario de hierro" de la plaza.',
          'Turismo municipal la presenta como núcleo del relato patrimonial, junto con las esculturas de su entorno.',
        ],
      },
      {
        heading: 'La conexión con París 1889',
        paragraphs: [
          'Algunas fuentes locales señalan que piezas de hierro de la plaza participaron en la Exposición Universal de París de 1889.',
          'Esta guía no verifica el registro exacto de cada pieza; tratá la referencia como parte del relato histórico local y contrastala con fuentes oficiales si la precisás.',
        ],
      },
      {
        heading: 'Cuidado y recuperación',
        paragraphs: [
          'El relato municipal describe la recuperación de piezas de hierro en intervenciones recientes.',
          'El estado actual depende de las tareas de mantenimiento; confirmalo al visitar.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿De qué material es la fuente?',
        answer: 'De hierro fundido, según la descripción municipal.',
      },
      {
        question: '¿Vino de la Exposición de París de 1889?',
        answer:
          'Fuentes locales lo sugieren para piezas de hierro de la plaza. No verificamos el registro pieza por pieza; tratá la referencia como relato histórico.',
      },
      {
        question: '¿Se puede acercar la fuente?',
        answer: 'Sí, es un espacio público. Respetá el espejo de agua y la señalización.',
      },
    ],
    related: [
      { href: '/historia/plaza-colon/', label: 'Historia de la plaza' },
      { href: '/rutas/paseo-corto/', label: 'Paseo corto por la plaza' },
      { href: '/#historia', label: 'Historia en la guía principal' },
    ],
  },

  // ───────────────────────── alrededores ─────────────────────────
  {
    slug: 'iglesia-maria-auxiliadora',
    category: 'alrededores',
    title: 'Iglesia María Auxiliadora',
    metaTitle: 'Iglesia María Auxiliadora: cerca de Plaza Colón en Alberdi',
    metaDescription:
      'Iglesia María Auxiliadora en Alberdi, Córdoba: su relación con Plaza Colón, cómo llegar a pie y qué conviene verificar antes de visitarla.',
    lead:
      'La iglesia María Auxiliadora es uno de los hitos que el relato municipal de Alberdi asocia a Plaza Colón. Queda a pocas cuadras sobre Av. Colón.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Relación con Plaza Colón',
        paragraphs: [
          'Turismo municipal de Córdoba incluye a María Auxiliadora entre los puntos de interés del recorrido por Alberdi, junto con la plaza.',
          'Es un buen complemento a la visita: se combina con un paseo a pie por la avenida.',
        ],
      },
      {
        heading: 'Cómo llegar desde la plaza',
        paragraphs: [
          'Queda a pocas cuadras sobre Av. Colón. El trayecto es apto para caminar a ritmo suave, con veredas y sombra parcial.',
          'No verificamos la distancia exacta ni el número de calle; usá el mapa para ubicarte desde la plaza.',
        ],
      },
      {
        heading: 'Antes de visitarla',
        paragraphs: [
          'Confirmá los horarios de misa o de visita y las condiciones de acceso el día de tu recorrido.',
          'Esta guía no representa a la parroquia ni verifica su programación.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cómo llego desde Plaza Colón?',
        answer:
          'A pocas cuadras por Av. Colón, caminando a ritmo suave. Usá el mapa para ubicarte.',
      },
      {
        question: '¿Tiene horario de visita?',
        answer:
          'Confirmalo con la parroquia o la diócesis; esta guía no verifica la programación.',
      },
      {
        question: '¿Es parte del circuito de Alberdi?',
        answer:
          'Sí, el relato municipal de turismo la incluye entre los puntos de interés de Alberdi.',
      },
    ],
    related: [
      { href: '/alrededores/la-piojera/', label: 'Centro Cultural La Piojera' },
      { href: '/rutas/circuito-cultural-alberdi/', label: 'Circuito cultural de Alberdi' },
      { href: '/visita/ubicacion-y-mapa/', label: 'Ubicación y mapa' },
    ],
  },
  {
    slug: 'la-piojera',
    category: 'alrededores',
    title: 'Centro Cultural La Piojera',
    metaTitle: 'Centro Cultural La Piojera: cultura barrial en Alberdi',
    metaDescription:
      'Centro Cultural La Piojera en Alberdi, Córdoba: cine, teatro y cultura comunitaria, y cómo combinarlo con una visita a Plaza Colón.',
    lead:
      'La Piojera es un centro cultural del barrio Alberdi asociado al relato municipal de la zona. Representa la vida cultural barrial que rodea a Plaza Colón.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Cultura barrial en Alberdi',
        paragraphs: [
          'El relato de turismo de Córdoba presenta a La Piojera como un espacio de cultura comunitaria del barrio.',
          'Se suma a otros puntos de interés de Alberdi en torno a la plaza.',
        ],
      },
      {
        heading: 'Qué podés encontrar',
        paragraphs: [
          'Según la fuente municipal, el circuito incluye propuestas de cine, teatro y actividad cultural barrial.',
          'La programación cambia; consultala con el propio centro o la agenda cultural de la ciudad.',
        ],
      },
      {
        heading: 'Cómo combinarlo con la plaza',
        paragraphs: [
          'Queda en el entorno de Alberdi, a una caminata de Plaza Colón. Ideal para una tarde de paseo cultural.',
          'Confirmá la ubicación y el horario del día antes de salir.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Qué es La Piojera?',
        answer:
          'Un centro cultural del barrio Alberdi, según el relato municipal de turismo de Córdoba.',
      },
      {
        question: '¿Hay funciones de cine o teatro?',
        answer:
          'La fuente municipal menciona propuestas de cine y teatro; la programación cambia, confirmala con el centro.',
      },
      {
        question: '¿Cómo llego desde Plaza Colón?',
        answer:
          'A pie, en el entorno de Alberdi. Usá el mapa y confirmá la ubicación exacta antes de ir.',
      },
    ],
    related: [
      { href: '/alrededores/iglesia-maria-auxiliadora/', label: 'Iglesia María Auxiliadora' },
      { href: '/rutas/circuito-cultural-alberdi/', label: 'Circuito cultural de Alberdi' },
      { href: '/comer/cafeterias/', label: 'Cafeterías cerca de la plaza' },
    ],
  },

  // ───────────────────────── comer ─────────────────────────
  {
    slug: 'cafeterias',
    category: 'comer',
    title: 'Cafeterías cerca de Plaza Colón',
    metaTitle: 'Cafeterías cerca de Plaza Colón Córdoba: dónde tomar un café',
    metaDescription:
      'Cafeterías y café de barrio cerca de Plaza Colón sobre Av. Colón: ambientes, horarios y cómo combinarlas con el paseo por Alberdi.',
    lead:
      'Sobre Av. Colón, a pocas cuadras de la plaza, hay locales de café y de barrio para una pausa durante el recorrido. Confirmá horarios y disponibilidad antes de ir.',
    updated: '30 de octubre de 2026',
    facts: [
      ['Zona', 'Av. Colón, Alberdi'],
      ['Ejemplo relevado', 'Av. Colón 806 (oct. 2026)'],
      ['Conviene para', 'desayuno, merienda, pausa'],
      ['Verificar', 'horario y disponibilidad'],
    ],
    sections: [
      {
        heading: 'Café de barrio sobre Av. Colón',
        paragraphs: [
          'El relevamiento de octubre de 2026 identifica locales de café sobre Av. Colón, entre ellos uno cerca del 800 (Av. Colón 806).',
          'Son espacios para una pausa; no representamos a ningún comercio ni somos su sitio oficial.',
        ],
      },
      {
        heading: 'Qué buscar en una cafetería',
        paragraphs: [
          'Considerá el ambiente (mesas afuera, sombra, ruido), el tipo de café y si conviene para desayuno, merienda o una parada rápida.',
          'Las cafeterías pueden cambiar de horario o cerrar; confirmalo antes de ir.',
        ],
      },
      {
        heading: 'Cómo combinarlas con el paseo',
        paragraphs: [
          'Una cafetería sobre Av. Colón encaja después de recorrer la plaza o antes de seguir hacia otro punto de Alberdi.',
          'Elegí el tramo de la avenida según tu ruta a pie.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Hay cafeterías cerca de la plaza?',
        answer:
          'Sí, sobre Av. Colón a pocas cuadras. Un relevamiento de octubre de 2026 menciona locales cerca del 800.',
      },
      {
        question: '¿Son sitio oficial nuestro?',
        answer:
          'No. Esta es una guía independiente; no representamos a ningún comercio ni verificamos su operación.',
      },
      {
        question: '¿Conviene ir en cualquier horario?',
        answer:
          'No garantizado. Confirmá el horario del local antes de ir, porque pueden cambiar.',
      },
    ],
    related: [
      { href: '/comer/almuerzos/', label: 'Dónde almorzar' },
      { href: '/rutas/paseo-corto/', label: 'Paseo corto por la plaza' },
      { href: '/alrededores/la-piojera/', label: 'Centro Cultural La Piojera' },
    ],
  },
  {
    slug: 'almuerzos',
    category: 'comer',
    title: 'Dónde almorzar cerca de Plaza Colón',
    metaTitle: 'Dónde almorzar cerca de Plaza Colón Córdoba: opciones al mediodía',
    metaDescription:
      'Dónde almorzar cerca de Plaza Colón: locales de almuerzo sobre Av. Colón, tiempos y cómo organizar el mediodía durante el paseo por Alberdi.',
    lead:
      'Para el mediodía, sobre Av. Colón hay opciones de almuerzo a pocas cuadras de la plaza. Organizá el horario y confirmá disponibilidad antes de ir.',
    updated: '30 de octubre de 2026',
    facts: [
      ['Zona', 'Av. Colón, Alberdi'],
      ['Ejemplos relevados', 'Av. Colón 1241 y 1291 (oct. 2026)'],
      ['Conviene para', 'almuerzo al mediodía'],
      ['Verificar', 'horario y carta del día'],
    ],
    sections: [
      {
        heading: 'Almuerzo sobre Av. Colón',
        paragraphs: [
          'El relevamiento de octubre de 2026 identifica locales de comida y almuerzo sobre Av. Colón, con direcciones como Av. Colón 1241 y 1291.',
          'Son opciones para el mediodía durante el recorrido; no somos sitio oficial de ninguno.',
        ],
      },
      {
        heading: 'Cómo elegir',
        paragraphs: [
          'Pensá en el tiempo disponible (un almuerzo rápido vs. sentarte a comer), el tipo de cocina y el presupuesto.',
          'Los precios y menús cambian; tratá cualquier cifra como referencia y confirmala al local.',
        ],
      },
      {
        heading: 'Organizar el mediodía',
        paragraphs: [
          'Si venís de visitar la plaza, un almuerzo sobre la avenida permite retomar el paseo por Alberdi después.',
          'Reservá con tiempo si el local lo permite, sobre todo los fines de semana.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Dónde almorzar cerca de la plaza?',
        answer:
          'Sobre Av. Colón a pocas cuadras, según un relevamiento de octubre de 2026 (p. ej. Av. Colón 1241 y 1291).',
      },
      {
        question: '¿Los precios son fijos?',
        answer:
          'No. Confirmalos al local; pueden cambiar y esta guía no garantiza cifras.',
      },
      {
        question: '¿Conviene reservar?',
        answer:
          'Depende del local. Si acepta reservas, hacelo con tiempo los fines de semana.',
      },
    ],
    related: [
      { href: '/comer/cafeterias/', label: 'Cafeterías cerca de la plaza' },
      { href: '/rutas/paseo-corto/', label: 'Paseo corto por la plaza' },
      { href: '/visita/ubicacion-y-mapa/', label: 'Ubicación y mapa' },
    ],
  },

  // ───────────────────────── rutas ─────────────────────────
  {
    slug: 'paseo-corto',
    category: 'rutas',
    title: 'Paseo corto por Plaza Colón',
    metaTitle: 'Paseo corto por Plaza Colón: recorrido de 45 a 75 minutos',
    metaDescription:
      'Un paseo corto por Plaza Colón: fuente, esculturas y perímetro en 45–75 minutos, con pausas a la sombra y opciones para seguir por Alberdi.',
    lead:
      'Si tenés poco tiempo, este paseo corto recorre la fuente, las esculturas y un tramo del perímetro de Plaza Colón en unos 45–75 minutos, como sugerencia.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'El recorrido sugerido',
        paragraphs: [
          'Empezá por la fuente de hierro fundido y las esculturas de su entorno.',
          'Seguí un tramo cómodo del perímetro, a la sombra del arbolado, y reservá tiempo para una pausa.',
        ],
      },
      {
        heading: 'Tiempos y pausas',
        paragraphs: [
          'Esta guía sugiere 45–75 minutos para mirar con calma. No es una duración oficial de visita; ajustalo a tu ritmo.',
          'Sentate a descansar a la sombra de los árboles y llevá agua.',
        ],
      },
      {
        heading: 'Cómo continuar',
        paragraphs: [
          'Desde la plaza podés seguir por Av. Colón hacia la iglesia María Auxiliadora o una cafetería del barrio.',
          'Ver opciones en la sección de temas relacionados.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cuánto tiempo necesito?',
        answer:
          'Esta guía sugiere 45–75 minutos como orientación, no como duración oficial.',
      },
      {
        question: '¿Se puede hacer con niños?',
        answer:
          'Sí, con supervisión cerca de la avenida y la fuente. Ver la guía de visita con niños.',
      },
      {
        question: '¿Qué ver en poco tiempo?',
        answer:
          'La fuente, las esculturas y un tramo del perímetro. Es lo esencial del paseo corto.',
      },
    ],
    related: [
      { href: '/visita/con-ninos/', label: 'Visita con niños' },
      { href: '/historia/fuente-de-hierro/', label: 'La fuente de hierro' },
      { href: '/alrededores/iglesia-maria-auxiliadora/', label: 'Iglesia María Auxiliadora' },
    ],
  },
  {
    slug: 'circuito-cultural-alberdi',
    category: 'rutas',
    title: 'Circuito cultural de Alberdi',
    metaTitle: 'Circuito cultural de Alberdi Córdoba: plaza, iglesia y cultura',
    metaDescription:
      'Circuito cultural por Alberdi: Plaza Colón, iglesia María Auxiliadora, La Piojera y más, con un recorrido a pie y tiempos sugeridos.',
    lead:
      'Este circuito une Plaza Colón con hitos culturales de Alberdi como la iglesia María Auxiliadora y el Centro Cultural La Piojera. Es una caminata a ritmo suave por la avenida.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Los puntos del circuito',
        paragraphs: [
          'Inicia en Plaza Colón (fuente y arbolado).',
          'Seguí por Av. Colón hacia la iglesia María Auxiliadora y el Centro Cultural La Piojera, según el relato municipal de Alberdi.',
        ],
      },
      {
        heading: 'Tiempos sugeridos',
        paragraphs: [
          'Reservá unos 45–75 min para la plaza y tiempos adicionales por cada punto cultural, según su programación.',
          'Son sugerencias de la guía, no duraciones oficiales.',
        ],
      },
      {
        heading: 'Antes de salir',
        paragraphs: [
          'Confirmá horarios y acceso de cada lugar, porque pueden cambiar.',
          'Llevá agua y revisá el clima del día.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Qué incluye el circuito?',
        answer:
          'Plaza Colón, iglesia María Auxiliadora y La Piojera, entre los puntos que el relato municipal asocia a Alberdi.',
      },
      {
        question: '¿Es a pie?',
        answer:
          'Sí, es un recorrido a pie por Av. Colón y su entorno, a ritmo suave.',
      },
      {
        question: '¿Cuánto dura?',
        answer:
          'Depende de cuántos puntos sumes; sugerimos empezar con 45–75 min en la plaza.',
      },
    ],
    related: [
      { href: '/alrededores/iglesia-maria-auxiliadora/', label: 'Iglesia María Auxiliadora' },
      { href: '/alrededores/la-piojera/', label: 'Centro Cultural La Piojera' },
      { href: '/rutas/paseo-corto/', label: 'Paseo corto por la plaza' },
    ],
  },
  {
    slug: 'colectivos',
    category: 'visita',
    title: 'Colectivos para llegar a Plaza Colón',
    metaTitle: 'Colectivos para llegar a Plaza Colón Córdoba',
    metaDescription:
      'Cómo ir en colectivo a Plaza Colón sobre Av. Colón en Alberdi: líneas urbanas, paradas y cómo verificar el recorrido vigente antes de viajar.',
    lead:
      'Para venir en colectivo a Plaza Colón, usá el planificador del transporte urbano de Córdoba con tu origen real. Esta guía no verifica una línea concreta: confirmá recorrido y paradas antes de salir.',
    updated: '30 de octubre de 2026',
    facts: [
      ['Destino', 'Plaza Colón, Av. Colón, Alberdi'],
      ['Verificar', 'recorrido y paradas'],
      ['Fuente', 'planificador de transporte urbano'],
    ],
    sections: [
      {
        heading: 'Por qué no damos una línea fija',
        paragraphs: [
          'El transporte urbano de Córdoba modifica recorridos, paradas y frecuencias. Publicar una línea específica sin verificarla el día de tu viaje puede llevarte al lugar equivocado.',
          'Por eso recomendamos usar el planificador oficial del transporte local con tu dirección de origen y "Plaza Colón, Av. Colón, Alberdi" como destino.',
        ],
      },
      {
        heading: 'Cómo planificar el viaje',
        bullets: [
          'Abrí el planificador del transporte urbano de Córdoba y cargá tu origen real.',
          'Como destino, usá "Plaza Colón, Av. Colón, Alberdi, Córdoba".',
          'Revisá las paradas sugeridas cerca de Av. Colón y el tiempo estimado.',
          'Confirmá cualquier desvío o corte de calle el día de la visita.',
        ],
      },
      {
        heading: 'Desde la Terminal de Ómnibus',
        paragraphs: [
          'Desde la terminal, combiná con transporte urbano hasta Alberdi. Consultá la combinación y tarifa vigentes con el operador.',
          'Esta guía no verifica un servicio concreto desde la terminal.',
        ],
      },
      {
        heading: 'En la zona de la plaza',
        paragraphs: [
          'Av. Colón es una avenida de tránsito intenso con paradas de colectivo en sus inmediaciones. Bajate con tiempo y cruzá por las sendas peatonales.',
          'Si venís con niños o movilidad reducida, revisá la parada más cercana a la esquina con rampa.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Qué línea de colectivo va a Plaza Colón?',
        answer:
          'No verificamos una línea fija en esta guía. Usá el planificador del transporte urbano de Córdoba con tu origen real y confirmá antes de viajar.',
      },
      {
        question: '¿Dónde se baja?',
        answer:
          'Cerca de Av. Colón, en Alberdi. Confirmá la parada sugerida por el planificador y la esquina más conveniente.',
      },
      {
        question: '¿Cuánto sale el boleto?',
        answer:
          'La tarifa cambia; consultala con el operador o en el planificador antes de subir.',
      },
    ],
    related: [
      { href: '/visita/como-llegar/', label: 'Cómo llegar' },
      { href: '/visita/estacionamiento/', label: 'Dónde estacionar' },
      { href: '/visita/ubicacion-y-mapa/', label: 'Ubicación y mapa' },
    ],
  },
  {
    slug: 'estacionamiento',
    category: 'visita',
    title: 'Dónde estacionar cerca de Plaza Colón',
    metaTitle: 'Dónde estacionar cerca de Plaza Colón Córdoba',
    metaDescription:
      'Estacionamiento cerca de Plaza Colón en Alberdi: restricciones de calle, cocheras del barrio y cómo verificar disponibilidad antes de ir en auto.',
    lead:
      'Estacionar cerca de Plaza Colón puede ser complicado porque Av. Colón es una avenida de mucho tránsito. Considerá transporte público, y si vas en auto, verificá las restricciones y no esperes encontrar cochera garantizada.',
    updated: '30 de octubre de 2026',
    facts: [
      ['Zona', 'Av. Colón, Alberdi'],
      ['Restricción', 'hora limitada en calle'],
      ['Cocheras', 'consultar en el mapa'],
    ],
    sections: [
      {
        heading: 'En la calle',
        paragraphs: [
          'Las calles aledañas a Av. Colón suelen tener estacionamiento de hora limitada y controles de tránsito. Revisá la señalización al estacionar y no dejes el auto en zona de prohibido.',
          'Esta guía no verifica horarios ni cobros de estacionamiento en la vía pública; confirmalos al llegar.',
        ],
      },
      {
        heading: 'Cocheras del barrio',
        paragraphs: [
          'Alberdi tiene cocheras y playas de estacionamiento a unas cuadras de la plaza. No las listamos con nombres ni precios porque cambian; buscalas en el mapa el día de la visita.',
          'Llegando, compará distancia a la plaza, tarifa por hora y horario de apertura antes de dejar el vehículo.',
        ],
      },
      {
        heading: 'Si venís de visita',
        bullets: [
          'Evaluá dejar el auto en un punto con transporte público hacia Alberdi.',
          'Si estacionás en la calle, llevá moneda o la app de estacionamiento local y respetá los tiempos.',
          'No garantizamos disponibilidad de cocheras; pueden llenarse en horarios de evento.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Hay estacionamiento en la plaza?',
        answer:
          'No verificamos una cochera dentro de la plaza. Hay opciones en las calles aledañas y cocheras del barrio; confirmalas al llegar.',
      },
      {
        question: '¿Es fácil encontrar lugar?',
        answer:
          'No siempre. Av. Colón es de tránsito intenso; en horas pico o con eventos cerca puede haber pocas vacantes.',
      },
      {
        question: '¿Puedo ir en auto con niños?',
        answer:
          'Sí, pero planificá la bajada cerca de una esquina con rampa y cruzá con cuidado por la avenida.',
      },
    ],
    related: [
      { href: '/visita/como-llegar/', label: 'Cómo llegar' },
      { href: '/visita/colectivos/', label: 'Colectivos' },
      { href: '/visita/accesibilidad/', label: 'Accesibilidad' },
    ],
  },
  {
    slug: 'esculturas',
    category: 'historia',
    title: 'Las esculturas de Plaza Colón',
    metaTitle: 'Esculturas de Plaza Colón Córdoba: el herbario de hierro y el entorno',
    metaDescription:
      'Las esculturas y el conjunto escultórico de Plaza Colón: la fuente de hierro fundido, las piezas del "herbario de hierro" y el mobiliario que rodea la plaza.',
    lead:
      'El conjunto escultórico de Plaza Colón gira en torno a su fuente de hierro fundido y a las piezas que el relato municipal llama el "herbario de hierro". Aquí reunimos qué se puede observar y qué conviene verificar al visitar.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'La fuente, pieza central',
        paragraphs: [
          'La fuente de hierro fundido es el elemento más reconocible y el núcleo del relato patrimonial de la plaza, según turismo municipal de Córdoba.',
          'Su diseño de hierro fundido la vincula al "herbario de hierro", ese conjunto de piezas de fundición que caracteriza el espacio.',
        ],
      },
      {
        heading: 'El "herbario de hierro"',
        paragraphs: [
          'El término agrupa las piezas de hierro (fuente, bustos, farolas, bancos) que ornamentan la plaza. No inventariamos cada una sin una fuente específica; conviene observarlas en el recorrido.',
          'Turismo municipal presenta este conjunto como parte de la identidad de Plaza Colón.',
        ],
      },
      {
        heading: 'Qué mirar al recorrer',
        bullets: [
          'La fuente de hierro fundido y su juego de agua.',
          'Las piezas de fundición distribuidas en el contorno de la plaza.',
          'El mobiliario (bancas, farolas) de línea histórica.',
          'La relación de las esculturas con la vegetación (tipas, fresnos, tilos).',
        ],
      },
      {
        heading: 'Para profundizar',
        paragraphs: [
          'El relato municipal también vincula piezas de hierro con la Exposición Universal de París de 1889. Tratá esa referencia como parte del relato local y contrastala con fuentes oficiales si la precisás.',
          'Ver también la página dedicada a la fuente de hierro.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cuántas esculturas tiene la plaza?',
        answer:
          'No damos un número verificado. El conjunto incluye la fuente de hierro y piezas de fundición distribuidas en el entorno; observalas durante la visita.',
      },
      {
        question: '¿De qué son las esculturas?',
        answer:
          'En su mayoría de hierro fundido (fuente, farolas, mobiliario), según la descripción municipal del "herbario de hierro".',
      },
      {
        question: '¿Son de la Exposición de París 1889?',
        answer:
          'Fuentes locales lo sugieren para piezas de hierro de la plaza. No verificamos el registro pieza por pieza; ver la fuente de hierro para el contexto.',
      },
    ],
    related: [
      { href: '/historia/fuente-de-hierro/', label: 'La fuente de hierro' },
      { href: '/historia/plaza-colon/', label: 'Historia de la plaza' },
      { href: '/historia/restauracion/', label: 'Restauración de la plaza' },
    ],
  },
  {
    slug: 'restauracion',
    category: 'historia',
    title: 'La restauración de Plaza Colón',
    metaTitle: 'Restauración de Plaza Colón Córdoba: Carlos David y las venecitas',
    metaDescription:
      'La restauración de Plaza Colón: la remodelación de la década de 1950 a cargo de Carlos David, las venecitas de colores y la recuperación de piezas de hierro.',
    lead:
      'La imagen actual de Plaza Colón debe mucho a la restauración de la década de 1950, cuando el arquitecto Carlos David remodeló el paisaje y las fuentes de venecitas de colores.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'La intervención de Carlos David',
        paragraphs: [
          'En la década de 1950, el arquitecto Carlos David remodeló el paisaje de la plaza y las fuentes de venecitas de colores, según el relato municipal de Córdoba.',
          'Esas venecitas caracterizan buena parte del aspecto que se conserva.',
        ],
      },
      {
        heading: 'Recuperación de piezas de hierro',
        paragraphs: [
          'Turismo municipal describe la recuperación de piezas de hierro del "herbario de hierro" en intervenciones más recientes.',
          'El estado de cada pieza depende del mantenimiento; confirmalo al visitar.',
        ],
      },
      {
        heading: 'Una plaza que se sigue cuidando',
        paragraphs: [
          'Más allá de las fechas, la plaza se mantiene como espacio público con mejoras periódicas. No tratamos las fechas como hechos definitivos; son orientativas.',
          'Ver la historia general de la plaza para el contexto de su nombre y origen.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Quién restauró Plaza Colón?',
        answer: 'El arquitecto Carlos David, en la década de 1950, según el relato municipal.',
      },
      {
        question: '¿Qué son las venecitas?',
        answer:
          'Revestimientos de mosaico de colores que Carlos David usó en fuentes y detalles; hoy forman parte del aspecto de la plaza.',
      },
      {
        question: '¿Cuándo fue la última restauración?',
        answer:
          'El relato municipal menciona recuperación de piezas de hierro en intervenciones recientes, pero no verificamos una fecha única; tratá las fechas como orientativas.',
      },
    ],
    related: [
      { href: '/historia/plaza-colon/', label: 'Historia de la plaza' },
      { href: '/historia/fuente-de-hierro/', label: 'La fuente de hierro' },
      { href: '/historia/esculturas/', label: 'Las esculturas' },
    ],
  },
  {
    slug: 'museo-casa-reforma',
    category: 'alrededores',
    title: 'Museo Casa de la Reforma Universitaria',
    metaTitle: 'Museo Casa de la Reforma Universitaria: historia en Alberdi',
    metaDescription:
      'El Museo Casa de la Reforma Universitaria en Alberdi, Córdoba: su vínculo con la Reforma de 1918, cómo llegar desde Plaza Colón y qué verificar antes de visitarlo.',
    lead:
      'El Museo Casa de la Reforma Universitaria recuerda el origen de la Reforma Universitaria de 1918, un hito que comenzó en Córdoba. Queda en el barrio Alberdi, a pocas cuadras de Plaza Colón.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Por qué importa',
        paragraphs: [
          'La Reforma Universitaria de 1918 nació en Córdoba y cambió las universidades de Argentina y América Latina. El museo se vincula a ese proceso histórico.',
          'Es un punto clave para entender por qué Alberdi es también un barrio de historia universitaria, no solo de paseo.',
        ],
      },
      {
        heading: 'Desde Plaza Colón',
        paragraphs: [
          'Queda a pocas cuadras sobre Av. Colón y su entorno, caminando a ritmo suave. Usá el mapa para ubicar la dirección exacta.',
          'No verificamos la distancia exacta ni el número de calle; confirmalos con el mapa.',
        ],
      },
      {
        heading: 'Antes de visitar',
        bullets: [
          'Confirmá días y horarios de visita con la institución.',
          'Consultá si la entrada es libre o requiere reserva.',
          'Esta guía no representa al museo ni verifica su programación.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿De qué trata el museo?',
        answer:
          'De la Reforma Universitaria de 1918, cuyo origen fue en Córdoba; el museo se vincula a ese hito histórico.',
      },
      {
        question: '¿Cómo llego desde Plaza Colón?',
        answer: 'A pocas cuadras por Av. Colón, caminando. Usá el mapa para ubicar la dirección exacta.',
      },
      {
        question: '¿Tiene horario de visita?',
        answer: 'Confirmalo con la institución; esta guía no verifica la programación ni la entrada.',
      },
    ],
    related: [
      { href: '/alrededores/la-piojera/', label: 'La Piojera' },
      { href: '/historia/plaza-colon/', label: 'Historia de la plaza' },
      { href: '/rutas/circuito-cultural-alberdi/', label: 'Circuito cultural de Alberdi' },
    ],
  },
  {
    slug: 'museo-ciencias-salud',
    category: 'alrededores',
    title: 'Museo de Ciencias de la Salud',
    metaTitle: 'Museo de Ciencias de la Salud: cultura y ciencia en Alberdi',
    metaDescription:
      'El Museo de Ciencias de la Salud en Alberdi, Córdoba: su contexto junto al Hospital de Clínicas, cómo llegar desde Plaza Colón y qué verificar antes de visitarlo.',
    lead:
      'El Museo de Ciencias de la Salud forma parte del patrimonio científico de Córdoba y se ubica en el entorno de Alberdi, cerca del Hospital de Clínicas. Es una opción cultural para lluvias o para quienes buscan otra mirada del barrio.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Ciencia y salud en Alberdi',
        paragraphs: [
          'El museo se vincula a la historia de las ciencias de la salud en Córdoba y al ámbito del Hospital de Clínicas.',
          'Forma parte de la oferta cultural y educativa del barrio, junto con otros puntos de interés.',
        ],
      },
      {
        heading: 'Desde Plaza Colón',
        paragraphs: [
          'Queda en el entorno de Alberdi, a una caminata de la plaza. Usá el mapa para ubicar la dirección exacta.',
          'No verificamos la distancia exacta; confirmala con el mapa.',
        ],
      },
      {
        heading: 'Antes de visitar',
        bullets: [
          'Confirmá días y horarios con la institución responsable.',
          'Consultá si requiere reserva para grupos o visitas guiadas.',
          'Esta guía no representa al museo ni verifica su programación.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Qué se ve en el museo?',
        answer:
          'Colecciones relacionadas con la historia de las ciencias de la salud en Córdoba; confirmá la muestra vigente con la institución.',
      },
      {
        question: '¿Cómo llego desde Plaza Colón?',
        answer: 'A pie, en el entorno de Alberdi. Usá el mapa para ubicar la dirección exacta.',
      },
      {
        question: '¿Es para lluvia?',
        answer: 'Sí, es una opción de interior; verificá que esté abierto el día de tu visita.',
      },
    ],
    related: [
      { href: '/alrededores/museo-casa-reforma/', label: 'Museo Casa de la Reforma' },
      { href: '/alrededores/iglesia-maria-auxiliadora/', label: 'Iglesia María Auxiliadora' },
      { href: '/rutas/circuito-cultural-alberdi/', label: 'Circuito cultural de Alberdi' },
    ],
  },
  {
    slug: 'plaza-de-la-musica',
    category: 'alrededores',
    title: 'Plaza de la Música',
    metaTitle: 'Plaza de la Música Córdoba: shows y cultura en Alberdi',
    metaDescription:
      'Plaza de la Música en Alberdi, Córdoba: espectáculos, conciertos y cultura, su relación con Mercado Alberdi y cómo llegar desde Plaza Colón.',
    lead:
      'Plaza de la Música es un espacio de espectáculos en Alberdi, cercano a Mercado Alberdi. Es ideal para combinar un show con cena o una vuelta por la plaza.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Música y espectáculos',
        paragraphs: [
          'La fuente municipal de turismo presenta a Plaza de la Música como un punto de actividad cultural y musical del barrio.',
          'La programación cambia; consultala en la agenda cultural de la ciudad antes de ir.',
        ],
      },
      {
        heading: 'Junto a Mercado Alberdi',
        paragraphs: [
          'Turismo municipal destaca la relación de Plaza de la Música con Mercado Alberdi: podés ir al show y comer antes o después en el mercado.',
          'Es una combinación práctica: cultura + comida en pocas cuadras.',
        ],
      },
      {
        heading: 'Desde Plaza Colón',
        paragraphs: [
          'Queda a una caminata por Av. Colón y su entorno. Usá el mapa para ubicarla.',
          'No verificamos la distancia exacta; confirmala con el mapa.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Qué es Plaza de la Música?',
        answer:
          'Un espacio de espectáculos y música en Alberdi, según el relato municipal de turismo de Córdoba.',
      },
      {
        question: '¿Hay funciones seguido?',
        answer: 'La programación cambia; confirmala con la agenda cultural de la ciudad.',
      },
      {
        question: '¿Cómo la combino con comida?',
        answer: 'Queda cerca de Mercado Alberdi; podés cenar antes o después del show.',
      },
    ],
    related: [
      { href: '/comer/mercado-alberdi/', label: 'Mercado Alberdi' },
      { href: '/alrededores/la-piojera/', label: 'La Piojera' },
      { href: '/rutas/medio-dia-en-alberdi/', label: 'Medio día en Alberdi' },
    ],
  },
  {
    slug: 'isla-de-los-patos',
    category: 'alrededores',
    title: 'Isla de los Patos',
    metaTitle: 'Isla de los Patos Córdoba: naturaleza en el Suquía',
    metaDescription:
      'Isla de los Patos en Alberdi, Córdoba: el paseo natural junto al río Suquía, cómo llegar desde Plaza Colón y qué verificar antes de ir.',
    lead:
      'Isla de los Patos es un espacio verde y natural junto al río Suquía, en el entorno de Alberdi. Es una opción para respirar aire libre después de la plaza.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Una pausa junto al río',
        paragraphs: [
          'El relato municipal de turismo incluye a Isla de los Patos entre los puntos de interés naturales de Alberdi, sobre el río Suquía.',
          'Es un contrapunto al paseo urbano de la plaza: agua, vegetación y calma.',
        ],
      },
      {
        heading: 'Desde Plaza Colón',
        paragraphs: [
          'Se llega caminando por el entorno de Alberdi y la costanera del Suquía. Usá el mapa para trazar el recorrido.',
          'No verificamos la distancia exacta ni el acceso peatonal vigente; confirmalos al llegar.',
        ],
      },
      {
        heading: 'Antes de ir',
        bullets: [
          'Revisá el estado del sendero y el nivel del río según la época.',
          'Llevá agua y respetá la flora y fauna.',
          'Confirmá que el acceso esté habilitado el día de tu visita.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Qué es Isla de los Patos?',
        answer:
          'Un espacio natural junto al río Suquía, en Alberdi, según el relato municipal de turismo.',
      },
      {
        question: '¿Cómo llego desde Plaza Colón?',
        answer:
          'Caminando por el entorno de Alberdi hacia la costanera del Suquía; usá el mapa para ubicarlo.',
      },
      {
        question: '¿Es apta para niños?',
        answer:
          'Es un paseo al aire libre; supervisá cerca del agua y verificá el acceso antes de ir.',
      },
    ],
    related: [
      { href: '/visita/ubicacion-y-mapa/', label: 'Ubicación y mapa' },
      { href: '/rutas/paseo-corto/', label: 'Paseo corto por la plaza' },
      { href: '/rutas/plan-familiar/', label: 'Paseo familiar' },
    ],
  },
  {
    slug: 'comida-peruana',
    category: 'comer',
    title: 'Comida peruana en Barrio Alberdi',
    metaTitle: 'Comida peruana en Barrio Alberdi Córdoba',
    metaDescription:
      'Dónde comer comida peruana en Barrio Alberdi: platos, locales sobre Av. Colón y cómo combinarlos con un paseo por Plaza Colón.',
    lead:
      'Alberdi tiene presencia de comida peruana, y sobre Av. Colón hay locales para probar ese caudal culinario. Confirmá horarios y disponibilidad antes de ir.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Por qué en Alberdi',
        paragraphs: [
          'Córdoba tiene una comunidad peruana importante, y Alberdi reúne propuestas de comida peruana entre su oferta gastronómica.',
          'Sobre Av. Colón, un relevamiento de octubre de 2026 identifica locales de cocina peruana, como el tramo cercano al 1200–1300.',
        ],
      },
      {
        heading: 'Qué probar',
        bullets: [
          'Platos típicos del Perú (consultá la carta del local).',
          'Opciones para almuerzo o cena según el local.',
          'Combina con una vuelta por la plaza antes o después.',
        ],
      },
      {
        heading: 'Antes de sentarte',
        paragraphs: [
          'Los locales y horarios cambian; confirmalos antes de ir. Esta guía no representa a ningún restaurante ni verifica su operación.',
          'El relevamiento de octubre de 2026 menciona direcciones como Av. Colón 1291 para cocina peruana; tratá las referencias como orientativas.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Hay comida peruana en Alberdi?',
        answer:
          'Sí, hay locales de cocina peruana sobre Av. Colón; un relevamiento de octubre de 2026 los ubicaba cerca del 1200–1300.',
      },
      {
        question: '¿Son sitio oficial nuestro?',
        answer:
          'No. Esta es una guía independiente; no representamos a ningún comercio ni verificamos su operación.',
      },
      {
        question: '¿Conviene ir en cualquier horario?',
        answer: 'No garantizado. Confirmá el horario del local antes de ir.',
      },
    ],
    related: [
      { href: '/comer/almuerzos/', label: 'Dónde almorzar' },
      { href: '/comer/cafeterias/', label: 'Cafeterías cerca de la plaza' },
      { href: '/comer/mercado-alberdi/', label: 'Mercado Alberdi' },
    ],
  },
  {
    slug: 'mercado-alberdi',
    category: 'comer',
    title: 'Mercado Alberdi: dónde comer',
    metaTitle: 'Mercado Alberdi Córdoba: dónde comer y qué hacer',
    metaDescription:
      'Mercado Alberdi en Córdoba: opciones para comer, horarios y su relación con Plaza de la Música, a pocas cuadras de Plaza Colón.',
    lead:
      'Mercado Alberdi es un punto de comida y vida de barrio a pocas cuadras de Plaza Colón, y queda junto a Plaza de la Música. Ideal para comer antes o después de un show.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Comer en el mercado',
        paragraphs: [
          'El mercado reúne locales de comida y puestos de barrio, según el relato municipal de turismo de Córdoba.',
          'La oferta cambia; confirmá horarios y disponibilidad antes de ir.',
        ],
      },
      {
        heading: 'Junto a Plaza de la Música',
        paragraphs: [
          'Turismo municipal destaca la relación de Mercado Alberdi con Plaza de la Música: podés combinar cena y espectáculo en pocas cuadras.',
          'Es una de las combinaciones más prácticas del barrio.',
        ],
      },
      {
        heading: 'Desde Plaza Colón',
        paragraphs: [
          'Queda a una caminata por Av. Colón y su entorno. Usá el mapa para ubicarlo.',
          'No verificamos la distancia exacta; confirmala con el mapa.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Qué se come en Mercado Alberdi?',
        answer: 'Opciones de comida de barrio y puestos; la oferta cambia, confirmala antes de ir.',
      },
      {
        question: '¿Está abierto siempre?',
        answer: 'Los horarios cambian; verificalos antes de ir. No garantizamos disponibilidad.',
      },
      {
        question: '¿Cómo lo combino con un show?',
        answer: 'Queda cerca de Plaza de la Música; cená y luego vas al espectáculo, o al revés.',
      },
    ],
    related: [
      { href: '/comer/comida-peruana/', label: 'Comida peruana' },
      { href: '/alrededores/plaza-de-la-musica/', label: 'Plaza de la Música' },
      { href: '/rutas/medio-dia-en-alberdi/', label: 'Medio día en Alberdi' },
    ],
  },
  {
    slug: 'medio-dia-en-alberdi',
    category: 'rutas',
    title: 'Medio día en Barrio Alberdi',
    metaTitle: 'Medio día en Barrio Alberdi Córdoba: plan con Plaza Colón',
    metaDescription:
      'Cómo pasar medio día en Barrio Alberdi: Plaza Colón, iglesia, cultura, comida y paseo por el río, con tiempos sugeridos y combinaciones.',
    lead:
      'Si tenés medio día, este recorrido une Plaza Colón con hitos culturales y gastronómicos de Alberdi. Son sugerencias de la guía, no duraciones oficiales.',
    updated: '30 de octubre de 2026',
    facts: [
      ['Tiempo sugerido', '3–5 horas'],
      ['A pie', 'sí, por Av. Colón'],
      ['Incluye', 'plaza, iglesia, cultura, comida, río'],
    ],
    sections: [
      {
        heading: 'El recorrido sugerido',
        bullets: [
          'Empezá en Plaza Colón (fuente y arbolado): 45–75 min.',
          'Seguí por Av. Colón a la iglesia María Auxiliadora: 15–25 min.',
          'Sumá La Piojera o el Museo Casa de la Reforma: 30–60 min.',
          'Comé en el barrio (Mercado Alberdi o cocina peruana): 60–90 min.',
          'Cerrá con Plaza de la Música o una vuelta al río Suquía: 30–60 min.',
        ],
      },
      {
        heading: 'Tiempos y pausas',
        paragraphs: [
          'Sumando tramos, estimamos unas 3–5 horas con calma. Ajustalo a tu ritmo y al clima.',
          'Llevá agua y aprovechá la sombra del arbolado en los tramos al aire libre.',
        ],
      },
      {
        heading: 'Cómo combinar',
        paragraphs: [
          'Si venís con poco tiempo, priorizá Plaza Colón + una caminata por Av. Colón.',
          'Si tenés más, sumá cultura (museos, La Piojera) y cierre junto al río.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cuánto tiempo necesito?',
        answer: 'Unas 3–5 horas con calma, como sugerencia; no es una duración oficial.',
      },
      {
        question: '¿Se puede hacer a pie?',
        answer: 'Sí, todo el recorrido es a pie por Av. Colón y su entorno, a ritmo suave.',
      },
      {
        question: '¿Qué hacer si llueve?',
        answer: 'Andá a interiores: museos o Mercado Alberdi; verificá que estén abiertos.',
      },
    ],
    related: [
      { href: '/rutas/paseo-corto/', label: 'Paseo corto por la plaza' },
      { href: '/rutas/circuito-cultural-alberdi/', label: 'Circuito cultural de Alberdi' },
      { href: '/alrededores/plaza-de-la-musica/', label: 'Plaza de la Música' },
    ],
  },
  {
    slug: 'plan-familiar',
    category: 'rutas',
    title: 'Paseo familiar en Alberdi',
    metaTitle: 'Paseo familiar en Alberdi Córdoba con Plaza Colón',
    metaDescription:
      'Paseo familiar en Alberdi: Plaza Colón con niños, espacios accesibles, comida para todos y opciones de descanso, con consejos prácticos.',
    lead:
      'Alberdi se presta para un paseo en familia: Plaza Colón tiene sector para niños y senderos accesibles, y el barrio suma comida y pausas sin apuro.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'En Plaza Colón con los chicos',
        paragraphs: [
          'El relato municipal menciona un patio de las infancias en la plaza. No auditamos su estado actual; confirmalo al llegar.',
          'Supervisá a los niños cerca de Av. Colón y de la fuente; usá las esquinas con rampa para cruzar.',
        ],
      },
      {
        heading: 'Ritmo y descanso',
        bullets: [
          'Caminá a ritmo suave con pausas a la sombra del arbolado.',
          'Llevá agua, sobre todo en verano.',
          'Si usás silla de ruedas o andador, aprovechá las rampas documentadas y revisá el acceso al llegar.',
        ],
      },
      {
        heading: 'Comer en familia',
        paragraphs: [
          'El barrio tiene opciones para almorzar o merendar, como cafeterías y el Mercado Alberdi. Confirmá horarios y que haya opciones para chicos.',
          'Ver las guías de comida del barrio para elegir.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Es bueno para ir con niños?',
        answer:
          'Sí: la plaza tiene sector infantil documentado y el barrio es caminable; supervisá cerca de la avenida y la fuente.',
      },
      {
        question: '¿Es accesible?',
        answer:
          'Turismo municipal documenta rampas y senderos podotáctiles; no garantizamos un recorrido continuo sin escalones, revisalo al llegar.',
      },
      {
        question: '¿Dónde descansar y comer?',
        answer: 'Cafeterías y Mercado Alberdi en el barrio; confirmá horarios antes de ir.',
      },
    ],
    related: [
      { href: '/visita/con-ninos/', label: 'Visita con niños' },
      { href: '/visita/accesibilidad/', label: 'Accesibilidad' },
      { href: '/comer/mercado-alberdi/', label: 'Mercado Alberdi' },
    ],
  },
  {
    slug: 'barrio-alberdi',
    category: 'historia',
    title: 'Historia del Barrio Alberdi',
    metaTitle: 'Historia del Barrio Alberdi Córdoba: origen y crecimiento',
    metaDescription:
      'Historia del Barrio Alberdi de Córdoba: su formación a fines del siglo XIX, el nombre en homenaje a Juan Bautista Alberdi y su relación con Plaza Colón.',
    lead:
      'Barrio Alberdi es uno de los barrios históricos de Córdoba y el entorno donde se encuentra Plaza Colón, sobre Av. Colón. Su historia acompaña el crecimiento de la ciudad desde el siglo XIX.',
    updated: '30 de octubre de 2026',
    facts: [
      ['Barrio', 'Alberdi, Córdoba'],
      ['Nombre', 'homenaje a Juan Bautista Alberdi'],
      ['Contexto', 'crecimiento de la ciudad, s. XIX'],
      ['Incluye', 'Plaza Colón, Av. Colón'],
    ],
    sections: [
      {
        heading: 'De la periferia a barrio',
        paragraphs: [
          'Como otros barrios de Córdoba, Alberdi se fue configurando con la expansión de la ciudad a fines del siglo XIX.',
          'Las fechas exactas de parcelamiento y apertura de calles son orientativas; conviene contrastarlas con fuentes municipales si las necesitás.',
        ],
      },
      {
        heading: 'El nombre de Alberdi',
        paragraphs: [
          'El barrio honra a Juan Bautista Alberdi (1810–1884), figura del pensamiento político y constitucional del siglo XIX.',
          'No tratamos la biografía como tema de esta guía; mencionamos el origen del nombre para ubicar a Plaza Colón en su contexto barrial.',
        ],
      },
      {
        heading: 'Un barrio con plaza propia',
        paragraphs: [
          'Plaza Colón se inserta en el tejido de Alberdi como espacio verde y de encuentro del barrio.',
          'Su paisaje actual debe mucho a la remodelación de la década de 1950, según el relato municipal (ver la historia de la plaza).',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Por qué se llama Barrio Alberdi?',
        answer: 'En homenaje a Juan Bautista Alberdi, pensador y constitucionalista del siglo XIX.',
      },
      {
        question: '¿Cuándo se formó el barrio?',
        answer:
          'En el marco del crecimiento de Córdoba a fines del siglo XIX. Tratá las fechas como orientativas y contrastalas con fuentes oficiales.',
      },
      {
        question: '¿Dónde queda Plaza Colón dentro de Alberdi?',
        answer: 'En el barrio, sobre Av. Colón. Ver ubicación y mapa para ubicarla con precisión.',
      },
    ],
    related: [
      { href: '/historia/plaza-colon/', label: 'Historia de Plaza Colón' },
      { href: '/rutas/circuito-cultural-alberdi/', label: 'Circuito cultural de Alberdi' },
      { href: '/alrededores/iglesia-maria-auxiliadora/', label: 'Iglesia María Auxiliadora' },
    ],
  },
  {
    slug: 'casonas-alberdi',
    category: 'historia',
    title: 'Las casonas de Barrio Alberdi',
    metaTitle: 'Las casonas de Barrio Alberdi: arquitectura histórica cerca de Plaza Colón',
    metaDescription:
      'Las casonas de Barrio Alberdi en Córdoba: la arquitectura residencial de fines del siglo XIX y principios del XX cerca de Plaza Colón, y qué observar al recorrer.',
    lead:
      'Barrio Alberdi conserva casonas de arquitectura residencial de fines del siglo XIX y principios del XX. Varios edificios históricos rodean el área de Plaza Colón y conforman el paseo patrimonial del barrio.',
    updated: '30 de octubre de 2026',
    sections: [
      {
        heading: 'Un barrio de casonas',
        paragraphs: [
          'Alberdi se reconoce por sus casonas, construcciones de una o dos plantas con detalles de la arquitectura residencial de principios del siglo XX.',
          'No inventariamos cada edificio sin una fuente específica; conviene observarlos en el recorrido y contrastarlos con el catálogo patrimonial municipal.',
        ],
      },
      {
        heading: 'Qué mirar al caminar',
        bullets: [
          'Fachadas de ladrillo y revoques con molduras de la época.',
          'Rejas, patios y detalles de carpintería de las casonas.',
          'La continuidad de este tejido frente a Plaza Colón y Av. Colón.',
          'La relación de las casonas con el paseo cultural del barrio.',
        ],
      },
      {
        heading: 'Para profundizar',
        paragraphs: [
          'El relato municipal de Alberdi vincula estas construcciones con la historia del barrio y su crecimiento residencial.',
          'Ver también la historia del barrio y el circuito cultural para encadenar el recorrido.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Qué son las casonas de Alberdi?',
        answer:
          'Edificios residenciales de fines del s. XIX y principios del XX que caracterizan al barrio; observalas en el paseo y contrastalas con fuentes patrimoniales.',
      },
      {
        question: '¿Se pueden visitar por dentro?',
        answer:
          'Muchas siguen como viviendas o uso privado. Disfrutalas desde la vía pública y respetá la privacidad; no asumás visitas guiadas sin confirmar.',
      },
      {
        question: '¿Cerca de Plaza Colón hay casonas?',
        answer: 'Sí, el entorno de Alberdi sobre Av. Colón incluye construcciones históricas del barrio.',
      },
    ],
    related: [
      { href: '/historia/barrio-alberdi/', label: 'Historia del Barrio Alberdi' },
      { href: '/historia/plaza-colon/', label: 'Historia de Plaza Colón' },
      { href: '/rutas/circuito-cultural-alberdi/', label: 'Circuito cultural de Alberdi' },
    ],
  },
];

export function getTopic(category: string, slug: string): Topic | undefined {
  return TOPICS.find((t) => t.category === category && t.slug === slug);
}

export function topicsByCategory(): Array<{ category: TopicCategory; label: string; items: Topic[] }> {
  return (Object.keys(CATEGORY_LABELS) as TopicCategory[])
    .map((category) => ({
      category,
      label: CATEGORY_LABELS[category],
      items: TOPICS.filter((t) => t.category === category),
    }))
    .filter((g) => g.items.length > 0);
}
