/*
 * data.js — el contenido compartido entre páginas.
 *
 * Todo lo que hay aquí está copiado del dominio original o de los PDF que ese
 * dominio publica. Las listas técnicas conservan las cifras con sus unidades y
 * sus decimales tal y como los escribe la empresa.
 *
 * Los textos legales (aviso legal, privacidad, cookies), las cláusulas
 * informativas de los formularios y la convocatoria de Junta General son
 * literales: no se reescriben, no se resumen y no se «mejoran».
 */

'use strict';

/* ------------------------------------------------------------------ *
 * Cifras de la instalación. Origen: Index.html, Servicios.html y
 * Equipamiento.html del sitio original.
 * ------------------------------------------------------------------ */

const CIFRAS_CLAVE = [
  { valor: '8.943', unidad: 'palés', rotulo: 'Capacidad en congelación' },
  { valor: '−22', unidad: '°C', rotulo: 'Régimen de la cámara' },
  { valor: '3.388', unidad: 'm²', rotulo: 'Superficie de cámara' },
  { valor: '15', unidad: 'm', rotulo: 'Altura libre' },
];

const FICHA_INSTALACION = [
  {
    grupo: 'Cámara de congelación',
    filas: [
      ['Superficie', '3.388 m²'],
      ['Altura', '15 m'],
      ['Capacidad', '8.943 palés'],
      ['Pasillos', '26, con sistema de estanterías móviles'],
      ['Alturas de ubicación', 'Hasta 7 en las estanterías'],
      ['Régimen', 'Hasta −22 °C'],
      ['Potencia frigorífica', '640 kW'],
      ['Evaporadores', '8 unidades independientes de 89,17 kW, con 3 ventiladores × 1,40 kW'],
      ['Sondas de temperatura', '8 independientes, dispuestas en el centro de la cámara'],
      ['Atmósfera', 'Seca, para evitar la formación de hielo'],
    ],
  },
  {
    grupo: 'Antecámara y muelles',
    filas: [
      ['Muelle exterior', '816,60 m²'],
      ['Antecámara', '529,70 m² en régimen de +8 °C'],
      ['Potencia frigorífica de antecámara', '95 kW con 4 unidades de evaporadores'],
      ['Evaporador de antecámara', '27,7 kW y 3 ventiladores de 0,5 kW'],
      ['Dársenas', '11 con abrigo, puerta y plataforma electromecánica, más 1 manual con rampa fija'],
      ['Acceso a cámara', '2 puertas térmicas automatizadas'],
      ['Básculas', '2 de palés a nivel de suelo y 1 de sobremesa para bultos menores'],
      ['Tuberías', 'Calorifugadas y protegidas con acero inoxidable'],
    ],
  },
  {
    grupo: 'Sala de máquinas',
    filas: [
      ['Potencia frigorífica', '640 kW en regímenes −32 / −12 / +35 °C'],
      ['Refrigerante', 'R-717, NH₃ (1.514 kg de amoníaco)'],
      ['Compresores de tornillo', '2 unidades (−32 / +35 °C) de 165 kW y 344 kW de potencia frigorífica'],
      ['Compresor alternativo', '1 unidad (−12 / +35 °C) de 27,7 kW y 103,5 kW de potencia frigorífica'],
      ['Intercambiador térmico', 'De placas, 10,9 dm³ a 16 bares'],
      ['Circuito de glicol', 'Enfriado a −12 °C, depósito de casi 3.900 litros'],
      ['Centro de transformación', '1.000 kVA en exclusiva'],
    ],
  },
  {
    grupo: 'Seguridad y oficinas',
    filas: [
      ['Videovigilancia', '32 cámaras digitales'],
      ['Intrusión', 'Conectada a Central de Alarmas, coordinada con el Servicio de Seguridad de Mercamadrid'],
      ['Incendios', 'Sistema digital avanzado conectado a Central de Alarmas 24 horas'],
      ['Oficinas en alquiler', '800 m² en 2 plantas, desde 40 hasta 120 m²'],
      ['Zonas comunes', 'Aseos, ascensor y sala de juntas'],
    ],
  },
];

/* ------------------------------------------------------------------ *
 * Servicios. Origen: la lista de Servicios.html.
 * ------------------------------------------------------------------ */

const SERVICIOS = [
  {
    titulo: 'Almacenamiento en congelación',
    literal: 'Almacenamiento en régimen de congelación (hasta − 22º C.)',
    detalle: 'Una única cámara de 3.388 m² y 15 m de altura, con 640 kW de potencia frigorífica y ocho sondas independientes que registran la temperatura desde el centro del recinto.',
    enlace: { url: 'camara-frigorifica.html', texto: 'Ver la cámara' },
  },
  {
    titulo: 'Carga y descarga sobre palé homologado',
    literal: 'Carga y descarga de mercancía sobre palets de madera (homologados) AME y EUR.',
    detalle: 'Doce dársenas, once de ellas con abrigo y plataforma electromecánica que se gradúa en altura y se acerca al vehículo para que la cadena de frío no se rompa en el trasvase.',
    enlace: { url: 'muelles.html', texto: 'Ver los muelles' },
  },
  {
    titulo: 'Crossdocking',
    literal: 'Crossdocking.',
    detalle: 'Mercancía que entra y sale sin pasar por ubicación, con la antecámara climatizada a +8 °C como zona de tránsito.',
  },
  {
    titulo: 'Gestión de almacén por radiofrecuencia',
    literal: 'Gestión de almacén por radiofrecuencia.',
    detalle: 'Sistema de Gestión de Almacén con terminales de radiofrecuencia: cada palé recepcionado, ubicado y preparado queda registrado en el momento en que se mueve.',
    enlace: { url: 'trazabilidad.html', texto: 'Cómo funciona' },
  },
  {
    titulo: 'Control de trazabilidad del producto',
    literal: 'Control de trazabilidad del producto.',
    detalle: 'El SGA garantiza la trazabilidad y el cumplimiento de las normas establecidas en el Reglamento 178/2002 del Parlamento y el Consejo Europeo.',
    enlace: { url: 'trazabilidad.html', texto: 'Cómo funciona' },
  },
  {
    titulo: 'Datos electrónicos y EAN 128',
    literal: 'Sistema de captura y emisión de datos en formato electrónico y gestión de EAN 128.',
    detalle: 'Captura y emisión de datos en formato electrónico, con lectura y generación de etiqueta logística EAN 128.',
  },
  {
    titulo: 'Gestión de stocks en línea',
    literal: 'Servicio de gestión online de stocks a través del sitio web.',
    detalle: 'Desde su propia empresa o cualquier dispositivo con acceso a internet, el cliente consulta stocks detallados y resumidos y realiza pedidos.',
    enlace: { url: 'gestion-en-linea.html', texto: 'Ver el servicio' },
  },
  {
    titulo: 'Oficinas en alquiler',
    literal: 'Oficinas de alquiler desde 40 hasta 120 metros cuadrados.',
    detalle: '800 m² repartidos en dos plantas, con climatización central y zonas comunes a disposición de los clientes.',
    enlace: { url: 'oficinas.html', texto: 'Ver las oficinas' },
  },
];

/* ------------------------------------------------------------------ *
 * Cámara, muelles, seguridad, oficinas, gestión en línea.
 * Origen: Servicios.html, literal salvo el orden.
 * ------------------------------------------------------------------ */

const CAMARA = [
  'Superficie de 3.388 metros cuadrados.',
  'Altura de 15 metros.',
  'Capacidad para 8.943 palets.',
  '26 pasillos con sistema de estanterías móviles.',
  'Hasta 7 alturas de ubicaciones en las estanterías.',
  'Cámara de almacenamiento en régimen de hasta −22º C, con 640 Kw de potencia frigorífica.',
  '8 unidades independientes de evaporadores de 89,17 Kw y 3 ventiladores x 1,40 Kw.',
  'Control y registros termográficos mediante 8 sondas de temperatura independientes dispuestas en el centro de la cámara.',
  'Atmósfera seca, para evitar formación de hielo.',
];

const MUELLES = [
  'Exterior de muelle de carga/descarga con una superficie de 816,60 metros cuadrados.',
  'Antecámara con una superficie de 529,70 metros cuadrados en régimen de +8º C y 95 Kw de potencia frigorífica con 4 unidades de evaporadores.',
  'Potencia frigorífica de 27,7 Kw y 3 ventiladores de 0,5 Kw.',
  'Todas las tuberías están califugadas y protegidas con acero inoxidable.',
  'Climatizado para evitar la rotura de la cadena de frío con abrigos a 11 dársenas de carga/descarga provistas de puerta y plataforma electromecánicas, de graduación de altura y acercamiento a los vehículos, mas una 12º dársena manual, provista de rampa fija al exterior, para accesos con vehículos.',
  'Acceso directo a Cámara por 2 amplias puertas térmicas automatizadas para evitar pérdida de la carga frigorífica.',
  'Oficina de Recepción y Expedición de Mercancías y atención a chóferes.',
  'Dos básculas de pesaje de palets a nivel del suelo y 1 báscula de sobremesa para bultos menores.',
  'Máquina automática de retractilado con film.',
  'Máquina volteadora de palets.',
];

const SALA_MAQUINAS = [
  'Dotada con una potencia frigorífica de 640 Kw (regímenes −32º/−12º/+35º C) con refrigerante R-717, NH3 (1.514 kg. amoníaco).',
  'Dos compresores de tornillo (−32º/+35º C) de 165 Kw y potencia frigorífica de 344 Kw.',
  'Un compresor alternativo (−12º/+35º C) de 27,7 Kw y potencia frigorífica de 103,5 Kw.',
  'Cuadro de Gestión y Control compuesto y protegido eléctricamente, que administra un perfecto funcionamiento de la producción de frío para los puntos de consumo.',
];

const PARQUE_MOVIL = [
  'Máquinas Trilaterales Combi LINDE EK 15 cabinadas con calefacción que nos posibilita gran velocidad en la estiba de palets y está capacitada para ubicar a una altura de más de 14 mts.',
  'Máquinas retráctiles TRIPLE MASTIL TOYOTA RRE200CC Mod. cabinadas con calefacción y gran maniobrabilidad, para ubicaciones en altura de hasta 12,70mts.',
  'Transpaletas eléctricas TOYOTA BT LPE200 que nos permiten una rápida carga/descarga de mercancías y traslados al interior de la cámara.',
  'Máquina TOYOTA contrapesada «toro» con triple mástil, capaz de manejar 1.600 kgs.',
];

/* ------------------------------------------------------------------ *
 * Certificaciones. Los rótulos cortos son los que la empresa imprime bajo
 * cada sello en su página de inicio. Los datos de registro salen de los
 * propios PDF publicados en el dominio.
 * ------------------------------------------------------------------ */

const CERTIFICACIONES = [
  {
    id: 'ifs',
    nombre: 'IFS Logistics V3',
    rotuloOriginal: 'I. F. S. Logistics Version 3',
    sello: 'sello-ifs-logistics.jpg',
    alt: 'Sello de certificación IFS Logistics de AENOR',
    pdf: 'assets/docs/certificado-ifs-logistics.pdf',
    emisor: 'AENOR',
    datos: [
      ['Certificado', 'IFSLOG-2022/0003'],
      ['COID', '80521'],
      ['Norma', 'IFS Logistics V3, diciembre de 2023'],
      ['Alcance', 'Almacenamiento de productos alimentarios a temperatura de congelación controlada'],
      ['Nivel alcanzado', 'Superior (97,17 %)'],
      ['Registros sanitarios', '10.00016066/M · 40.16267/M'],
      ['GLN', '8438002242005'],
    ],
  },
  {
    id: 'sae',
    nombre: 'Sistema de Autocontrol Específico',
    rotuloOriginal: 'CERTICALIDAD: PR-EXP REV.4 CCVE (01/07/2023)',
    sello: 'sello-certicalidad-sae.jpg',
    alt: 'Sello de certificación de Sistema de Autocontrol Específico de Certicalidad',
    pdf: 'assets/docs/certificado-sae.pdf',
    emisor: 'Certicalidad, S. L.',
    datos: [
      ['Certificado', 'EX128053051 Rev. 2'],
      ['Protocolo', 'PR-EXP REV.4 CCVE (01/07/2023)'],
      ['Marco', 'RD 993/2014, certificación veterinaria oficial para la exportación'],
      ['Categoría de producto', 'Carne: canales, carnes frescas, despojos y preparados de carne'],
      ['Nivel de SAE', '3'],
      ['Registro sanitario', '40.16267/M'],
    ],
  },
  {
    id: 'haccp',
    nombre: 'HACCP',
    rotuloOriginal: 'RP-B13 y CXC 1-1969, Rev 6 2023.',
    sello: 'sello-haccp.jpg',
    alt: 'Sello de certificación del sistema HACCP de análisis de peligros y puntos de control críticos',
    pdf: 'assets/docs/certificado-haccp.pdf',
    emisor: null,
    datos: [['Referencia normativa', 'RP-B13 y CXC 1-1969, Rev. 6 2023']],
  },
];

/* ------------------------------------------------------------------ *
 * Equipo. Origen: RRHH.html. Extensiones y correos literales.
 * ------------------------------------------------------------------ */

const EQUIPO = [
  { nombre: 'Soraya Picazo López', cargo: 'Directora Financiera', telefono: '91 507 9255', ext: '202', correo: 'soraya.picazo|vanhessen.com' },
  { nombre: 'Jorge Morejón Guillama', cargo: 'Jefe de Planta y Director de Sistemas', telefono: '91 507 9255', ext: '210', correo: 'jorge.morejon|vanhessen.com' },
  { nombre: 'David Fernández Valhermoso', cargo: 'Mantenimiento', telefono: '91 507 9255', ext: '213', correo: 'mantenimiento.afriba|vanhessen.com' },
  { nombre: 'Fernando Cabasés Pérez', cargo: 'Comercial', telefono: '91 507 9255', ext: '215', correo: 'fernando.cabases|vanhessen.com' },
  { nombre: 'Pablo A. Barrera Mustelier', cargo: 'Técnico Informática', telefono: '91 507 9255', ext: '214', correo: 'pablo.barrera|vanhessen.com' },
];

/* ------------------------------------------------------------------ *
 * Normas de acceso de transportistas. Literales del PDF
 * «Instrucciones para el control de acceso de transportistas a la zona de
 * antecámara y muelles en AFRIBA», publicado por el propio dominio.
 * ------------------------------------------------------------------ */

const ACCESO_TRANSPORTISTAS = [
  {
    n: '1',
    texto: 'Todas las gestiones documentales relacionadas con recepciones y expediciones se harán a través de la ventanilla de control, en la fachada principal de AFRIBA, entre los muelles 11 y 12.',
  },
  {
    n: '2',
    texto: 'Por razones de seguridad, el acceso a la zona de antecámara y muelles se reduce a las imprescindibles acciones operativas o de control de calidad, previamente establecidas. Siempre se necesitará la autorización y supervisión de los responsables del almacén para acceder a las instalaciones.',
  },
  {
    n: '3',
    texto: 'El Protocolo de Control de acceso a la instalación requiere cumplir una serie de requisitos y la aceptación de las normas establecidas, según los procedimientos de Food Defense e IFS Logistics implantados.',
  },
  {
    n: '4',
    texto: 'El personal ajeno a AFRIBA, antes de acceder a la instalación, deberá:',
    subapartados: [
      'Leer la Instrucción Técnica con Información para Visitas y Subcontratas IT-PRQ03-01.',
      'Firmar el registro de Control de Visitas.',
      'Los transportistas, para acceder a la instalación, usarán un chaleco reflectante y sólo se desplazarán siguiendo la línea naranja en el suelo, frente a los muelles de carga o descarga.',
      'Todas las visitas deberán portar de forma visible y colgada al cuello la identificación como VISITA AUTORIZADA. Esta autorización deberá ser devuelta al salir de la zona de antecámara/muelles.',
      'Todos los visitantes deberán seguir las instrucciones del empleado de AFRIBA que le acompañará o supervisará mientras permanezca dentro del recinto.',
    ],
  },
];

const HORARIO_ALMACEN_PDF = [
  'Horario de operaciones del almacén: de lunes a viernes de 07:00 a 18:00 horas.',
  'Solo se gestionarán las operaciones previstas en el día, de los vehículos que accedan a la oficina de control después de las 07:00 y antes de las 17:30, de lunes a viernes de días laborables, no festivos.',
  'Los festivos locales y regionales tendrán un horario especial reducido, con operaciones planificadas previamente con los clientes.',
  'Los fines de semana y festivos nacionales, la instalación permanecerá cerrada.',
];

/* ------------------------------------------------------------------ *
 * Cláusulas informativas de protección de datos. LITERALES.
 * ------------------------------------------------------------------ */

const CLAUSULA_PRESUPUESTO =
  'Responsable: ALMACENES FRIGORIFICOS IBARZ, S.A ; Finalidad: Atender su solicitud y enviarle comunicaciones promocionales; Legitimación: Ejecución de un contrato, consentimiento del interesado, interés legítimo del Responsable; Destinatarios: Están previstas transferencias a terceros países; Derechos: Tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos, indicados en la información adicional, que puede ejercer dirigiéndose a lopd@vanhessen.com o C/ EJE 3-18, 8 PLATAFORMA BAJA MERCAMADRID - 28053 - MADRID - ESPAÑA; Procedencia: El propio interesado; Información adicional: www.afriba.com.';

const CLAUSULA_AGENDA =
  'Almacenes Frigoríficos Ibarz (AFRIBA) le informa que su dirección de correo electrónico, así como el resto de los datos de carácter personal que nos ha aportado, serán objeto de tratamiento automatizado en nuestros ficheros, con la finalidad de gestionar la agenda de contactos de nuestra empresa para el envío de comunicaciones profesionales por vía electrónica. Vd. podrá en cualquier momento ejercer el derecho de acceso, rectificación, cancelación y oposición en los términos establecidos en la Ley orgánica 3/2018 y en RD 1720/2007 y Reglamento (UE) 2016/679 del Parlamento Europeo. Para ello debe dirigirse al responsable de los ficheros de Almacenes Frigoríficos Ibarz (AFRIBA) en Ctra. Villaverde / Vallecas km. 3.800, C.P. 28053 en Madrid.';

const CLAUSULA_AREA_CLIENTES = [
  'Le informamos que los datos obtenidos mediante este formulario han sido incorporados en un fichero del cual es responsable Almacenes Frigoríficos Ibarz, S. A., con la finalidad de atender sus consultas, gestionar sus pedidos y enviarle información que pudiera ser de su interés.',
  'Almacenes Frigoríficos Ibarz, S. A. se compromete a usar los datos recogidos mediante este formulario únicamente para la finalidad anteriormente mencionada.',
  'El interesado declara tener conocimiento del destino y uso de los datos recogidos mediante la lectura de la presente cláusula.',
  'El acceso al área de clientes mediante el usuario y contraseña implica la aceptación de la cláusula expuesta.',
  'Si desea ejercer los derechos de acceso, rectificación, cancelación u oposición en los términos establecidos en la Ley Orgánica 15/1999, puede hacerlo a la siguiente dirección: Almacenes Frigoríficos Ibarz, S. A. Ctra. Villaverde a Vallecas, km 3,800. Mercamadrid. 28053 Madrid.',
];

/* ------------------------------------------------------------------ *
 * Condiciones del presupuesto. Literales del recuadro amarillo del
 * formulario original.
 * ------------------------------------------------------------------ */

const CONDICIONES_PRESUPUESTO = [
  'Almacenamiento en congelación (hasta − 20º C.)',
  'Gestión de palets completos (no se prepara picking).',
  'Bases de palets: de madera y homologados.',
];

/* ------------------------------------------------------------------ *
 * Convocatoria de Junta General. Literal de 171225.html.
 * ------------------------------------------------------------------ */

const JUNTA_GENERAL = {
  vigente: {
    id: '171225',
    fecha: '17 de diciembre de 2025',
    firmada: 'Madrid, 13 de noviembre de 2025.',
    entradilla:
      'El órgano de administración de ALMACENES FRIGORÍFICOS IBARZ, S.A. ha acordado convocar a los señores accionistas a la Junta General, que se celebrará con carácter de ordinaria, el día 17 de diciembre de 2025, a las 12:00 horas, en primera convocatoria, en el domicilio social de la compañía, Carretera de Villaverde a Vallecas Km 3,800 (Calle Eje 3-18,8 Mercamadrid), 28053 Madrid y, en su caso, de no alcanzarse el quórum necesario, en segunda convocatoria, el día siguiente, a la misma hora y lugar mencionados, con arreglo al siguiente:',
    orden: [
      'Examen y aprobación, en su caso, de las cuentas anuales y propuesta de aplicación de resultados del ejercicio 2024.',
      'Aprobación, si procede, de la gestión del órgano de administración durante el ejercicio 2024.',
      'Delegación de facultades.',
    ],
    derechos: [
      ['Derecho de información', 'Los accionistas podrán ejercer su derecho a de información a partir de la convocatoria de la Junta en los términos previstos en los artículos 197 y 520 de la Ley de Sociedades de Capital.'],
      ['Derecho de asistencia', 'Tendrán derecho de asistencia (de acuerdo con el artículo 21 de los estatutos sociales) los titulares de acciones que las tuvieran inscritas en el correspondiente registro con cinco días de antelación a la fecha prevista de la celebración de la Junta, y los titulares de acciones que acrediten mediante documento público su regular adquisición de quien en el libro registro aparezca como titular. Con dicha acreditación se entenderá solicitada a los administradores la inscripción en el libro registro.'],
      ['Derecho de representación', 'Los accionistas que no puedan asistir a la Junta podrán hacerse representar por otra persona, aunque esta no sea accionista, en los términos y con las excepciones establecidas en la Ley de Sociedades de Capital.'],
    ],
  },
  anterior: {
    id: '221124',
    fecha: '22 de noviembre de 2024',
    firmada: 'Madrid, 16 de octubre de 2024.',
    entradilla:
      'El órgano de administración de ALMACENES FRIGORÍFICOS IBARZ, S.A. ha acordado convocar a los señores accionistas a la Junta General, que se celebrará con carácter de ordinaria, el día 22 de noviembre de 2024, a las 12:00 horas, en primera convocatoria, en el domicilio social de la compañía, Carretera de Villaverde a Vallecas Km 3,800 (Calle Eje 3-18,8 Mercamadrid), 28053 Madrid y, en su caso, de no alcanzarse el quórum necesario, en segunda convocatoria, el día siguiente, a la misma hora y lugar mencionados, con arreglo al siguiente:',
    orden: [
      'Examen y aprobación, en su caso, de las cuentas anuales y propuesta de aplicación de resultados del ejercicio 2023.',
      'Aprobación, si procede, de la gestión del órgano de administración durante el ejercicio 2023.',
      'Delegación de facultades.',
    ],
  },
};

/* ------------------------------------------------------------------ *
 * Galería. Todas las fotografías son del dominio original.
 * ------------------------------------------------------------------ */

const GALERIA = [
  { src: 'edificio-afriba-entrada.jpg', alt: 'Fachada principal del edificio AFRIBA en Mercamadrid, con el isotipo del oso polar pintado sobre el testero y un camión frigorífico estacionado en los muelles', pie: 'Edificio AFRIBA, Calle Eje 3-18, 8' },
  { src: 'camara-pasillo-estanterias.jpg', alt: 'Pasillo de la cámara de congelación entre estanterías móviles cargadas de palés hasta siete alturas, con una carretilla trilateral al fondo', pie: 'Cámara de congelación · 26 pasillos' },
  { src: 'parque-movil-carretillas.jpg', alt: 'Transpaletas eléctricas y carretillas retráctiles naranjas aparcadas en fila sobre el suelo azul de la antecámara', pie: 'Parque móvil en la antecámara' },
  { src: 'equipos-radiofrecuencia.jpg', alt: 'Terminal de radiofrecuencia de mano, antena de vehículo, código de barras ampliado y lector de pistola', pie: 'Equipos de radiofrecuencia' },
  { src: 'oficinas-sala-de-juntas.jpg', alt: 'Oficina diáfana con ventanal corrido y sala de juntas con mesa alargada bajo el cuadro del isotipo de AFRIBA', pie: 'Oficinas en alquiler y sala de juntas' },
  { src: 'monitor-videovigilancia.jpg', alt: 'Monitor de videovigilancia dividido en doce imágenes de muelles, oficina de control, accesos y recepción', pie: '32 cámaras de videovigilancia' },
];

module.exports = {
  CIFRAS_CLAVE,
  FICHA_INSTALACION,
  SERVICIOS,
  CAMARA,
  MUELLES,
  SALA_MAQUINAS,
  PARQUE_MOVIL,
  CERTIFICACIONES,
  EQUIPO,
  ACCESO_TRANSPORTISTAS,
  HORARIO_ALMACEN_PDF,
  CLAUSULA_PRESUPUESTO,
  CLAUSULA_AGENDA,
  CLAUSULA_AREA_CLIENTES,
  CONDICIONES_PRESUPUESTO,
  JUNTA_GENERAL,
  GALERIA,
};
