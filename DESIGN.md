# DESIGN.md · el sistema visual de AFRIBA

Este documento describe lo que **está construido**, no lo que se pensaba
construir. Cada afirmación de aquí se puede comprobar abriendo
`assets/css/site.css` o cualquiera de las 22 páginas.

---

## 1. La idea, en una frase

**La instalación se explica sola si se dibuja como el plano que es.**

AFRIBA no vende una imagen: vende 8.943 huecos medidos, 3.388 m² de cámara,
640 kW de potencia frigorífica y ocho sondas registrando −22 °C. Todo lo que
tiene que decir son medidas. Por eso el sitio no adopta el molde del sector
—foto de nave con degradado azul y tres tarjetas de icono debajo— ni su opuesto
minimalista de tipografía enorme sobre fondo crema. Adopta la forma que ya
tienen esos datos en la vida real: **una hoja de plano**.

De ahí salen las decisiones: el fondo es papel de plano, no blanco; las tablas
se dibujan como cuadros de características, con su número de hoja; las
fotografías llevan cotas encima; los códigos y las medidas van en monoespaciada
porque en un plano las medidas van en monoespaciada; y hay un lector de
temperatura en cian sobre negro porque así es como se lee la temperatura en la
pantalla del SCADA de la sala de máquinas.

---

## 2. Color

### 2.1 Los tokens y de dónde sale cada uno

Ningún color es inventado. Todos salen de tres sitios: el logotipo original
(`Logo.jpg` y `detalle1.gif`), la hoja de estilo antigua (`EstilosAfriba.css`) o
la captura de la pantalla del SCADA (`scada.png`), las tres del sitio anterior.

#### Fondos

| Token | Valor | Origen |
|---|---|---|
| `--hielo` | `#EDF1F8` | Muestreado del halo claro del logotipo (`#E6E6F0` y `#D7DFEF`), aclarado hasta funcionar como fondo de página |
| `--hielo-2` | `#E2E8F4` | Un paso por debajo, para secciones alternas y campos de formulario |
| `--hielo-3` | `#D4DCEE` | Dos pasos, para separadores y estados de reposo |
| `--papel` | `#FFFFFF` | Blanco, reservado a las piezas que representan una hoja: cajetines, cuadros, fichas |

#### Tinta y azules

| Token | Valor | Origen |
|---|---|---|
| `--tinta` | `#00156E` | Color de los títulos y de los enlaces del menú en el CSS antiguo. Es también el azul marino dominante del logotipo |
| `--tinta-2` | `#3C4C86` | Derivado, para texto secundario sobre hielo (7,21:1) |
| `--tinta-3` | `#5A6798` | Derivado. **Solo para trazos y separadores.** No se usa nunca como color de texto |
| `--azul-marca` | `#002D9A` | Píxel dominante del triángulo del isotipo (`detalle1.gif`). Es el color de la masa construida: héroes, cabeceras de cuadro, bandas |
| `--azul-medio` | `#0024BB` | Fondo de la cabecera y color de `:hover` del menú antiguo |
| `--azul-vivo` | `#0040FA` | Destacados en línea que aparecían escritos a mano en el HTML antiguo |

#### La señal ámbar

| Token | Valor | Origen |
|---|---|---|
| `--ambar` | `#FAB500` | Botón del aviso de cookies del sitio antiguo. Es también el naranja con el que Mercamadrid pinta las líneas del suelo y los números de dársena |
| `--ambar-claro` | `#FFEA91` | Fondo de las cajas de detalle del CSS antiguo |
| `--ambar-tinta` | `#6E5800` | Tono de oro oscuro del CSS antiguo. Es el ámbar **cuando tiene que ser texto** |
| `--ambar-borde` | `#A87B00` | Creado aquí. Es el ámbar **cuando tiene que ser un borde** |

El ámbar aparece en un sitio por pantalla, nunca en dos: la acción principal, la
línea de suelo de la fotografía, el número de la hoja, la cota. Es la única
señal del sistema y funciona porque no compite con nada.

#### El lector del SCADA

| Token | Valor | Origen |
|---|---|---|
| `--lector-fondo` | `#05091A` | Negro del panel de la pantalla de la sala de máquinas |
| `--lector-cian` | `#4FE3F2` | Cian del numeral de esa pantalla |
| `--lector-ambar` | `#FFE14D` | Ámbar de los avisos de esa misma pantalla |

#### Texto y trazos

| Token | Valor | Origen |
|---|---|---|
| `--texto` | `#000622` | Color de texto del `body` en el CSS antiguo |
| `--texto-2` | `#333F63` | Derivado, para párrafos secundarios (9,12:1 sobre hielo) |
| `--borde` | `#C3CDE4` | Derivado. Separadores decorativos, los que no delimitan nada pulsable |
| `--borde-fuerte` | `#6B7AA8` | Derivado. **Todo borde que delimita un control usa este** |

### 2.2 La regla de contraste, y las dos veces que hubo que aplicarla

**Ningún color de marca se ha cambiado para que cumpla.** Cuando un color de
marca no llegaba al contraste exigido, se creó una variante de tinta para el
texto o el trazo, y el color de marca se quedó donde estaba: como fondo.

| Color | Contraste real | Qué pasó |
|---|---|---|
| `--ambar` `#FAB500` | **1,80:1** sobre blanco · **1,59:1** sobre hielo | No llega ni a 3:1. Sirve como **fondo** de botón con texto oscuro encima, y ahí funciona perfectamente. Como **borde** no valía: se creó `--ambar-borde` `#A87B00`, que da 3,82:1 sobre blanco y 3,37:1 sobre hielo, y el botón de señal lleva además `box-shadow: 0 1px 0 #8A6600` para asentarlo. Como **texto** tampoco valía: para eso está `--ambar-tinta` `#6E5800` |
| El gris azulado original de los separadores `#93A3C9` | **2,23:1** sobre hielo | No delimitaba nada de forma visible. Se oscureció hasta `--borde-fuerte` `#6B7AA8`: **4,22:1** sobre blanco, **3,73:1** sobre hielo y **3,43:1** sobre hielo-2. Todos los bordes de controles se pasaron a este token |

Un tercer caso apareció al revisar la página de error: el numeral gigante «404»
iba en `--hielo-3` y daba **1,21:1**. Como el código de error es información, no
adorno, se pasó a `--borde-fuerte`, que da **3,73:1** y sigue siendo discreto.

**Resultado medido:** recorriendo cada elemento que contiene texto y comparando
su color con el fondo que realmente tiene detrás —resolviendo transparencias y
subiendo por los ancestros hasta encontrar un fondo opaco—, en las 22 páginas a
1440 px y a 390 px: **0 fallos**. El umbral aplicado es 4,5:1 para texto normal
y 3:1 para texto grande (24 px o más, o 18,66 px en negrita).

### 2.3 Cómo se reparte el color

- **El hielo es el suelo.** Es el fondo por defecto de todo el sitio.
- **El blanco es una hoja.** Solo lo llevan las piezas que representan un
  documento: cajetines, cuadros, fichas, tarjetas.
- **El azul de marca es masa construida.** Héroes, cabeceras de cuadro, la
  banda de llamada a la acción, el pie. Bloques grandes y opacos.
- **El negro del lector es una pantalla.** Solo aparece donde se muestra una
  lectura de instrumento.
- **El ámbar es una señal.** Una por pantalla.

---

## 3. Tipografía

### 3.1 Las tres familias

| Uso | Familia | Por qué |
|---|---|---|
| Rótulos y titulares | **Jost** | El sitio antiguo componía sus títulos en Century Gothic / Gill Sans MT: geométricas, de caja alta ancha. Jost es la continuación viva de esa forma, y mantiene el aire reconocible de la marca |
| Texto y interfaz | **Archivo** | Grotesca de altura de x generosa, pensada para texto denso y para tablas. Aguanta párrafos largos de datos técnicos sin cansar |
| Códigos y medidas | **Roboto Mono** | Toda cifra que se pueda comparar va en monoespaciada: temperaturas, superficies, potencias, horarios, números de registro, coordenadas. Es lo que hace que un cuadro se lea como un cuadro |

Pilas de reserva completas, para que el sitio no cambie de forma si Google
Fonts no responde:

```css
--rotulo:       'Jost', 'Century Gothic', 'Gill Sans MT', 'Futura', system-ui, sans-serif;
--texto-fuente: 'Archivo', 'Gill Sans MT', 'Segoe UI', system-ui, -apple-system, sans-serif;
--mono:         'Roboto Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
```

Se cargan con `preconnect` a `fonts.googleapis.com` y a `fonts.gstatic.com`, y
con `display=swap`, de modo que el texto se lee desde el primer instante con la
tipografía del sistema y luego cambia.

Pesos cargados, y ninguno más: Jost 500 y 600; Archivo 400, 500, 600 y 700;
Roboto Mono 400 y 500.

### 3.2 La escala

Siete pasos fluidos, calculados para interpolar entre **360 px** y **1440 px**
de ancho de ventana. No hay saltos ni puntos de ruptura: cualquier ancho
intermedio da un tamaño intermedio.

| Paso | A 360 px | A 1440 px | Dónde se usa |
|---|---|---|---|
| `--paso-0` | 13 px | 14 px | Notas al pie, rótulos de cota, letra pequeña |
| `--paso-1` | 16 px | 17,5 px | Texto corrido |
| `--paso-2` | 18 px | 21 px | Entradillas, títulos de tarjeta |
| `--paso-3` | 21 px | 26 px | Subtítulos, cifras de cuadro |
| `--paso-4` | 25 px | 34 px | Títulos de sección menores |
| `--paso-5` | 30 px | 46 px | Títulos de sección |
| `--paso-6` | 34 px | 60 px | Titulares de página interior |
| `--paso-7` | 40 px | 80 px | Titular de portada |

### 3.3 Jerarquía

Un solo `<h1>` por página, siempre en el héroe: **comprobado en las 22**. Los
`<h2>` abren sección y van precedidos de un rótulo de hoja (`HOJA 20 ·
SERVICIOS`) en monoespaciada, mayúsculas y ámbar, con una raya corta delante.
Ese rótulo es lo que sitúa al visitante dentro del plano.

Los títulos van con `text-wrap: balance` donde el navegador lo admite, y el
texto corrido tiene un ancho máximo de `44rem` para que la línea no pase de
unos 75 caracteres.

---

## 4. Retícula y espacio

**Contenedor:** `78rem` de ancho máximo (1.248 px), con márgenes laterales
fluidos.

**Ancho de lectura:** `44rem` para los bloques de texto largo.

**Escala de espacio,** en potencias reconocibles para que nada se decida a ojo:

```
--e1 0,25rem   --e2 0,5rem   --e3 0,75rem   --e4 1rem    --e5 1,5rem
--e6 2rem      --e7 3rem     --e8 4rem      --e9 6rem
--seccion: clamp(3rem, 1.5rem + 6vw, 6.5rem)
```

**El fondo de plano.** La portada y las secciones frías llevan una retícula
dibujada como SVG incrustado en un `data:` URI: baldosa de 240 px, celdas de
48 px y una línea de eje más marcada. Está en el fondo, casi al límite de lo
visible; es lo que hace que la página se lea como papel cuadriculado y no como
un fondo plano.

**Puntos de ruptura.** Solo tres, y cada uno responde a algo que deja de caber:

| Ancho | Qué cambia |
|---|---|
| `30rem` (480 px) | Las filas de horario y las del tablón dejan de ir en dos columnas y se apilan: el valor completo no cabía al lado del rótulo |
| `62rem` (992 px) | Aparece el mega-menú de escritorio y desaparece el botón del cajón |
| `78rem` (1.248 px) | Aparece el acceso al área de clientes en la cabecera. Por debajo no cabe junto a las cinco familias, y vive en el cajón y en la página de operativa |

---

## 5. Formas y sombras

**Radio:** `3px` en casi todo, `6px` en las piezas mayores. Un plano
prácticamente no redondea: lo justo para que la esquina no corte.

**Trazo:** `1px`. El sitio se sostiene sobre líneas, no sobre sombras. Los
marcos de figura y los cuadros llevan borde de tinta; los separadores internos
van discontinuos, como en un despiece.

**Sombras:** tres niveles, todas teñidas de azul marino en vez de negro, para
que no ensucien el hielo.

```css
--sombra-1: 0 1px 2px rgba(0,21,110,.08), 0 2px 8px rgba(0,21,110,.06);
--sombra-2: 0 2px 4px rgba(0,21,110,.10), 0 12px 28px rgba(0,21,110,.12);
--sombra-3: 0 4px 8px rgba(0,21,110,.14), 0 24px 56px rgba(0,21,110,.18);
```

Se usan poco y solo donde algo flota de verdad: el mega-menú, el cajón, el
visor de imágenes y el aviso de cookies.

---

## 6. Los componentes, uno a uno

### La regla de coordenadas
Franja superior en azul marino, con las coordenadas reales de la instalación a
la izquierda y su situación a la derecha, y entre ambas una fila de marcas de
medición dibujada en SVG. Es la primera línea del sitio y es literalmente la
regla graduada de un plano.

### La cabecera
Marca a la izquierda —isotipo de triángulo con copo de seis brazos, redibujado
en SVG a partir de la geometría medida del `detalle1.gif` original—, mega-menú
en el centro, acceso al área de clientes y botón de presupuesto a la derecha.
Cada familia del menú abre un panel con dos columnas: los enlaces con una frase
de descripción y una foto de apoyo con el resumen de la familia.

Accesible: `aria-expanded` y `aria-controls` en cada botón, solo un panel
abierto a la vez, `Escape` cierra, y la página actual se marca con
`aria-current="page"`.

### El cajón del móvil
Panel lateral con las cinco familias plegadas en acordeón. La familia que
contiene la página actual se abre sola. Atrapa el foco mientras está abierto,
se cierra con `Escape` o con el aspa, bloquea el desplazamiento del cuerpo y
devuelve el foco al botón que lo abrió. Si ese botón ya no se ve —porque se ha
ensanchado la ventana hasta el menú de escritorio—, el foco va al contenido en
lugar de perderse.

### El cajetín
La pieza más característica. Es el recuadro rotulado de la esquina de un plano:
cabecera azul marino con el código de referencia y el título en versales, y
debajo una lista de definición con las filas de datos, separadas por línea
discontinua. Se usa para el cuadro de características de la portada, para los
horarios y para cualquier ficha resumida.

### El lector
Panel negro con la lectura en cian y la unidad en un cuerpo menor: exactamente
como se ve una temperatura en la pantalla del SCADA de la sala de máquinas. Se
usa para las cifras clave (capacidad, régimen, superficie, potencia) y para la
temperatura media de cámara en la portada.

### El cuadro
La tabla, dibujada como un cuadro de características: título en banda azul,
cabecera de columnas en versales monoespaciadas, filas alternas sobre hielo, y
las cifras con `font-variant-numeric: tabular-nums` para que las columnas de
números se alineen.

Cada cuadro tiene **su propio desplazamiento horizontal**, en un contenedor con
`overflow-x: auto`, `tabindex="0"` y `role="region"` con su etiqueta, de modo
que una tabla ancha nunca empuja la página y se puede recorrer con el teclado.
Las cabeceras llevan siempre `<th scope>`.

### La cota
Rótulo de medida sobre una fotografía, con su línea de referencia en ámbar:
`15 m` junto a la línea vertical de la altura de cámara, `26 pasillos` sobre la
línea de suelo, `7 alturas` señalando la estantería. Es lo que convierte una
foto de nave en una foto documentada. Los rótulos son fichas de fondo sólido,
nunca texto suelto sobre la imagen, para que el contraste sea medible.

### La figura
Fotografía con marco de plano: borde de tinta, relleno blanco de 6 px y pie con
su código (`V-01`) en un recuadro azul. La imagen no se presenta: se cataloga.

**Ninguna fotografía se amplía más del doble de su resolución real.** Seis de
las del sitio anterior solo existen a 192×118 px; a todo ancho se veían
deshechas. Ahora salen pequeñas y centradas, con su pie debajo, y el resultado
se lee como una lámina de archivo en vez de como una foto reventada.

### El despiece
Lista numerada donde el número va en monoespaciada y en ámbar, separado del
texto, como la leyenda de un plano de piezas.

### El tablón
Panel oscuro con las filas de horario, rótulo a la izquierda y valor en cian a
la derecha. Por debajo de 480 px la fila se apila.

### El botón
Tres variantes: **señal** (fondo ámbar, texto casi negro, filo `--ambar-borde`
y una sombra inferior sólida que lo asienta), **contorno** (fondo transparente
con borde de tinta) y **sólido** (fondo azul de marca, texto blanco). Altura
mínima de 44 px en los tres casos.

### El enlace a PDF
Ficha con un cuadrado ámbar con el icono de documento a la izquierda, el título
y una nota con el peso, y el icono de descarga a la derecha.

### La galería y el visor
Rejilla de fotografías donde **cada una es un enlace real al archivo de
imagen**: sin JavaScript, pulsar abre la fotografía. Con JavaScript, abre un
visor a pantalla completa que atrapa el foco, se recorre con los botones o con
las flechas del teclado, se cierra con `Escape` y devuelve el foco a la
fotografía de la que se partió. La imagen y su pie los crea el guion al abrir,
para que la página nunca contenga una `<img>` vacía.

### La barra inferior del móvil
Fija, con tres acciones: **Muelles** (llamada directa), **Cómo llegar** y
**Presupuesto**, esta última en ámbar. Respeta `env(safe-area-inset-bottom)`
para las pantallas con muesca.

### El formulario
Cuatro bloques numerados, cada uno con su título. Campos con etiqueta visible,
obligatorios marcados con asterisco, error por campo enlazado con
`aria-describedby`, `aria-invalid` en el campo y un aviso general al pie. Las
casillas son etiquetas completas de 44 px de alto, pulsables enteras. Lleva una
trampa antispam oculta por recorte —nunca desplazada fuera de la página, para
que no altere jamás el ancho del documento— y dos salidas: el CGI original y un
botón que compone un correo con todo lo escrito.

---

## 7. Movimiento

**Un solo gesto en todo el sitio.** Las piezas del plano entran desde abajo
—18 px de desplazamiento y opacidad de 0 a 1— cuando aparecen en pantalla, con
620 ms y una curva de salida suave. Las cotas se dibujan 320 ms después de la
fotografía que las contiene, para que se lean como una anotación posterior.

Nada más se mueve. No hay carruseles automáticos, ni contadores que suben, ni
paralaje.

**Condiciones:**

- Solo se activa si hay JavaScript: la clase `js` la pone un guion incrustado
  en el `<head>`. Sin JavaScript, todo se ve desde el primer instante.
- Se usa `IntersectionObserver`. Si el navegador no lo tiene, todo se muestra
  de entrada.
- Hay una red de seguridad de 4 segundos: si algo no llegó a activarse —pestaña
  en segundo plano, navegador antiguo—, se muestra igual.
- `prefers-reduced-motion: reduce` desactiva por completo la entrada y las
  transiciones. No es una versión reducida: es sin animación.

**Transición de interfaz:** `180ms cubic-bezier(0.22, 0.61, 0.36, 1)`, la misma
en todos los estados de foco, de `hover` y de apertura.

---

## 8. Accesibilidad

No es una lista de intenciones. Esto es lo que se ha medido:

| Regla | Estado |
|---|---|
| Contraste AA en todo texto | **0 fallos** en 22 páginas × 2 anchos, midiendo contra el fondo real |
| Un solo `<h1>` por página | **22 de 22**, verificado por `build.js` |
| Enlace de salto al contenido | En todas las páginas, visible al recibir el foco |
| Navegación completa con teclado | Verificada en mega-menú, cajón, visor y formulario |
| Foco visible | `:focus-visible` con doble anillo, ámbar sobre azul y azul sobre claro |
| `aria-expanded` / `aria-controls` | En los 5 botones del mega-menú y en los 5 del cajón |
| `aria-current="page"` | En el menú, en el cajón y en las migas |
| Foco atrapado | En el cajón y en el visor, con retorno al elemento de origen |
| `Escape` cierra | Mega-menú, cajón y visor |
| Objetivos táctiles de 44 px | **0 insuficientes** en las 22 páginas a 375 px |
| Textos alternativos reales | Cada fotografía describe lo que se ve, no repite el título |
| `prefers-reduced-motion` | Respetado: sin entrada y sin transiciones |
| Tablas | `<th scope>` siempre, `<caption>`, y desplazamiento horizontal propio con `role="region"` y `tabindex="0"` |
| Sin desbordamiento horizontal | **0** en 132 comprobaciones (22 páginas × 6 anchos) |

---

## 9. Lo que este sistema no hace

Escrito aquí para que no se cuele más adelante por inercia:

- **No hay tres tarjetas con icono** repetidas en cada página. Cada sección
  tiene la forma que le pide su contenido: un cuadro si son datos, un despiece
  si son piezas, un lector si es una lectura.
- **No hay fotografías de banco de imágenes.** Todas las fotos son de la
  instalación, tomadas del sitio anterior.
- **No hay degradados de moda** ni cristal esmerilado decorativo.
- **No hay iconos de librería.** Los 17 son propios, sobre retícula de 24×24 y
  trazo de 1,5.
- **No hay lorem ipsum ni secciones «por completar».** Lo que no había, no
  está: se ha anotado en `PENDIENTE.md`.
