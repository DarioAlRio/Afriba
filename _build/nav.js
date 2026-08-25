/*
 * nav.js — datos del negocio y estructura de navegación.
 *
 * Aquí se toca:
 *   · un teléfono, un correo, una dirección, un horario  → SITE
 *   · el mega-menú de escritorio y el cajón del móvil     → NAV
 *   · el pie                                              → FOOT
 *
 * Todos los datos de SITE salen del dominio original. No añadas ninguno que
 * no puedas señalar en http://www.afriba.com o en sus PDF.
 */

'use strict';

const SITE = {
  nombre: 'AFRIBA',
  razonSocial: 'Almacenes Frigoríficos Ibarz, S. A.',
  razonSocialMayus: 'ALMACENES FRIGORIFICOS IBARZ, S.A.',
  lema: 'Su operador logístico del frío',
  cif: 'A82423641',
  registro: 'Registro Mercantil de Madrid, T 30602, F 6, S 8, H M 247598, I/A 34',
  administrador: 'Jorge Orlando Morejón Guillama',

  // Producción: dominio real del cliente. Se usa para canonical, OG y sitemap.
  dominio: 'http://www.afriba.com',

  direccion: {
    edificio: 'Edificio AFRIBA',
    calle: 'Calle Eje 3-18, 8',
    detalle: 'Plataforma Baja · Mercamadrid',
    cp: '28053',
    ciudad: 'Madrid',
    pais: 'España',
    // Domicilio social tal y como lo escriben en el aviso legal y en la
    // convocatoria de Junta General.
    domicilioSocial: 'Ctra. Villaverde a Vallecas km 3,800, 28053 Madrid',
    lat: '40.3578022',
    lon: '-3.6707087',
    mapaAmpliado:
      'https://www.google.es/maps/place/Calle+Eje+3-18,+8,+28053+Madrid/@40.3578063,-3.6728974,17z/data=!4m5!3m4!1s0xd42269988f5fba3:0xe1acb15fb8b298a9!8m2!3d40.3578022!4d-3.6707087',
    mapaEmbebido: 'https://www.google.com/maps/d/embed?mid=1hqSYV1S0_DNtdgYnWKNDtxHRZ1Q',
  },

  telefonos: {
    centralita: { texto: '915 079 255', tel: '+34915079255', horario: 'Lunes a viernes de 09:00 a 14:00' },
    muelles: { texto: '915 079 256', tel: '+34915079256', horario: 'Lunes a viernes de 07:00 a 17:00' },
  },

  // Los correos nunca se escriben enteros en el HTML: se ensamblan en el
  // navegador desde data-correo="cuenta|dominio". Ver assets/js/site.js.
  correos: {
    general: { cuenta: 'afriba', dominio: 'vanhessen.com' },
    lopd: { cuenta: 'lopd', dominio: 'vanhessen.com' },
    comercial: { cuenta: 'fernando.cabases', dominio: 'vanhessen.com' },
  },

  horarios: [
    { rotulo: 'Recepciones', detalle: 'Entradas · descargas · inbounds', valor: 'Lunes a viernes, de 07:00 a 15:00' },
    { rotulo: 'Expediciones', detalle: 'Salidas · cargas · outbounds', valor: 'Lunes a viernes, de 07:00 a 15:00' },
    { rotulo: 'Atención telefónica de muelles', detalle: 'Teléfono 915 079 256', valor: 'De 07:00 a 17:00' },
    { rotulo: 'Centralita', detalle: 'Teléfono 915 079 255', valor: 'Lunes a viernes de 09:00 a 14:00' },
  ],

  // Enlace al área privada. Vive en el mismo servidor que el sitio antiguo.
  areaClientes: 'Resumen.asp?inicio=true&orden=STOCK.ARTDES',

  // Punto de entrega del formulario de presupuesto: el CGI del alojamiento
  // original, que a fecha de rastreo (agosto de 2026) responde. Si el sitio se
  // sube a otro alojamiento hay que revisarlo. Ver PENDIENTE.md.
  endpointFormulario: 'cgi-bin/afriba.exe/contacto',

  analytics: 'G-95GE4BGW5C',
};

/*
 * NAV — el mega-menú.
 *
 * El menú del sitio antiguo era plano (Inicio · Servicios · Equipamiento ·
 * RR. HH. · Presupuesto · Clientes · Avisos legales) y dejaba fuera las
 * políticas, los PDF de transportistas, la página de contacto y todo el
 * detalle de la instalación. Aquí se agrupa en cinco familias. La tabla
 * antiguo → nuevo está en el README.
 *
 *   url         destino, sin barra inicial
 *   titulo      texto del enlace
 *   desc        una línea que dice qué hay detrás; se ve en el mega-menú
 *   img         opcional, imagen de apoyo de la columna (solo en escritorio)
 */
const NAV = [
  {
    titulo: 'Instalación',
    url: 'instalacion.html',
    resumen: '3.388 m² de cámara a −22 °C dentro de Mercamadrid.',
    img: { src: 'camara-pasillo-central.jpg', alt: 'Pasillo central de la cámara de congelación entre estanterías cargadas de palés' },
    enlaces: [
      { url: 'instalacion.html', titulo: 'Vista general', desc: 'Las cifras de la instalación en una sola tabla.' },
      { url: 'camara-frigorifica.html', titulo: 'Cámara frigorífica', desc: '8.943 palés, 26 pasillos, hasta 7 alturas.' },
      { url: 'muelles.html', titulo: 'Muelles y antecámara', desc: '12 dársenas y antecámara climatizada a +8 °C.' },
      { url: 'equipamiento.html', titulo: 'Sala de máquinas y parque móvil', desc: '640 kW de potencia frigorífica y la maquinaria de estiba.' },
      { url: 'seguridad.html', titulo: 'Seguridad y vigilancia', desc: '32 cámaras, intrusión, incendios y 1.000 kVA propios.' },
      { url: 'oficinas.html', titulo: 'Oficinas en alquiler', desc: '800 m² en dos plantas, desde 40 m².' },
    ],
  },
  {
    titulo: 'Servicios',
    url: 'servicios.html',
    resumen: 'Congelación, crossdocking, trazabilidad y gestión en línea.',
    img: { src: 'terminal-radiofrecuencia.jpg', alt: 'Terminal de radiofrecuencia sobre una etiqueta de palé con código de barras' },
    enlaces: [
      { url: 'servicios.html', titulo: 'Qué hacemos', desc: 'Los ocho servicios del almacén, uno a uno.' },
      { url: 'trazabilidad.html', titulo: 'Trazabilidad y radiofrecuencia', desc: 'SGA, EAN 128 y Reglamento 178/2002.' },
      { url: 'certificaciones.html', titulo: 'Certificaciones y calidad', desc: 'IFS Logistics V3, SAE de Certicalidad y HACCP.' },
    ],
  },
  {
    titulo: 'Operativa',
    url: 'clientes.html',
    resumen: 'Horarios, hora límite de pedidos y normas de acceso.',
    img: { src: 'muelles-camiones.jpg', alt: 'Camiones frigoríficos estacionados frente a las dársenas de carga' },
    enlaces: [
      { url: 'clientes.html', titulo: 'Horarios y operativa', desc: 'Recepciones, expediciones y hora límite de pedidos.' },
      { url: 'transportistas.html', titulo: 'Acceso de transportistas', desc: 'Normas de entrada a antecámara y muelles.' },
      { url: 'gestion-en-linea.html', titulo: 'Gestión en línea de stocks', desc: 'Consulta de stock y pedidos desde el navegador.' },
    ],
  },
  {
    titulo: 'Empresa',
    url: 'empresa.html',
    resumen: 'Desde 2001 en el mayor nudo alimentario de la península.',
    img: { src: 'edificio-afriba-lateral.jpg', alt: 'Vista lateral del edificio AFRIBA desde el vial de Mercamadrid' },
    enlaces: [
      { url: 'empresa.html', titulo: 'Quiénes somos', desc: 'La instalación, su origen y su posición.' },
      { url: 'equipo.html', titulo: 'Equipo y contactos directos', desc: 'Cinco personas, con extensión y correo.' },
      { url: 'junta-general.html', titulo: 'Junta General de accionistas', desc: 'Convocatoria vigente y orden del día.' },
    ],
  },
  {
    titulo: 'Contacto',
    url: 'contacto.html',
    resumen: 'Dónde estamos, a qué hora y con quién hablar.',
    img: { src: 'edificio-afriba-entrada.jpg', alt: 'Fachada principal del edificio AFRIBA con el isotipo del oso polar' },
    enlaces: [
      { url: 'contacto.html', titulo: 'Cómo llegar y a quién llamar', desc: 'Dirección, coordenadas, teléfonos y mapa.' },
      { url: 'presupuesto.html', titulo: 'Solicitar presupuesto', desc: 'Dinos qué palés y cuántos y te respondemos.' },
    ],
  },
];

/*
 * FOOT — el pie. Tres columnas de enlaces más la banda legal.
 */
const FOOT = {
  columnas: [
    {
      titulo: 'La instalación',
      enlaces: [
        { url: 'instalacion.html', titulo: 'Vista general' },
        { url: 'camara-frigorifica.html', titulo: 'Cámara frigorífica' },
        { url: 'muelles.html', titulo: 'Muelles y antecámara' },
        { url: 'equipamiento.html', titulo: 'Sala de máquinas y parque móvil' },
        { url: 'seguridad.html', titulo: 'Seguridad y vigilancia' },
        { url: 'oficinas.html', titulo: 'Oficinas en alquiler' },
      ],
    },
    {
      titulo: 'Servicios y operativa',
      enlaces: [
        { url: 'servicios.html', titulo: 'Qué hacemos' },
        { url: 'trazabilidad.html', titulo: 'Trazabilidad y radiofrecuencia' },
        { url: 'certificaciones.html', titulo: 'Certificaciones y calidad' },
        { url: 'clientes.html', titulo: 'Horarios y operativa' },
        { url: 'transportistas.html', titulo: 'Acceso de transportistas' },
        { url: 'gestion-en-linea.html', titulo: 'Gestión en línea de stocks' },
      ],
    },
    {
      titulo: 'Empresa',
      enlaces: [
        { url: 'empresa.html', titulo: 'Quiénes somos' },
        { url: 'equipo.html', titulo: 'Equipo y contactos' },
        { url: 'junta-general.html', titulo: 'Junta General de accionistas' },
        { url: 'presupuesto.html', titulo: 'Solicitar presupuesto' },
        { url: 'contacto.html', titulo: 'Cómo llegar' },
      ],
    },
  ],
  legal: [
    { url: 'aviso-legal.html', titulo: 'Aviso legal' },
    { url: 'politica-de-privacidad.html', titulo: 'Política de privacidad' },
    { url: 'politica-de-cookies.html', titulo: 'Política de cookies' },
    { url: 'assets/docs/politica-de-calidad.pdf', titulo: 'Política de calidad (PDF)', externo: true },
  ],
};

module.exports = { SITE, NAV, FOOT };
