/* Muelles y antecámara. */

'use strict';

const { SITE } = require('../nav');
const D = require('../data');
const L = require('../lib');
const { heroe, bandaCta } = require('../layout');
const { esc, icono, despiece, figura, cajetin, boton } = L;

const pagina = {
  url: 'muelles.html',
  tituloCorto: 'Muelles y antecámara',
  hoja: 'Hoja 12 · Muelles',
  title: 'Muelles y antecámara: 12 dársenas y +8 °C de tránsito | AFRIBA',
  description:
    'Once dársenas con abrigo y plataforma electromecánica más una manual, antecámara de 529,70 m² a +8 °C, dos puertas térmicas automatizadas y básculas de palé a nivel de suelo.',
  h1: 'Doce dársenas y una antecámara para que la cadena no se rompa en el trasvase',
  prioridad: '0.8',
  heroe: {
    entradilla:
      'El punto delicado de un almacén frigorífico es el momento en que la mercancía sale del camión. Aquí ese momento ocurre bajo abrigo, con la plataforma pegada al vehículo y una antecámara climatizada a +8 °C detrás.',
  },
};

function cuerpo() {
  const foto =
    '<section class="seccion seccion--vista">' +
    '<div class="contenedor">' +
    figura('muelles-camiones.jpg', 'Cuatro camiones frigoríficos estacionados frente a las dársenas de carga del edificio AFRIBA', {
      prioritaria: true,
      pie: 'Dársenas de carga y descarga vistas desde el exterior.',
      ref: 'V-04',
      clase: 'figura--ancha',
      sizes: '(min-width: 62rem) 40rem, 92vw',
    }) +
    '</div></section>';

  const detalle =
    '<section class="seccion seccion--detalle">' +
    '<div class="contenedor detalle__interior">' +
    '<div class="detalle__principal">' +
    '<p class="hoja">Despiece 12.1</p>' +
    '<h2 class="seccion__titulo">Muelles</h2>' +
    despiece(D.MUELLES.map(esc)) +
    '</div>' +
    '<aside class="detalle__lateral">' +
    cajetin({
      ref: '12.1',
      titulo: 'Resumen',
      filas: [
        ['Muelle exterior', '816,60 m²'],
        ['Antecámara', '529,70 m²'],
        ['Régimen de antecámara', '+8 °C'],
        ['Potencia', '95 kW'],
        ['Dársenas con abrigo', '11'],
        ['Dársena manual', '1, con rampa fija'],
        ['Básculas', '2 de suelo + 1 de sobremesa'],
      ],
    }) +
    '<div class="nota nota--compacta">' +
    '<p class="nota__rotulo">' + icono('camion') + 'Si vienes a cargar</p>' +
    '<p>La ventanilla de control está en la fachada principal, entre los muelles 11 y 12. ' +
    'Chaleco reflectante obligatorio y desplazamiento por la línea naranja del suelo.</p>' +
    '<p>' + boton('transportistas.html', 'Normas de acceso', { tipo: 'contorno', iconoDespues: 'flecha' }) + '</p>' +
    '</div>' +
    '</aside></div></section>';

  const horario =
    '<section class="seccion seccion--horario">' +
    '<div class="contenedor">' +
    '<div class="seccion__cabeza seccion__cabeza--estrecha">' +
    '<p class="hoja">Horario de muelles</p>' +
    '<h2 class="seccion__titulo">Cuándo se opera</h2>' +
    '</div>' +
    '<dl class="horarios">' +
    SITE.horarios
      .slice(0, 3)
      .map(
        (h) =>
          '<div class="horario"><dt>' + esc(h.rotulo) + '<span>' + esc(h.detalle) + '</span></dt>' +
          '<dd>' + esc(h.valor) + '</dd></div>'
      )
      .join('') +
    '</dl>' +
    '<p class="aviso-fuerte">' + icono('reloj') +
    '<span>Los pedidos de salidas del día deben hacerse siempre por la web el día anterior, ' +
    '<strong>antes de las 16:50</strong>. En las expediciones, los vehículos deberán llegar pre-enfriados ' +
    'según los acuerdos de calidad del cliente.</span></p>' +
    '<p class="mas"><a href="clientes.html">Operativa completa para clientes' + icono('flecha') + '</a></p>' +
    '</div></section>';

  return heroe(pagina) + foto + detalle + horario + bandaCta();
}

module.exports = { pagina, cuerpo };
