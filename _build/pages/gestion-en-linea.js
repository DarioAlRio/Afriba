/* Gestión en línea de stocks y pedidos. */

'use strict';

const { SITE } = require('../nav');
const L = require('../lib');
const { heroe, bandaCta } = require('../layout');
const { esc, icono, figura, boton, correo, cajetin } = L;

const pagina = {
  url: 'gestion-en-linea.html',
  tituloCorto: 'Gestión en línea de stocks',
  hoja: 'Hoja 32 · Gestión en línea',
  title: 'Consulta de stock y pedidos en línea para clientes | AFRIBA',
  description:
    'Con un acceso a internet, el cliente de AFRIBA visualiza stocks detallados y resumidos y realiza pedidos desde su propia empresa o cualquier dispositivo.',
  h1: 'Tu stock, desde cualquier navegador',
  prioridad: '0.7',
  heroe: {
    entradilla:
      'Por medio de un acceso a internet, el cliente tiene la posibilidad de visualizar stocks detallados, stocks resumidos y realizar pedidos.',
  },
};

function cuerpo() {
  const bloque =
    '<section class="seccion seccion--detalle">' +
    '<div class="contenedor detalle__interior">' +
    '<div class="detalle__principal">' +
    '<p class="hoja">32.1</p>' +
    '<h2 class="seccion__titulo">Qué se hace desde dentro</h2>' +
    '<ul class="lista-marcada">' +
    [
      'Consultar el stock detallado, palé a palé.',
      'Consultar el stock resumido por artículo.',
      'Realizar pedidos de expedición.',
    ]
      .map((t) => '<li>' + esc(t) + '</li>')
      .join('') +
    '</ul>' +
    '<p>El sistema es el mismo Sistema de Gestión de Almacén que utiliza el personal de la cámara con los ' +
    'terminales de radiofrecuencia, así que lo que ves es lo que hay en la estantería.</p>' +
    figura('pantalla-area-clientes.png', 'Captura de la pantalla del área de clientes, con el menú de consultas de stock, formularios de recepciones y expediciones y el aviso de acceso restringido', {
      prioritaria: true,
      pie: 'Pantalla de entrada del área de clientes.',
      ref: 'V-14',
      sizes: '(min-width: 62rem) 24rem, 92vw',
    }) +
    '<p class="acceso__boton">' +
    boton(SITE.areaClientes, 'Entrar en el área de clientes', { tipo: 'senal', iconoAntes: 'llave' }) +
    '</p>' +
    '</div>' +
    '<aside class="detalle__lateral">' +
    cajetin({
      ref: '32.1',
      titulo: 'Hora límite',
      filas: [
        ['Pedidos de salida del día', 'El día anterior, antes de las 16:50'],
        ['Expediciones', 'Lunes a viernes, 07:00 – 15:00'],
      ],
      pie: '<a href="clientes.html">Operativa completa</a>',
    }) +
    '<div class="nota nota--compacta">' +
    '<p class="nota__rotulo">' + icono('llave') + '¿Aún no tienes clave?</p>' +
    '<p>Llama al <a href="tel:' + SITE.telefonos.muelles.tel + '">' + esc(SITE.telefonos.muelles.texto) +
    '</a> o escribe a ' + correo('fernando.cabases|vanhessen.com', { asunto: 'Solicitud de acceso al área de clientes' }) + '.</p>' +
    '</div>' +
    '</aside></div></section>';

  const trazas =
    '<section class="seccion seccion--nota">' +
    '<div class="contenedor">' +
    '<div class="nota">' +
    '<p class="nota__rotulo">' + icono('documento') + 'Sistema de gestión</p>' +
    '<p>El servicio se apoya en el sistema de captura y emisión de datos en formato electrónico y en la ' +
    'gestión de EAN 128, y el departamento de desarrollo informático de AFRIBA diseña soluciones a medida ' +
    'para cada cliente.</p>' +
    '<p><a href="trazabilidad.html">Cómo funciona la trazabilidad' + icono('flecha') + '</a></p>' +
    '</div></div></section>';

  return heroe(pagina) + bloque + trazas + bandaCta();
}

module.exports = { pagina, cuerpo };
