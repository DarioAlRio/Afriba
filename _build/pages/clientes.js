/* Operativa para clientes: horarios, hora límite de pedidos y acceso. */

'use strict';

const { SITE } = require('../nav');
const D = require('../data');
const L = require('../lib');
const { heroe, bandaCta } = require('../layout');
const { esc, icono, correo, enlacePdf, boton, cajetin } = L;

const pagina = {
  url: 'clientes.html',
  tituloCorto: 'Horarios y operativa',
  hoja: 'Hoja 30 · Operativa',
  title: 'Horarios de recepciones y expediciones y acceso de clientes | AFRIBA',
  description:
    'Recepciones y expediciones de lunes a viernes de 07:00 a 15:00. Los pedidos de salida del día se hacen por la web el día anterior antes de las 16:50. Acceso al área de clientes.',
  h1: 'La operativa del día, en una pantalla',
  prioridad: '0.9',
  cambio: 'monthly',
  heroe: {
    entradilla:
      'Si ya trabajas con nosotros, esto es lo que necesitas tener a mano: cuándo se recibe, cuándo se expide, hasta qué hora se pueden lanzar los pedidos y por dónde se entra.',
  },
};

function cuerpo() {
  const horarios =
    '<section class="seccion seccion--horario">' +
    '<div class="contenedor">' +
    '<div class="tablon">' +
    '<div class="tablon__cabeza"><p class="hoja hoja--claro">Horario</p>' +
    '<h2 class="tablon__titulo">De lunes a viernes</h2></div>' +
    '<dl class="tablon__filas">' +
    [
      ['Recepciones', 'Entradas · descargas · inbounds', '07:00 – 15:00'],
      ['Expediciones', 'Salidas · cargas · outbounds', '07:00 – 15:00'],
      ['Atención telefónica', 'Muelles · ' + SITE.telefonos.muelles.texto, '07:00 – 17:00'],
      ['Centralita', SITE.telefonos.centralita.texto, '09:00 – 14:00'],
    ]
      .map(
        (h) =>
          '<div class="tablon__fila"><dt><span class="tablon__rotulo">' + esc(h[0]) + '</span>' +
          '<span class="tablon__detalle">' + esc(h[1]) + '</span></dt>' +
          '<dd class="tablon__valor">' + esc(h[2]) + '</dd></div>'
      )
      .join('') +
    '</dl>' +
    '<p class="tablon__pie">Festivos locales de Madrid y de la Comunidad de Madrid: horario reducido, ' +
    'consultar siempre unos días antes. Festivos nacionales y fines de semana: <strong>cerrado</strong>.</p>' +
    '</div></div></section>';

  const avisos =
    '<section class="seccion seccion--avisos">' +
    '<div class="contenedor">' +
    '<div class="seccion__cabeza seccion__cabeza--estrecha">' +
    '<p class="hoja">30.1</p>' +
    '<h2 class="seccion__titulo">Dos avisos que ahorran un viaje</h2>' +
    '</div>' +
    '<ul class="avisos">' +
    '<li class="aviso"><span class="aviso__marca" aria-hidden="true">' + icono('reloj') + '</span>' +
    '<div><h3>Hora límite de pedidos</h3>' +
    '<p>Los pedidos de salidas del día deben hacerse <strong>siempre por la web el día anterior, antes de ' +
    'las 16:50</strong>.</p></div></li>' +
    '<li class="aviso"><span class="aviso__marca" aria-hidden="true">' + icono('termometro') + '</span>' +
    '<div><h3>Vehículos pre-enfriados</h3>' +
    '<p>En las expediciones y salidas, los vehículos deberán llegar <strong>pre-enfriados</strong> según los ' +
    'acuerdos de calidad del cliente.</p></div></li>' +
    '</ul></div></section>';

  const acceso =
    '<section class="seccion seccion--detalle seccion--alterna">' +
    '<div class="contenedor detalle__interior">' +
    '<div class="detalle__principal">' +
    '<p class="hoja">30.2</p>' +
    '<h2 class="seccion__titulo">Área de clientes</h2>' +
    '<p>Desde su propia empresa o cualquier otro sitio o dispositivo con acceso a Internet, tendrá la ' +
    'posibilidad de consultar su stock y realizar pedidos con nuestra aplicación de gestión.</p>' +
    '<p>Si eres cliente de <strong>Almacenes Frigoríficos Ibarz, S. A.</strong>, puedes obtener tu usuario y ' +
    'contraseña para el acceso exclusivo a nuestros servicios en el área de clientes llamando al teléfono ' +
    '<a href="tel:' + SITE.telefonos.muelles.tel + '">' + esc(SITE.telefonos.muelles.texto) + '</a> o ' +
    'solicitándolos por correo a ' + correo('fernando.cabases|vanhessen.com', { asunto: 'Solicitud de acceso al área de clientes' }) + '.</p>' +
    '<p class="acceso__boton">' +
    boton(SITE.areaClientes, 'Entrar en el área de clientes', { tipo: 'senal', iconoAntes: 'llave' }) +
    '</p>' +
    '<p><a href="gestion-en-linea.html">Qué se puede hacer desde dentro' + icono('flecha') + '</a></p>' +
    '</div>' +
    '<aside class="detalle__lateral">' +
    cajetin({
      ref: '30.2',
      titulo: 'Para conseguir la clave',
      filas: [
        ['Teléfono', '<a href="tel:' + SITE.telefonos.muelles.tel + '">' + esc(SITE.telefonos.muelles.texto) + '</a>'],
        ['Correo', correo('fernando.cabases|vanhessen.com')],
        ['Horario', '07:00 – 17:00'],
      ],
    }) +
    '</aside></div></section>';

  const clausula =
    '<section class="seccion seccion--legalillo">' +
    '<div class="contenedor">' +
    '<details class="plegable">' +
    '<summary>Cláusula informativa sobre el tratamiento de datos del área de clientes</summary>' +
    '<div class="plegable__cuerpo">' +
    D.CLAUSULA_AREA_CLIENTES.map((p) => '<p>' + esc(p) + '</p>').join('') +
    '</div></details></div></section>';

  const docs =
    '<section class="seccion seccion--docs">' +
    '<div class="contenedor">' +
    '<div class="seccion__cabeza seccion__cabeza--estrecha">' +
    '<p class="hoja">30.3</p>' +
    '<h2 class="seccion__titulo">Documentos importantes</h2>' +
    '</div>' +
    '<ul class="docs">' +
    '<li>' + enlacePdf('assets/docs/comunicado-a-transportistas.pdf', 'Comunicado a transportistas', 'PDF') + '</li>' +
    '<li>' + enlacePdf('assets/docs/instrucciones-control-acceso-transportistas.pdf', 'Instrucciones para el control de acceso de transportistas a la zona de antecámara y muelles', 'PDF') + '</li>' +
    '<li>' + enlacePdf('assets/docs/politica-de-calidad.pdf', 'Política de calidad', 'PDF') + '</li>' +
    '</ul>' +
    '<p class="mas"><a href="transportistas.html">Las normas de acceso, explicadas' + icono('flecha') + '</a></p>' +
    '</div></section>';

  return heroe(pagina) + horarios + avisos + acceso + docs + clausula + bandaCta();
}

module.exports = { pagina, cuerpo };
