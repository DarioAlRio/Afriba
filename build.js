/*
 * build.js — generador del sitio de AFRIBA.
 *
 *     node build.js
 *
 * Escribe en la raíz del proyecto los .html de cada sección, más sitemap.xml
 * y robots.txt, y después VERIFICA el resultado. Si algún enlace interno o
 * alguna imagen referenciada no existe, imprime el problema y termina con
 * código 1.
 *
 * EL HTML GENERADO NO SE EDITA A MANO. Cualquier cambio se hace en _build/ y
 * se vuelve a ejecutar este archivo. Qué se toca para cambiar cada cosa:
 *
 *   _build/nav.js       teléfonos, correos, dirección, horarios y el menú
 *   _build/data.js      contenido compartido: cifras, servicios, equipo, legales
 *   _build/layout.js    cabecera, mega-menú, cajón, héroes, banda y pie
 *   _build/lib.js       iconos SVG y componentes (cajetín, cuadro, galería…)
 *   _build/pages/*.js   una definición por página
 *   _build/imagenes.js  recompresión de fotografías (se ejecuta aparte)
 *   assets/css/site.css la hoja de estilos única
 *   assets/js/site.js   el único archivo de comportamiento
 */

'use strict';

const fs = require('fs');
const path = require('path');

const RAIZ = __dirname;
const DIR_PAGINAS = path.join(RAIZ, '_build', 'pages');
const { SITE } = require('./_build/nav');
const layout = require('./_build/layout');

/* ---------------------------------------------------------------- *
 * 1. Generación
 * ---------------------------------------------------------------- */

const archivos = fs
  .readdirSync(DIR_PAGINAS)
  .filter((f) => f.endsWith('.js'))
  .sort();

const generadas = [];

for (const archivo of archivos) {
  const modulo = require(path.join(DIR_PAGINAS, archivo));
  const pagina = modulo.pagina;
  if (!pagina || !pagina.url) {
    console.error('  ' + archivo + ': falta `pagina.url`');
    process.exit(1);
  }
  pagina.origen = pagina.origen || archivo;
  const html = layout.documento(pagina, modulo.cuerpo());
  fs.writeFileSync(path.join(RAIZ, pagina.url), html, 'utf8');
  generadas.push(pagina);
}

console.log('Generadas ' + generadas.length + ' páginas.');

/* ---------------------------------------------------------------- *
 * 2. Redirecciones de las URL antiguas
 *
 * Cada URL del sitio anterior que desaparece conserva un archivo con
 * refresco y enlace manual, para no perder el tráfico que ya existe. La
 * redirección 301 de verdad se configura en el alojamiento; las
 * instrucciones están en el README.
 * ---------------------------------------------------------------- */

const REDIRECCIONES = [
  ['Index.html', 'index.html'],
  ['Servicios.html', 'servicios.html'],
  ['Equipamiento.html', 'equipamiento.html'],
  ['RRHH.html', 'equipo.html'],
  ['Presupuesto.html', 'presupuesto.html'],
  ['Clientes.html', 'clientes.html'],
  ['Contacto.html', 'presupuesto.html'],
  ['171225.html', 'junta-general.html'],
  ['221124.html', 'junta-general.html'],
  ['Aviso_legal.html', 'aviso-legal.html'],
  ['Politica_privacidad.html', 'politica-de-privacidad.html'],
  ['Politica_cookies.html', 'politica-de-cookies.html'],
];

/*
 * Se escribe un archivo de refresco SOLO cuando su nombre no choca, sin
 * distinguir mayúsculas, con una página generada. Windows y macOS tratan
 * `Contacto.html` y `contacto.html` como el mismo archivo, así que escribir
 * ahí el refresco borraría la página nueva.
 *
 * El resto de casos —los que solo cambian de mayúsculas— se resuelven con
 * las redirecciones 301 del alojamiento, que este mismo archivo escribe más
 * abajo en .htaccess y en _redirects.
 */
const generadasMinus = new Set(generadas.map((p) => p.url.toLowerCase()));
let archivosRedireccion = 0;

for (const [vieja, nueva] of REDIRECCIONES) {
  if (vieja === nueva) continue;
  if (generadasMinus.has(vieja.toLowerCase())) continue;
  const html =
    '<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n' +
    '<title>Esta página se ha movido · AFRIBA</title>\n' +
    '<meta name="robots" content="noindex, follow">\n' +
    '<link rel="canonical" href="' + SITE.dominio + '/' + nueva + '">\n' +
    '<meta http-equiv="refresh" content="0; url=' + nueva + '">\n' +
    '<style>body{font:16px/1.6 system-ui,sans-serif;margin:0;min-height:100vh;display:flex;' +
    'align-items:center;justify-content:center;background:#EDF1F8;color:#00156E;padding:2rem;text-align:center}' +
    'a{color:#00156E}</style>\n</head>\n<body>\n<main>\n' +
    '<h1>Esta página se ha movido</h1>\n' +
    '<p>Ahora está en <a href="' + nueva + '">' + nueva + '</a>.</p>\n' +
    '</main>\n</body>\n</html>\n';
  fs.writeFileSync(path.join(RAIZ, vieja), html, 'utf8');
  archivosRedireccion++;
}

/* Redirecciones 301 de verdad, para Apache y para Netlify/Cloudflare Pages. */
const htaccess =
  '# Generado por build.js — no editar a mano.\n' +
  '# Redirecciones permanentes de las URL del sitio anterior.\n\n' +
  'AddDefaultCharset UTF-8\n' +
  'ErrorDocument 404 /404.html\n\n' +
  '<IfModule mod_rewrite.c>\n' +
  '  RewriteEngine On\n' +
  REDIRECCIONES.filter((r) => r[0] !== r[1])
    .map(
      ([vieja, nueva]) =>
        '  RewriteRule ^' + vieja.replace(/\./g, '\\.') + '$ /' + nueva + ' [R=301,L,NC]'
    )
    .join('\n') +
  '\n</IfModule>\n\n' +
  '<IfModule mod_deflate.c>\n' +
  '  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript image/svg+xml\n' +
  '</IfModule>\n\n' +
  '<IfModule mod_expires.c>\n' +
  '  ExpiresActive On\n' +
  '  ExpiresByType text/css "access plus 1 year"\n' +
  '  ExpiresByType text/javascript "access plus 1 year"\n' +
  '  ExpiresByType image/jpeg "access plus 1 year"\n' +
  '  ExpiresByType image/png "access plus 1 year"\n' +
  '  ExpiresByType image/webp "access plus 1 year"\n' +
  '  ExpiresByType text/html "access plus 1 hour"\n' +
  '</IfModule>\n';
fs.writeFileSync(path.join(RAIZ, '.htaccess'), htaccess, 'utf8');

const netlify =
  '# Generado por build.js — no editar a mano.\n' +
  REDIRECCIONES.filter((r) => r[0] !== r[1])
    .map(([vieja, nueva]) => '/' + vieja + '  /' + nueva + '  301')
    .join('\n') +
  '\n/*  /404.html  404\n';
fs.writeFileSync(path.join(RAIZ, '_redirects'), netlify, 'utf8');

console.log(
  'Redirecciones: ' + archivosRedireccion + ' archivos de refresco + ' +
    REDIRECCIONES.filter((r) => r[0] !== r[1]).length + ' reglas 301 en .htaccess y _redirects.'
);

/* ---------------------------------------------------------------- *
 * 3. sitemap.xml y robots.txt
 * ---------------------------------------------------------------- */

const hoy = new Date().toISOString().slice(0, 10);
const urls = generadas
  .filter((p) => p.url !== '404.html')
  .map((p) => {
    const loc = SITE.dominio + '/' + (p.url === 'index.html' ? '' : p.url);
    return (
      '  <url>\n    <loc>' + loc + '</loc>\n' +
      '    <lastmod>' + hoy + '</lastmod>\n' +
      '    <changefreq>' + (p.cambio || 'yearly') + '</changefreq>\n' +
      '    <priority>' + (p.prioridad || '0.5') + '</priority>\n  </url>'
    );
  })
  .join('\n');

fs.writeFileSync(
  path.join(RAIZ, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + '\n</urlset>\n',
  'utf8'
);

fs.writeFileSync(
  path.join(RAIZ, 'robots.txt'),
  'User-agent: *\n' +
    'Allow: /\n' +
    'Disallow: /Resumen.asp\n' +
    'Disallow: /cgi-bin/\n' +
    '\n' +
    'Sitemap: ' + SITE.dominio + '/sitemap.xml\n',
  'utf8'
);

console.log('Escritos sitemap.xml (' + generadas.length + ' URL) y robots.txt.');

/* ---------------------------------------------------------------- *
 * 4. Verificación
 * ---------------------------------------------------------------- */

const problemas = [];

// Rutas que existen fuera del proyecto y no se comprueban en disco.
const EXTERNAS = /^(https?:|mailto:|tel:|#|data:)/i;
// El área de clientes y el CGI viven en el servidor del cliente, no aquí.
const REMOTAS = [/^Resumen\.asp/, /^cgi-bin\//];

function esRemota(u) {
  return REMOTAS.some((r) => r.test(u));
}

const paginasEnDisco = new Set(
  fs.readdirSync(RAIZ).filter((f) => f.endsWith('.html'))
);

for (const pagina of generadas) {
  const ruta = path.join(RAIZ, pagina.url);
  const html = fs.readFileSync(ruta, 'utf8');

  // --- enlaces ---
  const enlaces = [...html.matchAll(/(?:href|action)="([^"]+)"/g)].map((m) => m[1]);
  for (const enlace of enlaces) {
    if (EXTERNAS.test(enlace) || esRemota(enlace)) continue;
    const limpio = enlace.split('#')[0].split('?')[0];
    if (!limpio) continue;
    const destino = path.join(RAIZ, decodeURIComponent(limpio));
    if (!fs.existsSync(destino)) {
      problemas.push(pagina.url + ' → enlace roto: ' + enlace);
    } else if (limpio.endsWith('.html') && !paginasEnDisco.has(limpio)) {
      problemas.push(pagina.url + ' → enlace a página no generada: ' + enlace);
    }
  }

  // --- imágenes ---
  const imagenes = [...html.matchAll(/(?:src|srcset)="([^"]+)"/g)].map((m) => m[1]);
  for (const img of imagenes) {
    if (EXTERNAS.test(img)) continue;
    const destino = path.join(RAIZ, decodeURIComponent(img.split('?')[0]));
    if (!fs.existsSync(destino)) {
      problemas.push(pagina.url + ' → recurso inexistente: ' + img);
    }
  }

  // --- un solo h1 ---
  const h1 = (html.match(/<h1\b/g) || []).length;
  if (h1 !== 1) problemas.push(pagina.url + ' → tiene ' + h1 + ' elementos <h1> (debe haber exactamente 1)');

  // --- title y description únicos y presentes ---
  if (!/<title>[^<]{10,}<\/title>/.test(html)) problemas.push(pagina.url + ' → falta el <title> o es demasiado corto');
  if (!/<meta name="description" content="[^"]{40,}"/.test(html)) problemas.push(pagina.url + ' → falta la meta description o es demasiado corta');

  // --- ningún correo en claro en el HTML ---
  const correosEnClaro = html.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g) || [];
  const permitidos = new Set(['afriba@vanhessen.com', 'lopd@vanhessen.com']); // solo dentro de textos legales literales
  for (const c of correosEnClaro) {
    if (!permitidos.has(c)) problemas.push(pagina.url + ' → correo escrito en claro en el HTML: ' + c);
  }
}

// title y description repetidos entre páginas
const titulos = new Map();
const descripciones = new Map();
for (const p of generadas) {
  if (titulos.has(p.title)) problemas.push('title repetido en ' + p.url + ' y ' + titulos.get(p.title));
  titulos.set(p.title, p.url);
  if (descripciones.has(p.description)) problemas.push('description repetida en ' + p.url + ' y ' + descripciones.get(p.description));
  descripciones.set(p.description, p.url);
}

// las páginas del menú existen
const { NAV, FOOT } = require('./_build/nav');
const declaradas = new Set(generadas.map((p) => p.url));
for (const fam of NAV) {
  for (const e of fam.enlaces) {
    if (!declaradas.has(e.url)) problemas.push('el mega-menú apunta a una página que no se genera: ' + e.url);
  }
}
for (const col of FOOT.columnas) {
  for (const e of col.enlaces) {
    if (!declaradas.has(e.url)) problemas.push('el pie apunta a una página que no se genera: ' + e.url);
  }
}

/* ---------------------------------------------------------------- *
 * La hoja de estilo se revisa por estructura: llaves emparejadas y sin
 * declaraciones sueltas fuera de un bloque. Un descuadre no rompe el
 * navegador de forma visible —simplemente deja de aplicar reglas—, así
 * que conviene detenerlo aquí.
 * ---------------------------------------------------------------- */

{
  const css = fs.readFileSync(path.join(RAIZ, 'assets', 'css', 'site.css'), 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '');
  let nivel = 0;
  let linea = 1;
  let acumulado = '';
  for (let i = 0; i < css.length; i++) {
    const c = css[i];
    if (c === '\n') { linea++; acumulado = ''; continue; }
    if (c === '{') { nivel++; acumulado = ''; continue; }
    if (c === '}') {
      nivel--;
      acumulado = '';
      if (nivel < 0) { problemas.push('site.css: llave de cierre sobrante en la línea ' + linea); break; }
      continue;
    }
    acumulado += c;
    if (c === ';' && nivel === 0 && /[a-z-]\s*:/i.test(acumulado)) {
      problemas.push('site.css: declaración fuera de bloque en la línea ' + linea + ' («' + acumulado.trim().slice(0, 48) + '»)');
      acumulado = '';
    }
  }
  if (nivel > 0) problemas.push('site.css: quedan ' + nivel + ' bloque(s) sin cerrar');
}

if (problemas.length) {
  console.error('');
  console.error('VERIFICACIÓN FALLIDA — ' + problemas.length + ' problema(s):');
  for (const p of problemas) console.error('  · ' + p);
  process.exit(1);
}

console.log('Verificación correcta: enlaces, imágenes, encabezados y metadatos.');
