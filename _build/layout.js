/*
 * layout.js — la envoltura común de todas las páginas.
 *
 * Aquí viven: <head> con SEO y datos estructurados, la cabecera con el
 * mega-menú, el cajón lateral del móvil, los héroes, la banda de llamada a la
 * acción, la barra fija inferior del móvil, el aviso de cookies y el pie.
 *
 * Ninguna página escribe su propia cabecera ni su propio pie.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const { SITE, NAV, FOOT } = require('./nav');
const L = require('./lib');
const { esc, icono, isotipo, boton, correo } = L;

/* ---------------------------------------------------------------- *
 * Marca de versión de la hoja de estilo y del guion. El .htaccess pide
 * al navegador que guarde estos dos archivos un año; sin esta marca, al
 * publicar una corrección los visitantes seguirían viendo la anterior.
 * ---------------------------------------------------------------- */

function version(relativo) {
  try {
    const contenido = fs.readFileSync(path.join(__dirname, '..', relativo));
    return crypto.createHash('sha1').update(contenido).digest('hex').slice(0, 8);
  } catch (e) {
    return '0';
  }
}

const V_CSS = version('assets/css/site.css');
const V_JS = version('assets/js/site.js');

/* ---------------------------------------------------------------- *
 * Datos estructurados. Tipo principal: una instalación de almacenamiento
 * frigorífico, que en schema.org es LocalBusiness.
 * ---------------------------------------------------------------- */

function jsonLd(pagina) {
  const negocio = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE.dominio + '/#afriba',
    name: 'AFRIBA — ' + SITE.razonSocial,
    alternateName: 'Almacenes Frigoríficos Ibarz, S. A.',
    slogan: SITE.lema,
    description:
      'Almacén frigorífico público en Mercamadrid. Almacenamiento de producto alimentario congelado en régimen de hasta −22 °C, con capacidad para 8.943 palés.',
    url: SITE.dominio + '/',
    logo: SITE.dominio + '/assets/img/logotipo-afriba.jpg',
    image: SITE.dominio + '/assets/img/og-afriba.jpg',
    telephone: '+34 915 079 255',
    email: 'afriba@vanhessen.com',
    vatID: SITE.cif,
    foundingDate: '2001-04-18',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.direccion.calle + ', ' + SITE.direccion.detalle,
      postalCode: SITE.direccion.cp,
      addressLocality: SITE.direccion.ciudad,
      addressRegion: 'Madrid',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.direccion.lat,
      longitude: SITE.direccion.lon,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
        description: 'Muelles: recepciones y expediciones de 07:00 a 15:00; atención telefónica hasta las 17:00.',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '14:00',
        description: 'Centralita.',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de almacén frigorífico',
      itemListElement: [
        'Almacenamiento en régimen de congelación hasta −22 °C',
        'Carga y descarga sobre palés de madera homologados AME y EUR',
        'Crossdocking',
        'Gestión de almacén por radiofrecuencia',
        'Control de trazabilidad del producto',
        'Captura y emisión de datos electrónicos y gestión de EAN 128',
        'Gestión en línea de stocks y pedidos',
        'Alquiler de oficinas de 40 a 120 m²',
      ].map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s } })),
    },
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'IFS Logistics V3', identifier: 'COID 80521', recognizedBy: { '@type': 'Organization', name: 'AENOR' } },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Sistema de Autocontrol Específico (SAE) nivel 3', identifier: 'EX128053051 Rev. 2', recognizedBy: { '@type': 'Organization', name: 'Certicalidad, S. L.' } },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'HACCP · RP-B13 y CXC 1-1969 Rev. 6 2023' },
    ],
  };

  const migas = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE.dominio + '/' }],
  };
  if (pagina.url !== 'index.html') {
    migas.itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: pagina.tituloCorto || pagina.h1,
      item: SITE.dominio + '/' + pagina.url,
    });
  }

  const bloques = [negocio, migas];
  if (pagina.jsonLdExtra) bloques.push(pagina.jsonLdExtra);
  return bloques
    .map((b) => '<script type="application/ld+json">' + JSON.stringify(b) + '</script>')
    .join('\n  ');
}

/* ---------------------------------------------------------------- *
 * <head>
 * ---------------------------------------------------------------- */

function cabeza(pagina) {
  const canonical = SITE.dominio + '/' + (pagina.url === 'index.html' ? '' : pagina.url);
  const og = SITE.dominio + '/assets/img/og-afriba.jpg';
  return `<!doctype html>
<html lang="es">
<head>
<!--
  AFRIBA — contrato de dirección. Este archivo está GENERADO: no lo edites.
  Se escribe desde _build/pages/${esc(pagina.origen || pagina.url.replace(/\.html$/, '.js'))} con «node build.js».

  THESIS: la instalación se explica sola si se dibuja como el plano que es.
    Rechaza el molde del sector —foto de nave con degradado azul y tres
    tarjetas de icono— y también su opuesto minimalista.
  OWN-WORLD: hoja de plano. Fondo hielo (#EDF1F8), tinta azul marino
    (#00156E), masa construida en el azul del isotipo (#002D9A) y una sola
    señal ámbar (#FAB500) donde el recinto usa naranja: línea de suelo,
    número de dársena y acción principal. Cajetín rotulado, cotas con
    remates, cuadros de despiece numerados, lector de temperatura en cian
    sobre negro. Jost para rótulos, Archivo para texto, Roboto Mono para
    códigos y medidas.
  STORY: el visitante entiende que aquí se guarda producto congelado a −22 °C
    con 8.943 huecos medidos y certificados, y actúa: pide presupuesto, entra
    al área de clientes o llama a muelles.
  FIRST VIEWPORT: regla de coordenadas arriba; a la izquierda el título y las
    dos acciones sobre fondo hielo; a la derecha el cajetín con las cuatro
    lecturas de la instalación; debajo, a sangre, el pasillo de la cámara con
    sus cotas dibujadas encima.
  FORM: dirección 7 de la lista propia («la cartografía de Mercamadrid»,
    fusionada con el cajetín de plano y el lector del SCADA). Tirada 1c87e823,
    degradada: sin retadores ni tableros de listón.
-->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(pagina.title)}</title>
  <meta name="description" content="${esc(pagina.description)}">
  <link rel="canonical" href="${esc(canonical)}">
  <meta name="theme-color" content="#00156E">
  <meta name="author" content="${esc(SITE.razonSocial)}">
  <meta name="robots" content="index, follow">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="AFRIBA">
  <meta property="og:locale" content="es_ES">
  <meta property="og:title" content="${esc(pagina.title)}">
  <meta property="og:description" content="${esc(pagina.description)}">
  <meta property="og:url" content="${esc(canonical)}">
  <meta property="og:image" content="${esc(og)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Fachada del edificio AFRIBA en Mercamadrid">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(pagina.title)}">
  <meta name="twitter:description" content="${esc(pagina.description)}">
  <meta name="twitter:image" content="${esc(og)}">

  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="icon" href="favicon-32.png" sizes="32x32" type="image/png">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Jost:wght@500;600&family=Roboto+Mono:wght@400;500&display=swap">
  <link rel="stylesheet" href="assets/css/site.css?v=${V_CSS}">

  <script>document.documentElement.classList.add('js');</script>

  <!-- Google tag (gtag.js) — mismo identificador que el sitio anterior -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${SITE.analytics}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${SITE.analytics}');
  </script>

  ${jsonLd(pagina)}
</head>`;
}

/* ---------------------------------------------------------------- *
 * Cabecera y mega-menú
 * ---------------------------------------------------------------- */

function marca(contexto) {
  return (
    '<a class="marca" href="index.html"' + (contexto === 'inicio' ? ' aria-current="page"' : '') + '>' +
    isotipo('marca__isotipo') +
    '<span class="marca__texto">' +
    '<span class="marca__nombre">AFRIBA</span>' +
    '<span class="marca__lema">' + esc(SITE.lema) + '</span>' +
    '</span></a>'
  );
}

function megaMenu(activa) {
  const items = NAV.map((fam, i) => {
    const id = 'mm-' + i;
    const activo = fam.enlaces.some((e) => e.url === activa);
    const columnas = fam.enlaces
      .map(
        (e) =>
          '<li><a href="' + e.url + '"' + (e.url === activa ? ' aria-current="page"' : '') + '>' +
          '<span class="mm__t">' + esc(e.titulo) + '</span>' +
          '<span class="mm__d">' + esc(e.desc) + '</span></a></li>'
      )
      .join('');
    return (
      '<li class="nav__item" data-mm>' +
      '<button type="button" class="nav__boton" aria-expanded="false" aria-controls="' + id + '"' +
      (activo ? ' data-activo="si"' : '') + '>' +
      esc(fam.titulo) + icono('chevron') + '</button>' +
      '<div class="mm" id="' + id + '" hidden>' +
      '<div class="mm__interior">' +
      '<div class="mm__intro">' +
      '<p class="mm__ref">' + esc(String(i + 1).padStart(2, '0')) + '</p>' +
      '<p class="mm__titulo">' + esc(fam.titulo) + '</p>' +
      '<p class="mm__resumen">' + esc(fam.resumen) + '</p>' +
      L.imagen(fam.img.src, fam.img.alt, { clase: 'mm__img' }) +
      '</div>' +
      '<ul class="mm__lista">' + columnas + '</ul>' +
      '</div></div></li>'
    );
  }).join('');

  return (
    '<nav class="nav" aria-label="Principal">' +
    '<ul class="nav__lista">' + items + '</ul>' +
    '</nav>'
  );
}

function cabecera(pagina) {
  return (
    '<header class="cabecera">' +
    '<div class="regla" aria-hidden="true">' +
    '<span class="regla__dato">' + esc(SITE.direccion.lat) + ' N · ' + esc(SITE.direccion.lon.replace('-', '')) + ' O</span>' +
    '<span class="regla__ticks"></span>' +
    '<span class="regla__dato">' + esc(SITE.direccion.detalle) + '</span>' +
    '</div>' +
    '<div class="cabecera__barra">' +
    '<div class="cabecera__interior">' +
    marca(pagina.url === 'index.html' ? 'inicio' : '') +
    megaMenu(pagina.url) +
    '<div class="cabecera__acciones">' +
    '<a class="boton boton--fantasma cabecera__acceso" href="' + esc(SITE.areaClientes) + '">' +
    icono('llave') + '<span>Área de clientes</span></a>' +
    boton('presupuesto.html', 'Presupuesto', { tipo: 'senal', clase: 'cabecera__cta' }) +
    '<button type="button" class="cajon-abrir" data-cajon-abrir aria-expanded="false" aria-controls="cajon">' +
    icono('menu') + '<span class="sr">Abrir el menú</span></button>' +
    '</div></div></div></header>'
  );
}

/* ---------------------------------------------------------------- *
 * Cajón lateral del móvil, con acordeones
 * ---------------------------------------------------------------- */

function cajon(activa) {
  const grupos = NAV.map((fam, i) => {
    const id = 'cj-' + i;
    const enlaces = fam.enlaces
      .map(
        (e) =>
          '<li><a href="' + e.url + '"' + (e.url === activa ? ' aria-current="page"' : '') + '>' +
          esc(e.titulo) + '</a></li>'
      )
      .join('');
    return (
      '<div class="cajon__grupo">' +
      '<h3><button type="button" class="cajon__boton" aria-expanded="false" aria-controls="' + id + '">' +
      '<span>' + esc(fam.titulo) + '</span>' + icono('chevron') + '</button></h3>' +
      '<ul class="cajon__lista" id="' + id + '" hidden>' + enlaces + '</ul>' +
      '</div>'
    );
  }).join('');

  return (
    '<div class="cajon" id="cajon" hidden>' +
    '<div class="cajon__velo" data-cajon-cerrar></div>' +
    '<div class="cajon__panel" role="dialog" aria-modal="true" aria-label="Menú de navegación">' +
    '<div class="cajon__cabecera">' +
    '<span class="cajon__marca">' + isotipo('cajon__isotipo') + '<span>AFRIBA</span></span>' +
    '<button type="button" class="cajon__cerrar" data-cajon-cerrar>' + icono('cerrar') +
    '<span class="sr">Cerrar el menú</span></button>' +
    '</div>' +
    '<div class="cajon__cuerpo">' + grupos +
    '<div class="cajon__pie">' +
    '<a class="boton boton--senal" href="presupuesto.html"><span>Solicitar presupuesto</span></a>' +
    '<a class="boton boton--fantasma" href="' + esc(SITE.areaClientes) + '">' + icono('llave') + '<span>Área de clientes</span></a>' +
    '<p class="cajon__contacto">' +
    '<a href="tel:' + SITE.telefonos.muelles.tel + '">' + icono('telefono') + 'Muelles ' + esc(SITE.telefonos.muelles.texto) + '</a>' +
    '<a href="tel:' + SITE.telefonos.centralita.tel + '">' + icono('telefono') + 'Centralita ' + esc(SITE.telefonos.centralita.texto) + '</a>' +
    '</p></div></div></div></div>'
  );
}

/* ---------------------------------------------------------------- *
 * Héroes
 * ---------------------------------------------------------------- */

/*
 * Héroe de portada: la hoja de plano. A la izquierda el título y las dos
 * acciones; a la derecha el cajetín con las lecturas; debajo, a todo el
 * ancho, la fotografía del pasillo con sus cotas.
 */
function heroePortada(contenido) {
  return contenido;
}

/*
 * Héroe de página interior: banda con la referencia de hoja, el título y una
 * entradilla. Opcionalmente lleva una fotografía de fondo a baja luminancia.
 */
function heroe(pagina) {
  const h = pagina.heroe || {};
  const fondo = h.imagen
    ? '<div class="heroe__fondo">' + L.imagen(h.imagen.src, h.imagen.alt, { prioritaria: true }) + '</div>'
    : '';
  const migas =
    '<nav class="migas" aria-label="Migas de pan"><ol>' +
    '<li><a href="index.html">Inicio</a></li>' +
    '<li aria-current="page">' + esc(pagina.tituloCorto || pagina.h1) + '</li>' +
    '</ol></nav>';
  return (
    '<section class="heroe' + (h.imagen ? ' heroe--foto' : '') + '">' +
    fondo +
    '<div class="contenedor heroe__interior">' +
    migas +
    '<p class="hoja">' + esc(pagina.hoja || '') + '</p>' +
    '<h1 class="heroe__titulo">' + pagina.h1 + '</h1>' +
    (h.entradilla ? '<p class="heroe__entradilla">' + h.entradilla + '</p>' : '') +
    (h.extra || '') +
    '</div></section>'
  );
}

/* ---------------------------------------------------------------- *
 * Banda de llamada a la acción, común al pie de las páginas
 * ---------------------------------------------------------------- */

function bandaCta(opciones) {
  const o = opciones || {};
  return (
    '<section class="banda">' +
    '<div class="contenedor banda__interior">' +
    '<div class="banda__texto">' +
    '<p class="hoja hoja--claro">' + esc(o.hoja || 'Siguiente paso') + '</p>' +
    '<h2 class="banda__titulo">' + esc(o.titulo || '¿Cuántos palés y a qué temperatura?') + '</h2>' +
    '<p class="banda__cuerpo">' +
    esc(o.cuerpo || 'Dinos el tipo de palé, la altura, el peso y el stock medio que manejas y te preparamos un presupuesto.') +
    '</p>' +
    '</div>' +
    '<div class="banda__acciones">' +
    boton('presupuesto.html', 'Solicitar presupuesto', { tipo: 'senal', iconoDespues: 'flecha' }) +
    '<p class="banda__alt">o llama a la centralita <a href="tel:' + SITE.telefonos.centralita.tel + '">' +
    esc(SITE.telefonos.centralita.texto) + '</a><br><span>' + esc(SITE.telefonos.centralita.horario) + '</span></p>' +
    '</div></div></section>'
  );
}

/* ---------------------------------------------------------------- *
 * Barra fija inferior del móvil
 * ---------------------------------------------------------------- */

function barraMovil() {
  return (
    '<div class="barra-movil">' +
    '<a href="tel:' + SITE.telefonos.muelles.tel + '">' + icono('telefono') + '<span>Muelles</span></a>' +
    '<a href="' + esc(SITE.direccion.mapaAmpliado) + '" target="_blank" rel="noopener">' + icono('ubicacion') + '<span>Cómo llegar</span></a>' +
    '<a href="presupuesto.html" class="barra-movil__cta">' + icono('palet') + '<span>Presupuesto</span></a>' +
    '</div>'
  );
}

/* ---------------------------------------------------------------- *
 * Pie
 * ---------------------------------------------------------------- */

function pie() {
  const columnas = FOOT.columnas
    .map(
      (c) =>
        '<div class="pie__columna"><h2 class="pie__titulo">' + esc(c.titulo) + '</h2><ul>' +
        c.enlaces.map((e) => '<li><a href="' + e.url + '">' + esc(e.titulo) + '</a></li>').join('') +
        '</ul></div>'
    )
    .join('');

  const legal = FOOT.legal
    .map(
      (e) =>
        '<li><a href="' + e.url + '"' + (e.externo ? ' target="_blank" rel="noopener"' : '') + '>' +
        esc(e.titulo) + '</a></li>'
    )
    .join('');

  return (
    '<footer class="pie">' +
    '<div class="contenedor pie__interior">' +
    '<div class="pie__marca">' +
    isotipo('pie__isotipo') +
    '<p class="pie__nombre">AFRIBA</p>' +
    '<p class="pie__lema">' + esc(SITE.lema) + '</p>' +
    '<address class="pie__direccion">' +
    esc(SITE.direccion.edificio) + '<br>' +
    esc(SITE.direccion.calle) + '<br>' +
    esc(SITE.direccion.detalle) + '<br>' +
    esc(SITE.direccion.cp) + ' ' + esc(SITE.direccion.ciudad) +
    '</address>' +
    '<p class="pie__contacto">' +
    '<span><span class="pie__rotulo">Centralita</span><a href="tel:' + SITE.telefonos.centralita.tel + '">' + esc(SITE.telefonos.centralita.texto) + '</a></span>' +
    '<span><span class="pie__rotulo">Muelles</span><a href="tel:' + SITE.telefonos.muelles.tel + '">' + esc(SITE.telefonos.muelles.texto) + '</a></span>' +
    '<span><span class="pie__rotulo">Correo</span>' + correo('afriba|vanhessen.com') + '</span>' +
    '</p></div>' +
    '<div class="pie__enlaces">' + columnas + '</div>' +
    '</div>' +
    '<div class="pie__lopd"><div class="contenedor"><p>' +
    esc(require('./data').CLAUSULA_AGENDA) +
    '</p></div></div>' +
    '<div class="pie__legal"><div class="contenedor pie__legal-interior">' +
    '<p class="pie__copy">© 2012 ' + esc(SITE.razonSocial) + ' · CIF ' + esc(SITE.cif) + '</p>' +
    '<ul class="pie__legal-lista">' + legal + '</ul>' +
    '</div></div></footer>'
  );
}

/* ---------------------------------------------------------------- *
 * Aviso de cookies. Mismo texto que el original.
 * ---------------------------------------------------------------- */

function avisoCookies() {
  return (
    '<div class="cookies" id="aviso-cookies" hidden>' +
    '<div class="cookies__panel" role="dialog" aria-modal="false" aria-labelledby="cookies-t">' +
    '<span class="cookies__marca" aria-hidden="true">' + isotipo('cookies__isotipo') + '</span>' +
    '<h2 class="cookies__titulo" id="cookies-t">Cookies</h2>' +
    '<p class="cookies__texto">ALMACENES FRIGORIFICOS IBARZ, S.A. utiliza cookies técnicas propias y de terceros para la navegación en el sitio web.</p>' +
    '<div class="cookies__acciones">' +
    '<button type="button" class="boton boton--senal" id="btn-aceptar-cookies">Aceptar</button>' +
    '<a class="cookies__mas" href="politica-de-cookies.html">Más información</a>' +
    '</div></div></div>'
  );
}

/* ---------------------------------------------------------------- *
 * Documento completo
 * ---------------------------------------------------------------- */

function documento(pagina, cuerpo) {
  return (
    cabeza(pagina) + '\n' +
    '<body class="pagina pagina--' + pagina.url.replace(/\.html$/, '') + '">\n' +
    '<a class="salto" href="#contenido">Saltar al contenido</a>\n' +
    cabecera(pagina) + '\n' +
    cajon(pagina.url) + '\n' +
    '<main id="contenido">\n' + cuerpo + '\n</main>\n' +
    pie() + '\n' +
    barraMovil() + '\n' +
    avisoCookies() + '\n' +
    '<div class="visor" id="visor" hidden>' +
    '<div class="visor__velo" data-visor-cerrar></div>' +
    '<div class="visor__panel" role="dialog" aria-modal="true" aria-label="Visor de imágenes">' +
    '<button type="button" class="visor__cerrar" data-visor-cerrar>' + icono('cerrar') + '<span class="sr">Cerrar</span></button>' +
    '<button type="button" class="visor__nav visor__nav--ant" data-visor-ant><span class="sr">Imagen anterior</span>' + icono('chevron') + '</button>' +
    /* La imagen y el pie los crea assets/js/site.js al abrir el visor: así el
       HTML no lleva ningún <img> sin origen. */
    '<figure class="visor__figura" id="visor-figura"></figure>' +
    '<button type="button" class="visor__nav visor__nav--sig" data-visor-sig><span class="sr">Imagen siguiente</span>' + icono('chevron') + '</button>' +
    '</div></div>\n' +
    '<script src="assets/js/site.js?v=' + V_JS + '"></script>\n' +
    '</body>\n</html>\n'
  );
}

module.exports = { documento, heroe, heroePortada, bandaCta, cabeza, cabecera, pie };
