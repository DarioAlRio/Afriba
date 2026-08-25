# PRODUCT.md — AFRIBA

Documento de verdad de producto. Todo lo que aparece aquí procede del dominio
`http://www.afriba.com` (páginas, hoja de estilos, imágenes) o de los PDF que ese
dominio publica. Lo que no tiene origen comprobable está marcado como supuesto o
figura en `PENDIENTE.md`.

---

## Platform

Sitio web público, estático, multipágina, en castellano.

- **Entrega:** HTML plano generado por un pequeño generador en Node. La carpeta se
  sube tal cual a cualquier alojamiento; no hay backend, ni base de datos, ni
  framework, ni dependencias en tiempo de ejecución.
- **Dispositivos reales:** escritorio en oficina (el visitante profesional trabaja
  sentado, con hoja de cálculo al lado) y teléfono en la puerta del recinto (el
  transportista comprueba horario y teléfono de muelles a pie de dársena).
- **Navegadores objetivo:** Safari 15+, Chrome, Edge y Firefox actuales.
- **Herencia técnica del original:** el sitio antiguo era XHTML 1.0 Frameset con
  jQuery 1.9.1 y jQuery UI 1.10.3 cargados por HTTP desde `code.jquery.com`,
  codificación ISO-8859-1 en la mayoría de páginas y UTF-8 en las legales. Nada de
  eso se conserva; sí se conservan los servicios de terceros vivos (Google
  Analytics `G-95GE4BGW5C` y el mapa incrustado de Google My Maps
  `mid=1hqSYV1S0_DNtdgYnWKNDtxHRZ1Q`).
- **Zona privada fuera de alcance:** el área de clientes vive en el mismo servidor
  (`Resumen.asp`) y no se replica. El sitio nuevo solo enlaza el acceso.

## Users

Cuatro personas distintas entran por la misma puerta, y cada una busca una cosa
muy concreta.

1. **Responsable de logística o de cadena de suministro de una empresa
   alimentaria.** Evalúa si AFRIBA puede absorber su stock congelado. Necesita:
   capacidad en palets, temperatura de régimen, tipos y medidas de palé
   admitidos, certificaciones vigentes, ubicación y una vía para pedir
   presupuesto. Es quien convierte.
2. **Cliente ya contratado.** Entra a operar: consultar stock, lanzar pedidos,
   confirmar el horario de recepciones y expediciones y la hora límite de
   pedidos. Necesita el acceso al área de clientes en un clic y los horarios sin
   ambigüedad.
3. **Transportista o chófer.** Llega al recinto, a menudo con el móvil en la
   mano. Necesita: dirección exacta, horario de muelles, teléfono de muelles y
   las normas de acceso a antecámara y muelles (chaleco reflectante, línea
   naranja, ventanilla de control entre los muelles 11 y 12, identificación de
   visita autorizada).
4. **Interlocutor administrativo, comercial o accionista.** Busca a una persona
   concreta con su extensión y su correo, o la convocatoria de Junta General.

## Product Purpose

AFRIBA guarda producto alimentario congelado de terceros a un régimen de hasta
−22 °C y responde de que la cadena de frío no se rompe mientras la mercancía está
bajo su techo. El sitio existe para que esas cuatro personas obtengan, sin llamar
por teléfono, la información operativa que ya está publicada: qué cabe, a qué
temperatura, con qué certificados, en qué horario, en qué dirección y con quién
hablar.

No es un catálogo ni una tienda. Es la ficha operativa de una instalación
industrial, más una puerta de entrada al área de clientes y un formulario de
solicitud de presupuesto.

## Positioning

Almacén frigorífico **público** —presta espacio y manipulación a cualquier
operador, no almacena producto propio— situado dentro de Mercamadrid. El
argumento que el propio dominio repite es la posición: «el segundo mercado
mayorista de pescados del mundo y el primero de cárnicos de Europa, centro
neurálgico de distribución en la península Ibérica».

El lema que el logotipo lleva impreso resume el encaje: **«Su operador logístico
del frío»**.

Frente al resto del sector, lo que AFRIBA publica y otros no es el detalle
técnico: potencias frigoríficas, refrigerante y carga de amoníaco, número de
sondas, alturas de ubicación, modelos concretos de máquina. Esa transparencia
técnica es la posición, y el sitio nuevo la trata como el activo principal.

## Operating Context

- **Instalación:** Edificio AFRIBA, Calle Eje 3-18, 8, Plataforma Baja,
  Mercamadrid, 28053 Madrid. Coordenadas publicadas: 40.3578022, −3.6707087. El
  domicilio social se cita también como Ctra. Villaverde a Vallecas km 3,800,
  28053 Madrid.
- **Inauguración:** 18 de abril de 2001, con el entonces Ministro de Agricultura,
  Pesca y Alimentación D. Miguel Arias Cañete y el Alcalde de Madrid D. José
  María Álvarez del Manzano.
- **Horarios publicados:**
  - Centralita: 915 079 255, lunes a viernes de 09:00 a 14:00.
  - Muelles: 915 079 256, lunes a viernes de 07:00 a 17:00 (atención telefónica).
  - Recepciones (entradas/descargas): lunes a viernes de 07:00 a 15:00.
  - Expediciones (salidas/cargas): lunes a viernes de 07:00 a 15:00.
  - Pedidos de salida del día: por la web, el día anterior antes de las 16:50.
  - Festivos locales y de la Comunidad de Madrid: horario reducido, consultar
    unos días antes. Festivos nacionales y fines de semana: cerrado.
- **Correo general:** afriba@vanhessen.com. **Protección de datos:**
  lopd@vanhessen.com.
- **Sociedad:** ALMACENES FRIGORIFICOS IBARZ, S.A. · CIF A82423641 · Registro
  Mercantil de Madrid, T 30602, F 6, S 8, H M 247598, I/A 34 · Administrador
  único: Jorge Orlando Morejón Guillama.

## Capabilities and Constraints

**Lo que la instalación hace (todo publicado en el dominio):**

- Almacenamiento en régimen de congelación hasta −22 °C.
- Carga y descarga de mercancía sobre palés de madera homologados AME y EUR.
- Crossdocking.
- Gestión de almacén por radiofrecuencia y control de trazabilidad del producto.
- Captura y emisión de datos en formato electrónico y gestión de EAN 128.
- Gestión de stocks y pedidos en línea a través del sitio web.
- Alquiler de oficinas de 40 a 120 m².

**Cifras duras publicadas** (son el contenido, no adorno):

| Dato | Valor |
|---|---|
| Capacidad | 8.943 palés |
| Superficie de cámara | 3.388 m² |
| Altura de cámara | 15 m |
| Pasillos | 26, con estanterías móviles |
| Alturas de ubicación | hasta 7 |
| Potencia frigorífica de cámara | 640 kW |
| Evaporadores de cámara | 8 unidades de 89,17 kW, 3 ventiladores × 1,40 kW |
| Sondas de temperatura | 8, independientes, en el centro de la cámara |
| Antecámara | 529,70 m² a +8 °C, 95 kW, 4 evaporadores |
| Muelle exterior | 816,60 m² |
| Dársenas | 11 con abrigo y plataforma electromecánica + 1 manual con rampa fija |
| Básculas | 2 de palés a nivel de suelo + 1 de sobremesa |
| Sala de máquinas | 640 kW (−32/−12/+35 °C), refrigerante R-717 NH₃, 1.514 kg de amoníaco |
| Compresores | 2 de tornillo (−32/+35 °C) de 165 kW y 344 kW frigoríficos; 1 alternativo (−12/+35 °C) de 27,7 kW y 103,5 kW frigoríficos |
| Intercambiador | de placas, 10,9 dm³ a 16 bares; glicol a −12 °C, depósito de casi 3.900 litros |
| Centro de transformación | 1.000 kVA en exclusiva |
| Videovigilancia | 32 cámaras digitales |
| Oficinas en alquiler | 800 m² en 2 plantas |

**Parque móvil publicado:** trilaterales Combi LINDE EK 15 cabinadas con
calefacción (ubicación a más de 14 m); retráctiles de triple mástil TOYOTA
RRE200CC cabinadas con calefacción (hasta 12,70 m); transpaletas eléctricas
TOYOTA BT LPE200; contrapesada TOYOTA de triple mástil para 1.600 kg.

**Certificaciones vigentes según los PDF del propio dominio:**

- **IFS Logistics V3** (diciembre de 2023), certificado IFSLOG-2022/0003, COID
  80521, emitido por AENOR. Alcance: almacenamiento de productos alimentarios a
  temperatura de congelación controlada. Nivel alcanzado: superior, 97,17 %.
  Registros sanitarios 10.00016066/M y 40.16267/M, GLN 8438002242005.
- **Certicalidad SAE**, certificado de conformidad de producto EX128053051
  Rev. 2, protocolo PR-EXP REV.4 CCVE (01/07/2023) del RD 993/2014, categoría
  CARNE, nivel de SAE 3, registro sanitario 40.16267/M.
- **HACCP** conforme a RP-B13 y CXC 1-1969, Rev. 6 2023.

**Restricciones del proyecto web:**

- **Sin backend.** El formulario de presupuesto solo puede llegar a destino si el
  sitio se aloja donde sigue vivo el CGI original
  (`/cgi-bin/afriba.exe/contacto`, que a fecha de rastreo responde 200). Fuera de
  ese alojamiento el formulario no envía nada y debe decirlo.
- **Material gráfico limitado.** Las fotografías del dominio miden como mucho
  960 px de ancho y varias solo 192 px. Ninguna se amplía.
- **Sin HTTPS.** El dominio no responde por `https://` a fecha de rastreo.
- **Sin `robots.txt` ni `sitemap.xml`** en el original.
- **PDF sin capa de texto.** «Política de calidad», «Comunicado a transportistas»
  y el certificado HACCP son escaneados: se republican tal cual, pero su
  contenido no puede transcribirse ni resumirse sin inventar.

## Brand Commitments

Se conservan sin negociación:

1. **El nombre y la razón social.** AFRIBA y ALMACENES FRIGORÍFICOS IBARZ, S.A.,
   escritos como los escribe la empresa.
2. **El isotipo:** triángulo azul con copo de nieve y oso polar (`detalle1.gif`
   del original). Es la marca; se rehace en vectorial respetando geometría y
   color, no se sustituye por un icono genérico.
3. **El lema del logotipo:** «Su operador logístico del frío».
4. **El azul.** El azul del triángulo, `#002D9A`, y el azul marino del logotipo,
   `#00156E`, son la marca. La paleta nueva sale de ahí y del CSS antiguo, no de
   una elección estética nueva.
5. **Los textos legales, las normativas y las condiciones**, literales: aviso
   legal, política de privacidad, política de cookies, cláusulas informativas de
   los formularios y convocatoria de Junta General.
6. **Los datos duros**, tal y como los publica la empresa, con sus unidades y sus
   decimales a la española.
7. **El vocabulario del oficio**: dársena, antecámara, ubicación, palé, estiba,
   trasiego, expedición, recepción. No se «traduce» a lenguaje de marketing.

## Evidence on Hand

- **12 páginas HTML** del dominio, descargadas y transcritas
  (`_original-sitio/`): Index, Servicios, Equipamiento, RRHH, Presupuesto,
  Clientes, 171225 (convocatoria vigente), 221124 (convocatoria anterior), Aviso
  legal, Política de privacidad, Política de cookies, más `Contacto.html`,
  huérfana.
- **Hoja de estilos original** `EstilosAfriba.css`, 21,6 kB: de ahí salen los
  colores de título (`#00156E`), fondo de cabecera y hover (`#0024BB`), cajas de
  detalle (`#FFEA91`), botón de cookies (`#FAB500`), texto (`#000622`) y la pila
  tipográfica `"Gill Sans MT", "Century Gothic", …`.
- **30 imágenes** en su resolución original, copia intacta en
  `assets/img/_original/`.
- **6 PDF** publicados por el dominio, en `assets/docs/`.
- **Logotipo** `Logo.jpg` 960×120 e **isotipo** `detalle1.gif` 195×171,
  muestreados píxel a píxel para la paleta.
- **Terceros vivos:** Google Analytics 4 `G-95GE4BGW5C`; mapa Google My Maps
  `1hqSYV1S0_DNtdgYnWKNDtxHRZ1Q`.

Lo que **no** hay y por tanto no aparece en el sitio: precios y tarifas, plazos de
servicio, testimonios, lista de clientes, número de empleados, volumen anual,
redes sociales, certificado ISO 9001 vigente: el original mostraba el sello y enlazaba el PDF,
pero ese archivo devuelve 404 en el propio servidor, así que no se ha podido
comprobar la vigencia.

## Product Principles

1. **El dato es el argumento.** Antes que un adjetivo, una cifra con su unidad.
   Quien decide contratar un almacén frigorífico compara kilovatios, palés y
   grados, no promesas.
2. **Cada visitante llega a lo suyo en un clic.** El transportista no debe
   atravesar la historia de la empresa para encontrar el horario de muelles.
3. **Nada se afirma sin origen.** Si el dato no está en el dominio ni en sus PDF,
   no se publica.
4. **Lo operativo manda sobre lo institucional.** Horarios, teléfonos y normas de
   acceso son contenido de primera clase, no letra pequeña del pie.
5. **Honestidad en los formularios.** Si un envío no puede completarse, se dice
   antes de escribir, no después de pulsar.
6. **La instalación se enseña, no se describe.** Las fotografías reales de la
   cámara, los muelles y la sala de máquinas valen más que cualquier ilustración.

## Accessibility & Inclusion

- Contraste AA (4,5:1 en texto normal, 3:1 en texto grande y en elementos de
  interfaz) verificado en todas las páginas y a todos los anchos. Cuando un color
  de marca no llega, no se cambia la marca: se usa una variante «tinta» para el
  texto.
- Un solo `<h1>` por página, jerarquía de encabezados sin saltos, enlace de salto
  al contenido.
- Navegación completa con teclado, foco visible con `:focus-visible`, foco
  atrapado en el cajón lateral y en el visor de imágenes, cierre con `Escape`.
- `aria-expanded`, `aria-controls` y `aria-current` en el mega-menú y en los
  acordeones del cajón; los bloques plegables de contenido son `<details>`
  nativos, que ya llevan su propia semántica.
- Objetivos táctiles de 44 px como mínimo, con `env(safe-area-inset-bottom)` en la
  barra fija inferior del móvil.
- Textos alternativos que describen lo que se ve, no el nombre del archivo.
- `prefers-reduced-motion` respetado: sin animaciones de entrada ni transiciones
  largas cuando el sistema lo pide.
- Tablas de datos con `<th scope>`, título y desplazamiento horizontal propio,
  para que una tabla ancha nunca rompa la página.
- El sitio se lee y se navega con JavaScript desactivado; las animaciones de
  entrada dependen de una clase `js` que añade un script en línea del `<head>`.
- Los correos se ensamblan en el navegador desde `data-correo="cuenta|dominio"`
  para frenar a los robots recolectores; el enlace resultante es un `mailto:` real
  y accesible, y sin JavaScript se muestra la dirección legible.

---

### Supuestos declarados

- El dominio de correo `vanhessen.com` sugiere pertenencia al grupo Van Hessen,
  pero **el sitio no lo afirma en ningún sitio**, así que el sitio nuevo tampoco
  lo afirma.
- La página `Contacto.html` (huérfana, sin enlaces entrantes) se interpreta como
  versión anterior de `Presupuesto.html`: mismos campos, sin las cláusulas de
  protección de datos. Se trata como obsoleta y se redirige a Presupuesto.
- El enlace «Avisos legales» apuntaba a `171225.html` desde las páginas
  principales y a `221124.html` (convocatoria de 2024, caducada) desde las
  legales. Se toma la primera como vigente.
