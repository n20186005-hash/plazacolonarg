# Dirección de diseño — Plaza Colón

## Tres acercamientos explorados

| Nombre | Introducción breve | Probabilidad |
| --- | --- | --- |
| **Herbario de hierro** | Un cuaderno botánico de Alberdi atravesado por la geometría de la fundición parisina: sobrio, luminoso y de lectura pausada. | 0.07 |
| **Avenida al atardecer** | Una guía urbana cálida con fotografía de gran escala, reflejos dorados y ritmo de paseo por Av. Colón. | 0.04 |
| **Archivo de la fuente** | Un formato casi museográfico, de papel envejecido, placas y anotaciones de restauración patrimonial. | 0.09 |

## Dirección elegida: Herbario de hierro

### Movimiento de diseño

El lenguaje visual cruza el **naturalismo editorial de un cuaderno botánico del siglo XIX** con el carácter del hierro fundido francés que define la fuente y las farolas de la plaza. No es una recreación histórica: usa aire, jerarquía contemporánea y detalles de archivo para que la visita se sienta cercana.

### Principios rectores

1. **El lugar manda:** la fotografía real de la plaza sostiene los momentos principales; los ornamentos solamente enmarcan la información.
2. **Patrimonio legible:** metal, agua, sombra y especie vegetal se convierten en señales gráficas, no en decoración genérica.
3. **Recorrido antes que cuadrícula:** cada sección se presenta como una estación de paseo enlazada por una línea de agua y placas desplazadas.
4. **Información que respira:** datos prácticos claros, sin llenar la página de tarjetas idénticas ni llamadas de acción grandilocuentes.

### Filosofía de color

El marfil cálido recuerda el papel y la piedra clara; el verde quebracho comunica sombra y arbolado; el bronce envejecido toma el rol de sello patrimonial; una tinta profunda asegura lectura y contrasta con el agua. El color de firma es **Bronce Colón `#A66A32`**: aparece como una pátina selectiva, nunca como un relleno masivo.

### Paradigma de composición

Una **línea de recorrido vertical** baja por el lateral de escritorio y se vuelve una guía de lectura horizontal en móvil. Las imágenes se insertan como láminas de archivo desfasadas de los bloques de texto, con una gran cabecera de fotografía y un plano de visita que rompe la secuencia editorial.

### Elementos distintivos

- Marco fino de “hierro fundido” con remates circulares alrededor de las fotos.
- Pequeñas etiquetas de herbario numeradas y pinceladas de pátina bronce.
- Línea de agua curva que conecta historia, visita y orientación.

### Interacción

Los detalles emergen con un leve desplazamiento y cambio de pátina; el gráfico de recorrido se activa al pasar o tocar sus etapas. Los enlaces de transporte y mapa llevan directamente a la acción, sin simulaciones.

### Animación

Las secciones entran con opacidad y traslación mínima (160–240 ms, curva `cubic-bezier(0.23, 1, 0.32, 1)`); los mosaicos fotográficos suben 4 px al pasar el cursor. No se animan mapas, textos informativos ni controles de teclado. Se respeta `prefers-reduced-motion`.

### Sistema tipográfico

**DM Serif Display** aporta presencia serena a los titulares y placas de archivo. **Manrope** resuelve navegación, datos y cuerpo en una escala muy legible. Los rótulos van en mayúsculas espaciadas; los párrafos son compactos y claros en español rioplatense.

### Esencia de marca

**Una guía de pausa y orientación para descubrir la fuente, el verde y la memoria de Plaza Colón en Alberdi.** Personalidad: patrimonial, serena, porteña.

### Voz de marca

La voz es observadora, local y concreta; invita sin exagerar. Titulares y microcopys evitan promesas vacías.

> “La fuente no está sola: el paseo la rodea.”

> “Ubicate, elegí sombra y dejá que Alberdi marque el ritmo.”

### Logotipo y favicon

El símbolo es una **fuente de dos niveles** reducida a una silueta de hierro, contenida por una hoja. El favicon conserva solamente el perfil de fuente y la gota, en Bronce Colón y tinta profunda; ambos comparten geometría y pátina.

## Decisiones de estilo

- Las fotos reales de la plaza serán los únicos grandes recursos fotográficos; los gráficos generados quedan en función de ornamento y marca.
- Ninguna sección debe convertirse en una cuadrícula uniforme: se mantendrá el ritmo de láminas, rótulos y línea de paseo.
- La línea de recorrido es un dispositivo de identidad obligatorio: cada estación importante se enlaza visualmente a una hebra de agua continua y curvada, no a bloques editoriales aislados.
- El Bronce Colón `#A66A32` se reserva para pátina: sellos, numerales, marcas de ruta, pequeños rótulos y pocos énfasis decisivos.
- El logotipo debe leerse como sello patrimonial; fuente, hoja, palabra y pie de página comparten siempre la misma impronta de hierro fundido y botánica.
- El español rioplatense es la versión principal del lugar; el inglés tiene una ruta paralela completa (`/en/`) con los mismos conceptos, sin mezclar idiomas dentro de una vista.
- Las páginas de privacidad, términos y cookies son documentos de segundo nivel, accesibles desde el pie y sin ventanas emergentes.
- La línea de agua será el hilo de paseo dominante: cada gran capítulo tendrá una estación visible y una marca de bronce. Transporte, servicios y alrededores se escalonan como paradas, nunca como una cuadrícula homogénea de tarjetas.
