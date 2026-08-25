/* =====================================================================
   AFRIBA — único archivo de comportamiento.

   Escrito conservador: IIFE con "use strict", sin módulos ES, sin
   dependencias y con degradación elegante. Todo lo que hay aquí es una
   mejora sobre un sitio que ya funciona sin JavaScript:

     · el mega-menú de escritorio se abre con clic y con teclado
     · el cajón lateral del móvil atrapa el foco y se cierra con Escape
     · los acordeones del cajón agrupan cada familia del menú
     · el visor de galería amplía las fotografías
     · los correos se ensamblan aquí, no en el HTML
     · el formulario se valida en cliente y ofrece salida por correo
     · el aviso de cookies recuerda la aceptación
     · las piezas del plano entran al aparecer en pantalla

   Sin JavaScript: los paneles del menú y del cajón no se despliegan, pero
   todos los enlaces están en el pie; los bloques plegables son <details>
   nativos y siguen funcionando; la galería enlaza al archivo de imagen; el formulario envía al
   servidor con la validación nativa del navegador.
   ===================================================================== */

(function () {
  'use strict';

  var doc = document;
  var raiz = doc.documentElement;

  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) {
    return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel));
  }
  function on(el, evt, fn, opts) { if (el) el.addEventListener(evt, fn, opts || false); }

  var reduceMovimiento = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : { matches: false };

  var FOCO =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), ' +
    'textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function focoDentro(contenedor) {
    return $$(FOCO, contenedor).filter(function (el) {
      return el.offsetWidth > 0 || el.offsetHeight > 0 || el === doc.activeElement;
    });
  }

  /* Atrapa el foco dentro de un contenedor mientras esté abierto. */
  function atraparFoco(contenedor, ev) {
    if (ev.key !== 'Tab') return;
    var focos = focoDentro(contenedor);
    if (!focos.length) return;
    var primero = focos[0];
    var ultimo = focos[focos.length - 1];
    if (ev.shiftKey && doc.activeElement === primero) {
      ev.preventDefault();
      ultimo.focus();
    } else if (!ev.shiftKey && doc.activeElement === ultimo) {
      ev.preventDefault();
      primero.focus();
    }
  }

  /* ---------------------------------------------------------------- *
   * 1. Correos electrónicos
   *
   * El HTML solo lleva data-correo="cuenta|dominio". Aquí se monta el
   * enlace mailto: real. Un robot que lea el HTML no encuentra la
   * dirección; un lector de pantalla sí lee el enlace montado.
   * ---------------------------------------------------------------- */

  $$('[data-correo]').forEach(function (nodo) {
    var partes = String(nodo.getAttribute('data-correo')).split('|');
    if (partes.length !== 2) return;
    var direccion = partes[0] + '@' + partes[1];
    var enlace = doc.createElement('a');
    enlace.href = 'mailto:' + direccion +
      (nodo.getAttribute('data-asunto')
        ? '?subject=' + encodeURIComponent(nodo.getAttribute('data-asunto'))
        : '');
    enlace.textContent = direccion;
    nodo.innerHTML = '';
    nodo.appendChild(enlace);
  });

  /* ---------------------------------------------------------------- *
   * 2. Mega-menú de escritorio
   * ---------------------------------------------------------------- */

  var itemsMenu = $$('[data-mm]');
  var menuAbierto = null;

  function cerrarMenu(item) {
    if (!item) return;
    var boton = $('.nav__boton', item);
    var panel = $('.mm', item);
    if (boton) boton.setAttribute('aria-expanded', 'false');
    if (panel) panel.hidden = true;
    if (menuAbierto === item) menuAbierto = null;
  }

  function abrirMenu(item) {
    if (menuAbierto && menuAbierto !== item) cerrarMenu(menuAbierto);
    var boton = $('.nav__boton', item);
    var panel = $('.mm', item);
    if (boton) boton.setAttribute('aria-expanded', 'true');
    if (panel) panel.hidden = false;
    menuAbierto = item;
  }

  itemsMenu.forEach(function (item) {
    var boton = $('.nav__boton', item);
    on(boton, 'click', function () {
      if (boton.getAttribute('aria-expanded') === 'true') cerrarMenu(item);
      else abrirMenu(item);
    });
  });

  on(doc, 'click', function (ev) {
    if (!menuAbierto) return;
    if (!menuAbierto.contains(ev.target)) cerrarMenu(menuAbierto);
  });

  on(doc, 'keydown', function (ev) {
    if (ev.key !== 'Escape' || !menuAbierto) return;
    var boton = $('.nav__boton', menuAbierto);
    cerrarMenu(menuAbierto);
    if (boton) boton.focus();
  });

  /* Al salir con el tabulador del último enlace del panel, se cierra. */
  on(doc, 'focusin', function (ev) {
    if (!menuAbierto) return;
    if (!menuAbierto.contains(ev.target)) cerrarMenu(menuAbierto);
  });

  /* ---------------------------------------------------------------- *
   * 3. Cajón lateral del móvil
   * ---------------------------------------------------------------- */

  var cajon = $('#cajon');
  var abrirCajon = $('[data-cajon-abrir]');
  var ultimoFoco = null;

  function cerrarElCajon() {
    if (!cajon || cajon.hidden) return;
    cajon.hidden = true;
    if (abrirCajon) abrirCajon.setAttribute('aria-expanded', 'false');
    doc.body.style.removeProperty('overflow');
    /* Si el botón que abrió el cajón ya no se muestra (por ejemplo, porque
       se ha ensanchado la ventana hasta el menú de escritorio), el foco no
       puede volver a él: se lleva al contenido para no dejarlo perdido. */
    if (ultimoFoco && ultimoFoco.offsetParent !== null) {
      ultimoFoco.focus();
    } else {
      var destino = doc.getElementById('contenido');
      if (destino) { destino.setAttribute('tabindex', '-1'); destino.focus(); }
    }
  }

  function abrirElCajon() {
    if (!cajon) return;
    ultimoFoco = doc.activeElement;
    cajon.hidden = false;
    if (abrirCajon) abrirCajon.setAttribute('aria-expanded', 'true');
    doc.body.style.overflow = 'hidden';
    var primero = focoDentro(cajon)[0];
    if (primero) primero.focus();
  }

  on(abrirCajon, 'click', abrirElCajon);
  $$('[data-cajon-cerrar]').forEach(function (b) { on(b, 'click', cerrarElCajon); });

  if (cajon) {
    on(cajon, 'keydown', function (ev) {
      if (ev.key === 'Escape') { cerrarElCajon(); return; }
      atraparFoco($('.cajon__panel', cajon) || cajon, ev);
    });
  }

  /* Acordeones del cajón */
  $$('.cajon__boton').forEach(function (boton) {
    var panel = doc.getElementById(boton.getAttribute('aria-controls'));
    if (!panel) return;
    panel.hidden = true;
    on(boton, 'click', function () {
      var abierto = boton.getAttribute('aria-expanded') === 'true';
      boton.setAttribute('aria-expanded', abierto ? 'false' : 'true');
      panel.hidden = abierto;
    });
    /* Si dentro está la página actual, se abre de partida. */
    if ($('[aria-current="page"]', panel)) {
      boton.setAttribute('aria-expanded', 'true');
      panel.hidden = false;
    }
  });

  /* ---------------------------------------------------------------- *
   * 4. Visor de galería
   * ---------------------------------------------------------------- */

  var visor = $('#visor');
  var visorFigura = $('#visor-figura');
  var visorImg = null;
  var visorPie = null;
  var enlacesGaleria = $$('[data-galeria] .galeria__enlace');
  var indiceVisor = 0;
  var focoPrevioVisor = null;

  /* La imagen del visor se crea aquí, no en el HTML: así la página nunca
     lleva una imagen sin origen que el navegador dibuje como rota. */
  if (visorFigura) {
    visorImg = doc.createElement('img');
    visorImg.alt = '';        /* se rellena al abrir cada fotografía */
    visorImg.decoding = 'async';
    visorPie = doc.createElement('figcaption');
    visorFigura.appendChild(visorImg);
    visorFigura.appendChild(visorPie);
  }

  function mostrarEnVisor(i) {
    if (!enlacesGaleria.length || !visorImg) return;
    indiceVisor = (i + enlacesGaleria.length) % enlacesGaleria.length;
    var enlace = enlacesGaleria[indiceVisor];
    visorImg.src = enlace.getAttribute('href');
    visorImg.alt = enlace.getAttribute('data-alt') || '';
    visorPie.textContent = enlace.getAttribute('data-pie') || '';
  }

  function abrirVisor(i) {
    if (!visor) return;
    focoPrevioVisor = doc.activeElement;
    mostrarEnVisor(i);
    visor.hidden = false;
    doc.body.style.overflow = 'hidden';
    var cerrar = $('.visor__cerrar', visor);
    if (cerrar) cerrar.focus();
  }

  function cerrarVisor() {
    if (!visor || visor.hidden) return;
    visor.hidden = true;
    doc.body.style.removeProperty('overflow');
    if (focoPrevioVisor) focoPrevioVisor.focus();
  }

  enlacesGaleria.forEach(function (enlace, i) {
    on(enlace, 'click', function (ev) {
      if (!visor) return;          // sin visor, el enlace abre la imagen
      ev.preventDefault();
      abrirVisor(i);
    });
  });

  if (visor) {
    $$('[data-visor-cerrar]', visor).forEach(function (b) { on(b, 'click', cerrarVisor); });
    on($('[data-visor-ant]', visor), 'click', function () { mostrarEnVisor(indiceVisor - 1); });
    on($('[data-visor-sig]', visor), 'click', function () { mostrarEnVisor(indiceVisor + 1); });
    on(visor, 'keydown', function (ev) {
      if (ev.key === 'Escape') { cerrarVisor(); return; }
      if (ev.key === 'ArrowLeft') { mostrarEnVisor(indiceVisor - 1); return; }
      if (ev.key === 'ArrowRight') { mostrarEnVisor(indiceVisor + 1); return; }
      atraparFoco($('.visor__panel', visor) || visor, ev);
    });
  }

  /* ---------------------------------------------------------------- *
   * 5. Aviso de cookies
   * ---------------------------------------------------------------- */

  var aviso = $('#aviso-cookies');
  var botonCookies = $('#btn-aceptar-cookies');
  var CLAVE_COOKIES = 'afriba-cookies-aceptadas';

  function leerAceptacion() {
    try { return window.localStorage.getItem(CLAVE_COOKIES) === '1'; }
    catch (e) { return false; }
  }

  if (aviso && !leerAceptacion()) {
    aviso.hidden = false;
  }
  on(botonCookies, 'click', function () {
    try { window.localStorage.setItem(CLAVE_COOKIES, '1'); } catch (e) { /* modo privado */ }
    if (aviso) aviso.hidden = true;
  });

  /* ---------------------------------------------------------------- *
   * 6. Formulario de presupuesto
   *
   * Validación en cliente antes de enviar al CGI del alojamiento, y un
   * segundo botón que compone un correo con los mismos datos por si ese
   * destino no existiera. El formulario NUNCA finge que ha enviado nada:
   * el envío lo hace el navegador contra el servidor.
   * ---------------------------------------------------------------- */

  var formulario = $('#formulario-presupuesto');

  if (formulario) {
    var errorGeneral = $('#error-general', formulario);

    function marcarError(campo, idError, hayError) {
      var aviso = doc.getElementById(idError);
      if (aviso) aviso.hidden = !hayError;
      if (campo) {
        if (hayError) campo.setAttribute('aria-invalid', 'true');
        else campo.removeAttribute('aria-invalid');
      }
    }

    function validarCampo(campo) {
      var vacio = !campo.value.trim();
      var invalido = vacio;
      if (!vacio && campo.type === 'email') {
        invalido = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(campo.value.trim());
      }
      marcarError(campo, campo.id + '-error', invalido);
      return !invalido;
    }

    function validarGrupo(fieldset) {
      var nombre = fieldset.getAttribute('data-grupo');
      var marcada = $$('input[type="checkbox"]', fieldset).some(function (c) { return c.checked; });
      marcarError(null, nombre + '-error', !marcada);
      return marcada;
    }

    function validarPrivacidad() {
      var casilla = $('input[name="Privacidad"]', formulario);
      var ok = casilla && casilla.checked;
      marcarError(casilla, 'f-privacidad-error', !ok);
      return ok;
    }

    function validarTodo() {
      var ok = true;
      $$('.campo__control[required]', formulario).forEach(function (c) {
        if (!validarCampo(c)) ok = false;
      });
      $$('[data-grupo]', formulario).forEach(function (g) {
        if (!validarGrupo(g)) ok = false;
      });
      if (!validarPrivacidad()) ok = false;
      return ok;
    }

    $$('.campo__control', formulario).forEach(function (campo) {
      on(campo, 'blur', function () {
        if (campo.hasAttribute('required')) validarCampo(campo);
      });
      on(campo, 'input', function () {
        if (campo.getAttribute('aria-invalid') === 'true') validarCampo(campo);
      });
    });

    $$('[data-grupo] input[type="checkbox"]', formulario).forEach(function (c) {
      on(c, 'change', function () {
        var grupo = c.closest ? c.closest('[data-grupo]') : null;
        if (grupo) validarGrupo(grupo);
      });
    });

    on($('input[name="Privacidad"]', formulario), 'change', validarPrivacidad);

    on(formulario, 'submit', function (ev) {
      /* Trampa antispam: si el campo oculto viene relleno, no es una persona. */
      var trampa = $('input[name="referencia_interna"]', formulario);
      if (trampa && trampa.value) {
        ev.preventDefault();
        return;
      }
      if (!validarTodo()) {
        ev.preventDefault();
        if (errorGeneral) errorGeneral.hidden = false;
        var primero = $('[aria-invalid="true"]', formulario) ||
          $('.campo__error:not([hidden])', formulario);
        if (primero && primero.focus) primero.focus();
        else if (primero && primero.scrollIntoView) {
          primero.scrollIntoView({ block: 'center', behavior: reduceMovimiento.matches ? 'auto' : 'smooth' });
        }
        return;
      }
      if (errorGeneral) errorGeneral.hidden = true;
    });

    /* Salida por correo: compone un mailto: con todo lo escrito. */
    on($('#enviar-por-correo'), 'click', function () {
      if (!validarTodo()) {
        if (errorGeneral) errorGeneral.hidden = false;
        return;
      }
      if (errorGeneral) errorGeneral.hidden = true;

      function valor(nombre) {
        var el = $('[name="' + nombre + '"]', formulario);
        return el ? el.value.trim() : '';
      }
      function marcadas(nombres) {
        return nombres
          .map(function (n) {
            var el = $('[name="' + n + '"]', formulario);
            return el && el.checked ? el.value : null;
          })
          .filter(Boolean)
          .join(', ');
      }

      var lineas = [
        'Solicitud de presupuesto — AFRIBA',
        '',
        'Contacto: ' + valor('nombre'),
        'Cargo: ' + valor('cargo'),
        'Empresa: ' + valor('empresa'),
        'Teléfono: ' + valor('telefono'),
        'Correo: ' + valor('email'),
        '',
        'Tipo de palé: ' + marcadas(['PaletA', 'PaletE']),
        'Altura: ' + marcadas(['H180', 'H230']),
        'Peso: ' + marcadas(['P1000', 'P1250']),
        'Stock medio (palés/mes): ' + valor('stock'),
        'Entradas promedio (palés/mes): ' + valor('entradas'),
        '',
        'Mensaje:',
        valor('mensaje'),
        '',
        'Acepta la Política de Privacidad: sí',
        'Acepta recibir publicidad: ' +
          ($('[name="Publicidad"]', formulario) && $('[name="Publicidad"]', formulario).checked ? 'sí' : 'no'),
      ];

      /* El destino se arma desde data-destino="cuenta|dominio": la
         dirección tampoco aparece entera en este archivo. */
      var destino = String(formulario.getAttribute('data-destino') || '').split('|');
      if (destino.length !== 2) return;

      window.location.href =
        'mailto:' + destino[0] + '@' + destino[1] +
        '?subject=' + encodeURIComponent('Solicitud de presupuesto — ' + (valor('empresa') || valor('nombre'))) +
        '&body=' + encodeURIComponent(lineas.join('\n'));
    });
  }

  /* ---------------------------------------------------------------- *
   * 7. Entrada de las piezas del plano
   *
   * Un solo gesto en todo el sitio. Si no hay IntersectionObserver, todo
   * queda visible desde el principio.
   * ---------------------------------------------------------------- */

  var SELECTOR_ANIM = [
    '.cajetin', '.lector', '.figura', '.cuadro', '.nota', '.parte',
    '.ruta', '.sello', '.clave__item', '.aviso', '.persona', '.contacto',
    '.tablon', '.vista-cotas', '.portada__vista-marco', '.seccion__cabeza',
    '.despiece__item', '.servicio', '.formulario__bloque', '.galeria__item',
  ].join(',');

  var piezas = $$(SELECTOR_ANIM);

  if (!('IntersectionObserver' in window) || reduceMovimiento.matches) {
    piezas.forEach(function (p) { p.classList.add('visible'); });
  } else {
    piezas.forEach(function (p) { p.classList.add('anim'); });
    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );
    piezas.forEach(function (p) { observador.observe(p); });

    /* Red de seguridad: si algo no llegó a activarse en 4 segundos
       (pestaña en segundo plano, navegador antiguo), se muestra igual. */
    window.setTimeout(function () {
      piezas.forEach(function (p) { p.classList.add('visible'); });
    }, 4000);
  }

  /* Las cotas se dibujan con la vista que las contiene. */
  $$('.cotas').forEach(function (c) {
    var marco = c.parentNode;
    if (marco && marco.classList) marco.classList.add('anim');
  });

  raiz.classList.add('js-listo');
})();
