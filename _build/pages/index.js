/*
 * Portada. La hoja 00 del plano: qué es la instalación, qué mide, dónde está
 * y qué puede hacer el visitante ahora mismo.
 */

'use strict';

const { SITE } = require('../nav');
const D = require('../data');
const L = require('../lib');
const { bandaCta } = require('../layout');
const { esc, icono, boton, cajetin, lector, figura, imagen, galeria, enlacePdf } = L;

const pagina = {
  url: 'index.html',
  origen: 'index.js',
  tituloCorto: 'Inicio',
  hoja: 'Hoja 00 · General',
  title: 'AFRIBA · Almacén frigorífico en Mercamadrid | Almacenes Frigoríficos Ibarz',
  description:
    'Almacén frigorífico público en Mercamadrid: 8.943 palés en régimen de hasta −22 °C, 12 dársenas, trazabilidad por radiofrecuencia y certificación IFS Logistics V3.',
  h1: 'Almacén frigorífico público en Mercamadrid',
  prioridad: '1.0',
};

function cuerpo() {
  /* ---- Héroe: la hoja de plano ---- */
  const hero =
    '<section class="portada">' +
    '<div class="contenedor portada__interior">' +
    '<div class="portada__texto">' +
    '<p class="hoja">' + esc(pagina.hoja) + '</p>' +
    '<h1 class="portada__titulo">Almacén frigorífico<br>público en <span class="subrayado">Mercamadrid</span></h1>' +
    '<p class="portada__entradilla">Guardamos producto alimentario congelado de terceros en régimen de hasta ' +
    '<strong>−22 °C</strong>, con ocho sondas independientes registrando la temperatura desde el centro de la cámara. ' +
    'Somos ' + esc(SITE.lema.toLowerCase()) + '.</p>' +
    '<div class="portada__acciones">' +
    boton('presupuesto.html', 'Solicitar presupuesto', { tipo: 'senal', iconoDespues: 'flecha' }) +
    boton(SITE.areaClientes, 'Área de clientes', { tipo: 'contorno', iconoAntes: 'llave' }) +
    '</div>' +
    // El icono y el texto son los dos únicos hijos flexibles: si el enlace
    // quedara suelto se convertiría en una columna estrecha y partiría.
    '<p class="portada__nota">' + icono('reloj') + '<span>' +
    'Muelles: recepciones y expediciones de lunes a viernes, de 07:00 a 15:00. ' +
    '<a href="clientes.html">Ver la operativa completa</a></span></p>' +
    '</div>' +

    '<div class="portada__cajetin">' +
    cajetin({
      ref: 'AFRIBA / MM',
      titulo: 'Cuadro de características',
      filas: [
        ['Capacidad', '<strong>8.943</strong> palés'],
        ['Régimen', '<strong>−22</strong> °C'],
        ['Superficie de cámara', '<strong>3.388</strong> m²'],
        ['Altura libre', '<strong>15</strong> m'],
        ['Pasillos', '<strong>26</strong> con estanterías móviles'],
        ['Dársenas', '<strong>12</strong>, once con abrigo'],
        ['Potencia frigorífica', '<strong>640</strong> kW'],
      ],
      pie: '<a href="instalacion.html">Ficha completa de la instalación</a>',
    }) +
    lector('−22,7', '°C', 'Temperatura media de cámara', {
      nota: 'Lectura publicada por el SCADA de la sala de máquinas',
    }) +
    '</div>' +
    '</div>' +

    /* Fotografía a sangre con las cotas dibujadas encima */
    '<div class="portada__vista">' +
    '<div class="portada__vista-marco">' +
    imagen('camara-pasillo-estanterias.jpg', 'Pasillo de la cámara de congelación entre estanterías móviles cargadas de palés hasta siete alturas, con una carretilla trilateral al fondo', { prioritaria: true, clase: 'portada__foto', sizes: '100vw' }) +
    '<div class="cotas" aria-hidden="true">' +
    '<span class="cota cota--v"><span class="cota__valor">15 m</span></span>' +
    '<span class="cota cota--h"><span class="cota__valor">26 pasillos</span></span>' +
    '<span class="cota cota--p"><span class="cota__valor">7 alturas</span></span>' +
    '</div>' +
    '</div>' +
    '<p class="portada__vista-pie"><span class="figura__ref">V-01</span> Cámara de congelación. ' +
    'Estanterías móviles, 26 pasillos, hasta siete alturas de ubicación.</p>' +
    '</div>' +
    '</section>';

  /* ---- Franja de certificaciones ---- */
  const sellos =
    '<section class="franja-sellos">' +
    '<div class="contenedor">' +
    '<h2 class="franja-sellos__titulo">Auditada y certificada</h2>' +
    '<ul class="sellos">' +
    D.CERTIFICACIONES.map(
      (c) =>
        '<li class="sello"><a href="' + c.pdf + '" target="_blank" rel="noopener">' +
        imagen(c.sello, c.alt, { clase: 'sello__img' }) +
        '<span class="sello__texto"><span class="sello__nombre">' + esc(c.nombre) + '</span>' +
        '<span class="sello__ref">' + esc(c.rotuloOriginal) + '</span></span>' +
        icono('descarga') + '</a></li>'
    ).join('') +
    '</ul>' +
    '<p class="franja-sellos__mas"><a href="certificaciones.html">Qué cubre cada certificado' + icono('flecha') + '</a></p>' +
    '</div></section>';

  /* ---- Qué hacemos ---- */
  const servicios =
    '<section class="seccion seccion--servicios">' +
    '<div class="contenedor">' +
    '<div class="seccion__cabeza">' +
    '<p class="hoja">Hoja 01 · Servicios</p>' +
    '<h2 class="seccion__titulo">Ocho servicios, ninguno improvisado</h2>' +
    '<p class="seccion__intro">Somos un almacén frigorífico público: el espacio, la manipulación y el ' +
    'sistema de gestión son nuestros; la mercancía es de nuestros clientes. Esto es todo lo que hacemos con ella.</p>' +
    '</div>' +
    '<ol class="lista-servicios">' +
    D.SERVICIOS.map(
      (s, i) =>
        '<li class="servicio">' +
        '<span class="servicio__n" aria-hidden="true">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<div class="servicio__cuerpo">' +
        '<h3 class="servicio__titulo">' + esc(s.titulo) + '</h3>' +
        '<p class="servicio__detalle">' + esc(s.detalle) + '</p>' +
        (s.enlace ? '<p class="servicio__enlace"><a href="' + s.enlace.url + '">' + esc(s.enlace.texto) + icono('flecha') + '</a></p>' : '') +
        '</div></li>'
    ).join('') +
    '</ol>' +
    '</div></section>';

  /* ---- El frío, demostrado ---- */
  const frio =
    '<section class="seccion seccion--frio">' +
    '<div class="contenedor frio__interior">' +
    '<div class="frio__texto">' +
    '<p class="hoja hoja--claro">Hoja 02 · Producción de frío</p>' +
    '<h2 class="seccion__titulo seccion__titulo--claro">El frío no se promete: se mide, se registra y se vigila</h2>' +
    '<p>La cámara trabaja con <strong>640 kW</strong> de potencia frigorífica repartidos en ocho evaporadores ' +
    'independientes de 89,17 kW. En el centro del recinto, ocho sondas registran la temperatura de forma ' +
    'independiente, y la atmósfera se mantiene seca para evitar la formación de hielo.</p>' +
    '<p>Debajo, la sala de máquinas: dos compresores de tornillo y uno alternativo con refrigerante R-717, ' +
    'NH₃, y un centro de transformación de 1.000 kVA en exclusiva para la instalación.</p>' +
    '<p class="frio__enlaces">' +
    boton('equipamiento.html', 'Ver la sala de máquinas', { tipo: 'claro', iconoDespues: 'flecha' }) +
    '</p>' +
    '</div>' +
    '<div class="frio__pantalla">' +
    figura('scada-lectura-camara.png', 'Pantalla del SCADA con la temperatura media de la cámara 1 en −22,7 grados y la lectura individual de las ocho sondas E1 a E8, todas entre −22,4 y −23,3 grados', {
      pie: 'Pantalla del SCADA: temperatura media de cámara y las ocho sondas, E1 a E8.',
      ref: 'V-02',
      sizes: '(min-width: 62rem) 34rem, 92vw',
    }) +
    '</div>' +
    '</div></section>';

  /* ---- Para quién es cada cosa ---- */
  const rutas =
    '<section class="seccion seccion--rutas">' +
    '<div class="contenedor">' +
    '<div class="seccion__cabeza">' +
    '<p class="hoja">Hoja 03 · Accesos</p>' +
    '<h2 class="seccion__titulo">Entra por donde te toca</h2>' +
    '</div>' +
    '<ul class="rutas">' +
    [
      {
        icono: 'palet',
        rotulo: 'Quiero almacenar',
        texto: 'Dinos el tipo de palé, la altura, el peso y el stock medio mensual y te preparamos un presupuesto.',
        url: 'presupuesto.html',
        cta: 'Solicitar presupuesto',
        senal: true,
      },
      {
        icono: 'llave',
        rotulo: 'Ya soy cliente',
        texto: 'Consulta stock detallado y resumido y lanza pedidos. Los pedidos de salida del día se hacen el día anterior, antes de las 16:50.',
        url: SITE.areaClientes,
        cta: 'Área de clientes',
      },
      {
        icono: 'camion',
        rotulo: 'Vengo a cargar o descargar',
        texto: 'Ventanilla de control en la fachada principal, entre los muelles 11 y 12. Chaleco reflectante y línea naranja.',
        url: 'transportistas.html',
        cta: 'Normas de acceso',
      },
    ]
      .map(
        (r) =>
          '<li class="ruta' + (r.senal ? ' ruta--senal' : '') + '">' +
          '<span class="ruta__icono">' + icono(r.icono) + '</span>' +
          '<h3 class="ruta__titulo">' + esc(r.rotulo) + '</h3>' +
          '<p class="ruta__texto">' + esc(r.texto) + '</p>' +
          '<p class="ruta__cta"><a href="' + esc(r.url) + '">' + esc(r.cta) + icono('flecha') + '</a></p>' +
          '</li>'
      )
      .join('') +
    '</ul>' +
    '</div></section>';

  /* ---- La empresa, en corto ---- */
  const empresa =
    '<section class="seccion seccion--empresa">' +
    '<div class="contenedor empresa__interior">' +
    '<div class="empresa__foto">' +
    figura('edificio-afriba-lateral.jpg', 'Vista lateral del edificio AFRIBA desde el vial de Mercamadrid, con camiones frigoríficos en los muelles', {
      pie: 'Edificio AFRIBA en la Plataforma Baja de Mercamadrid.',
      ref: 'V-03',
      sizes: '(min-width: 62rem) 30rem, 92vw',
    }) +
    '</div>' +
    '<div class="empresa__texto">' +
    '<p class="hoja">Hoja 04 · Empresa</p>' +
    '<h2 class="seccion__titulo">Aquí desde 2001</h2>' +
    '<p>El 18 de abril de 2001, el Ministro de Agricultura, Pesca y Alimentación, D. Miguel Arias Cañete, ' +
    'presidió el acto de inauguración de las nuevas instalaciones de <strong>Almacenes Frigoríficos Ibarz, S.A. ' +
    '(AFRIBA)</strong> acompañado por el Alcalde de Madrid, D. José María Álvarez del Manzano.</p>' +
    '<p>Nuestras instalaciones se encuentran ubicadas en Mercamadrid, el segundo mercado mayorista de ' +
    'pescados del mundo y el primero de cárnicos de Europa, centro neurálgico de distribución en la ' +
    'península Ibérica.</p>' +
    '<p class="empresa__enlace">' + boton('empresa.html', 'Conocer la empresa', { tipo: 'contorno', iconoDespues: 'flecha' }) + '</p>' +
    '</div>' +
    '</div></section>';

  /* ---- Galería ---- */
  const vistas =
    '<section class="seccion seccion--galeria">' +
    '<div class="contenedor">' +
    '<div class="seccion__cabeza">' +
    '<p class="hoja">Hoja 05 · Vistas</p>' +
    '<h2 class="seccion__titulo">La instalación, por dentro</h2>' +
    '<p class="seccion__intro">Seis fotografías de la propia instalación. Pulsa cualquiera para verla en grande.</p>' +
    '</div>' +
    galeria(D.GALERIA) +
    '</div></section>';

  /* ---- Dónde estamos ---- */
  const donde =
    '<section class="seccion seccion--donde">' +
    '<div class="contenedor donde__interior">' +
    '<div class="donde__texto">' +
    '<p class="hoja">Hoja 06 · Localización</p>' +
    '<h2 class="seccion__titulo">Calle Eje 3-18, 8</h2>' +
    '<address class="donde__direccion">' +
    esc(SITE.direccion.edificio) + '<br>' + esc(SITE.direccion.calle) + '<br>' +
    esc(SITE.direccion.detalle) + '<br>' + esc(SITE.direccion.cp) + ' ' + esc(SITE.direccion.ciudad) +
    '</address>' +
    '<p class="donde__coord"><span class="mono">' + esc(SITE.direccion.lat) + '</span> N · ' +
    '<span class="mono">' + esc(SITE.direccion.lon.replace('-', '')) + '</span> O</p>' +
    '<dl class="donde__horarios">' +
    SITE.horarios
      .map(
        (h) =>
          '<div class="donde__horario"><dt>' + esc(h.rotulo) + '<span>' + esc(h.detalle) + '</span></dt>' +
          '<dd>' + esc(h.valor) + '</dd></div>'
      )
      .join('') +
    '</dl>' +
    '<p class="donde__aviso">Festivos locales y de la Comunidad de Madrid: horario reducido, consultar unos ' +
    'días antes. Festivos nacionales y fines de semana: <strong>cerrado</strong>.</p>' +
    '<p>' + boton('contacto.html', 'Cómo llegar y a quién llamar', { tipo: 'contorno', iconoDespues: 'flecha' }) + '</p>' +
    '</div>' +
    '<div class="donde__mapa">' +
    '<iframe src="' + esc(SITE.direccion.mapaEmbebido) + '" title="Mapa de situación de AFRIBA en Mercamadrid" loading="lazy" width="600" height="450"></iframe>' +
    '<p class="donde__mapa-pie"><a href="' + esc(SITE.direccion.mapaAmpliado) + '" target="_blank" rel="noopener">' +
    'Ver AFRIBA en un mapa más grande' + icono('externo') + '</a></p>' +
    '</div>' +
    '</div></section>';

  /* ---- Documentos ---- */
  const docs =
    '<section class="seccion seccion--docs">' +
    '<div class="contenedor">' +
    '<div class="seccion__cabeza">' +
    '<p class="hoja">Hoja 07 · Documentación</p>' +
    '<h2 class="seccion__titulo">Documentos que publicamos</h2>' +
    '</div>' +
    '<ul class="docs">' +
    [
      ['assets/docs/politica-de-calidad.pdf', 'Política de calidad', 'PDF'],
      ['assets/docs/comunicado-a-transportistas.pdf', 'Comunicado a transportistas', 'PDF'],
      ['assets/docs/instrucciones-control-acceso-transportistas.pdf', 'Instrucciones para el control de acceso de transportistas', 'PDF'],
      ['assets/docs/certificado-ifs-logistics.pdf', 'Certificado IFS Logistics V3', 'PDF'],
      ['assets/docs/certificado-sae.pdf', 'Certificado SAE de Certicalidad', 'PDF'],
      ['assets/docs/certificado-haccp.pdf', 'Certificado HACCP', 'PDF'],
    ]
      .map((d) => '<li>' + enlacePdf(d[0], d[1], d[2]) + '</li>')
      .join('') +
    '</ul>' +
    '</div></section>';

  return hero + sellos + servicios + frio + rutas + empresa + vistas + donde + docs + bandaCta();
}

module.exports = { pagina, cuerpo };
