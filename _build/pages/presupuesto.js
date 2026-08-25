/*
 * Solicitud de presupuesto.
 *
 * El formulario conserva EXACTAMENTE los nombres y los valores de campo del
 * formulario antiguo (nombre, cargo, telefono, email, empresa, PaletA, PaletE,
 * H180, H230, P1000, P1250, stock, entradas, mensaje, Privacidad, Publicidad)
 * y su accept-charset ISO-8859-1, porque el destino sigue siendo el mismo CGI
 * del alojamiento: /cgi-bin/afriba.exe/contacto.
 *
 * Si ese CGI no existe en el alojamiento de destino, el envío no llega. Por eso
 * el formulario ofrece además un botón que compone un correo con todos los
 * datos, y el aviso lo dice antes de escribir, no después de pulsar.
 * Ver PENDIENTE.md.
 */

'use strict';

const { SITE } = require('../nav');
const D = require('../data');
const L = require('../lib');
const { heroe } = require('../layout');
const { esc, icono, correo, cajetin } = L;

const pagina = {
  url: 'presupuesto.html',
  tituloCorto: 'Solicitar presupuesto',
  hoja: 'Hoja 50 · Presupuesto',
  title: 'Solicitar presupuesto de almacenamiento en congelación | AFRIBA',
  description:
    'Dinos el tipo de palé, la altura, el peso, el stock medio y las entradas mensuales y te preparamos un presupuesto de almacenamiento en congelación en Mercamadrid.',
  h1: 'Cuéntanos qué hay que guardar',
  prioridad: '0.9',
  heroe: {
    entradilla:
      'Con el tipo de palé, la altura, el peso, el stock medio y las entradas al mes tenemos lo necesario para darte una cifra. Los campos marcados con asterisco son obligatorios.',
  },
};

function campoTexto(id, nombre, etiqueta, opciones) {
  const o = opciones || {};
  return (
    '<div class="campo' + (o.clase ? ' ' + o.clase : '') + '">' +
    '<label class="campo__etiqueta" for="' + id + '">' + esc(etiqueta) +
    (o.obligatorio ? '<span class="campo__req" aria-hidden="true">*</span>' : '') + '</label>' +
    (o.ayuda ? '<p class="campo__ayuda" id="' + id + '-ayuda">' + esc(o.ayuda) + '</p>' : '') +
    '<input class="campo__control" type="' + (o.tipo || 'text') + '" id="' + id + '" name="' + nombre + '"' +
    (o.obligatorio ? ' required' : '') +
    (o.inputmode ? ' inputmode="' + o.inputmode + '"' : '') +
    (o.autocomplete ? ' autocomplete="' + o.autocomplete + '"' : '') +
    (o.ayuda ? ' aria-describedby="' + id + '-ayuda"' : '') +
    ' aria-describedby="' + (o.ayuda ? id + '-ayuda ' : '') + id + '-error">' +
    '<p class="campo__error" id="' + id + '-error" hidden>' + esc(o.error || 'Este dato es obligatorio.') + '</p>' +
    '</div>'
  );
}

function grupoCasillas(leyenda, nombreGrupo, casillas, error) {
  return (
    '<fieldset class="grupo" data-grupo="' + esc(nombreGrupo) + '">' +
    '<legend class="grupo__leyenda">' + esc(leyenda) + '<span class="campo__req" aria-hidden="true">*</span></legend>' +
    '<div class="grupo__opciones">' +
    casillas
      .map(
        (c) =>
          '<label class="casilla"><input type="checkbox" name="' + c.nombre + '" value="' + esc(c.valor) + '">' +
          '<span>' + esc(c.texto) + '</span></label>'
      )
      .join('') +
    '</div>' +
    '<p class="campo__error" id="' + nombreGrupo + '-error" hidden>' + esc(error) + '</p>' +
    '</fieldset>'
  );
}

function cuerpo() {
  const condiciones =
    '<div class="condiciones">' +
    '<p class="condiciones__titulo">' + icono('palet') + 'Sobre qué se calcula</p>' +
    '<ul>' + D.CONDICIONES_PRESUPUESTO.map((c) => '<li>' + esc(c) + '</li>').join('') + '</ul>' +
    '</div>';

  const formulario =
    '<form class="formulario" id="formulario-presupuesto" method="post" ' +
    'action="' + esc(SITE.endpointFormulario) + '" accept-charset="ISO-8859-1" ' +
    // El destino de la salida por correo va troceado, como el resto de
    // direcciones del sitio: el HTML no contiene la dirección completa.
    'data-destino="' + esc(SITE.correos.general.cuenta + '|' + SITE.correos.general.dominio) + '" novalidate>' +

    '<div class="formulario__bloque">' +
    '<h2 class="formulario__titulo"><span class="formulario__n">1</span>Quién eres</h2>' +
    '<div class="formulario__rejilla">' +
    campoTexto('f-nombre', 'nombre', 'Contacto', { obligatorio: true, autocomplete: 'name', error: 'Introduzca un nombre.' }) +
    campoTexto('f-cargo', 'cargo', 'Cargo', { autocomplete: 'organization-title' }) +
    campoTexto('f-empresa', 'empresa', 'Empresa', { obligatorio: true, autocomplete: 'organization', error: 'Introduzca un nombre de empresa.' }) +
    campoTexto('f-telefono', 'telefono', 'Teléfono', { obligatorio: true, tipo: 'tel', inputmode: 'tel', autocomplete: 'tel', error: 'Introduzca un número de teléfono.' }) +
    campoTexto('f-email', 'email', 'Correo electrónico', { obligatorio: true, tipo: 'email', inputmode: 'email', autocomplete: 'email', error: 'Introduzca un correo electrónico válido.', clase: 'campo--ancho' }) +
    '</div></div>' +

    '<div class="formulario__bloque">' +
    '<h2 class="formulario__titulo"><span class="formulario__n">2</span>Qué hay que guardar</h2>' +
    condiciones +
    grupoCasillas('Tipo de palé', 'tipo', [
      { nombre: 'PaletA', valor: 'Americano (120x100cm)', texto: 'Americano (120 × 100 cm)' },
      { nombre: 'PaletE', valor: 'Europeo (120x80cm)', texto: 'Europeo (120 × 80 cm)' },
    ], 'Seleccione un tipo.') +
    grupoCasillas('Altura', 'altura', [
      { nombre: 'H180', valor: 'Hasta 180cm', texto: 'Hasta 180 cm' },
      { nombre: 'H230', valor: 'Hasta 230cm', texto: 'Hasta 230 cm' },
    ], 'Seleccione una altura.') +
    grupoCasillas('Peso', 'peso', [
      { nombre: 'P1000', valor: 'Hasta 1.000Kg', texto: 'Hasta 1.000 kg' },
      { nombre: 'P1250', valor: 'Hasta 1.250Kg', texto: 'Hasta 1.250 kg' },
    ], 'Seleccione un peso.') +
    '<div class="formulario__rejilla">' +
    campoTexto('f-stock', 'stock', 'Stock medio', { obligatorio: true, inputmode: 'numeric', ayuda: 'Palés al mes', error: 'Introduzca un stock medio.' }) +
    campoTexto('f-entradas', 'entradas', 'Entradas promedio', { obligatorio: true, inputmode: 'numeric', ayuda: 'Palés al mes', error: 'Introduzca un promedio de entradas.' }) +
    '</div></div>' +

    '<div class="formulario__bloque">' +
    '<h2 class="formulario__titulo"><span class="formulario__n">3</span>Cuéntanos lo demás</h2>' +
    '<div class="campo campo--ancho">' +
    '<label class="campo__etiqueta" for="f-mensaje">Mensaje<span class="campo__req" aria-hidden="true">*</span></label>' +
    '<p class="campo__ayuda" id="f-mensaje-ayuda">Tipo de producto, fechas previstas, si necesitas crossdocking, cualquier cosa que nos ayude a afinar.</p>' +
    '<textarea class="campo__control campo__control--area" id="f-mensaje" name="mensaje" rows="6" required ' +
    'aria-describedby="f-mensaje-ayuda f-mensaje-error"></textarea>' +
    '<p class="campo__error" id="f-mensaje-error" hidden>Introduzca un mensaje.</p>' +
    '</div>' +

    // Trampa antispam: campo invisible para personas, irresistible para robots.
    '<div class="trampa" aria-hidden="true">' +
    '<label for="f-referencia">No rellenes este campo</label>' +
    '<input type="text" id="f-referencia" name="referencia_interna" tabindex="-1" autocomplete="off">' +
    '</div>' +

    '<div class="consentimientos">' +
    '<label class="casilla casilla--consentimiento">' +
    '<input type="checkbox" name="Privacidad" value="Política de Privacidad" required ' +
    'aria-describedby="f-privacidad-error">' +
    '<span>Acepto la <a href="politica-de-privacidad.html">Política de Privacidad</a>' +
    '<span class="campo__req" aria-hidden="true">*</span></span></label>' +
    '<p class="campo__error" id="f-privacidad-error" hidden>Debe aceptar la política de privacidad.</p>' +
    '<label class="casilla casilla--consentimiento">' +
    '<input type="checkbox" name="Publicidad" value="Acepto recibir publicidad">' +
    '<span>Acepto recibir publicidad y promociones de <em>ALMACENES FRIGORIFICOS IBARZ, S.A.</em></span></label>' +
    '</div>' +

    '<p class="clausula">' + esc(D.CLAUSULA_PRESUPUESTO) + '</p>' +
    '</div>' +

    '<div class="formulario__acciones">' +
    '<button type="submit" class="boton boton--senal boton--grande" name="enviarEmail" value="Enviar e-mail">' +
    '<span>Enviar la solicitud</span>' + icono('flecha') + '</button>' +
    '<button type="button" class="boton boton--contorno" id="enviar-por-correo">' +
    icono('correo') + '<span>Enviarlo por correo</span></button>' +
    '</div>' +
    '<p class="formulario__error-general" id="error-general" hidden>' + icono('escudo') +
    'Por favor, complete los datos necesarios para continuar.</p>' +
    '</form>';

  const aviso =
    '<div class="aviso-envio">' +
    '<p class="aviso-envio__rotulo">' + icono('escudo') + 'Cómo llega esta solicitud</p>' +
    '<p>«Enviar la solicitud» entrega el formulario al sistema de correo del propio servidor de AFRIBA. ' +
    'Si por cualquier motivo no obtienes respuesta en un día laborable, usa «Enviarlo por correo»: ' +
    'ese botón abre tu programa de correo con todos los datos ya escritos, o llámanos.</p>' +
    '<p class="aviso-envio__contacto">' +
    '<a href="tel:' + SITE.telefonos.centralita.tel + '">' + icono('telefono') + esc(SITE.telefonos.centralita.texto) + '</a>' +
    correo('afriba|vanhessen.com', { asunto: 'Solicitud de presupuesto' }) +
    '</p></div>';

  const seccion =
    '<section class="seccion seccion--formulario">' +
    '<div class="contenedor formulario__interior">' +
    '<div class="formulario__principal">' + formulario + '</div>' +
    '<aside class="formulario__lateral">' +
    cajetin({
      ref: '50.1',
      titulo: 'Datos que pedimos',
      filas: [
        ['Tipo de palé', 'Americano o europeo'],
        ['Altura', 'Hasta 180 o 230 cm'],
        ['Peso', 'Hasta 1.000 o 1.250 kg'],
        ['Stock medio', 'Palés al mes'],
        ['Entradas', 'Palés al mes'],
      ],
    }) +
    aviso +
    '</aside></div></section>';

  return heroe(pagina) + seccion;
}

module.exports = { pagina, cuerpo };
