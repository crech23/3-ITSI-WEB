# Guía del código — 3 ITSI WEBSITE

Este documento explica cómo se organiza el sitio y dónde modificar cada parte desde Visual Studio Code. El proyecto está hecho con HTML y CSS, con JavaScript para el menú, las partículas animadas y la aparición suave de secciones.

## Archivos y carpetas

- `index.html`: página principal, navegación, descripción de ITSI, lista de módulos, programas y proyecto final.
- `style.css`: colores, tipografía, tamaños, tarjetas, menú y adaptación a móvil.
- `script.js`: controla el menú y las animaciones de aparición al desplazarse.
- `imagenes/`: contiene el escudo, fotografías aportadas por el grupo y recursos visuales de las tarjetas de los módulos.
- `modulos/`: contiene una página HTML independiente para cada uno de los ocho módulos.

## 1. Página principal: `index.html`

El documento comienza con `<!DOCTYPE html>` y `<html lang="es">`, que indican que se usa HTML moderno y que el idioma del contenido es español. Dentro de `<head>` están el título de la pestaña, la descripción del sitio y la conexión con `style.css`.

El `<header>` contiene la identidad de la institución y el botón del menú. El botón usa `aria-expanded` para informar si el menú está abierto y `aria-controls` para identificar el panel que abre. Los enlaces del menú apuntan a secciones de la página usando identificadores, por ejemplo `href="#modulos"` lleva al elemento que tiene `id="modulos"`.

Los metadatos `og:*` preparan el título, descripción e imagen que se muestran al compartir el enlace. El favicon usa el mismo escudo institucional.

Dentro de `<main>` se encuentran las secciones principales:

1. `.portada`: presenta el nombre y propósito del sitio junto con una foto real de una práctica del grupo.
2. `.resumen`: muestra ocho módulos, 1,200 horas totales (1,170 de módulos y 30 de orientación) y 40 semanas.
3. `#especialidad`: explica qué significa ITSI.
4. `#modulos`: enlaza cada tarjeta con su página correspondiente dentro de `modulos/`; también indica horas y semanas por módulo.
5. `#programas`: agrupa herramientas por área y enlaza sus sitios oficiales.
6. `#proyecto`: describe la posibilidad de que cada equipo proponga un proyecto relacionado con lo aprendido.

Los enlaces de las tarjetas se mantienen en la misma pestaña. Por ejemplo, `href="modulos/modulo-1.html"` abre la página local del primer módulo.

## 2. Apariencia: `style.css`

Al principio del archivo está `:root`, donde se guardan los colores principales como variables. La paleta parte de los colores del escudo y el uniforme escolar: azul marino para dar profundidad, amarillo para destacar y naranja como acento cálido. Las tarjetas conservan fondos claros y texto oscuro para facilitar la lectura:

- `--azul` y `--azul-oscuro`: botones, enlaces y detalles importantes.
- `--panel-azul` y `--panel-borde`: fondos suaves para destacar algunas secciones.
- `--tinta`: títulos y texto principal.
- `--texto-secundario`: descripciones y texto de apoyo.
- `--fondo`, `--blanco` y `--borde`: superficies y separaciones.

Para cambiar toda la paleta rápidamente, edita esos valores en `:root`:

| Variable | Valor actual | Uso |
| --- | --- | --- |
| `--azul` | `#28628f` | Botones y acentos principales |
| `--azul-oscuro` | `#173d5d` | Fondo de portada y contraste de títulos |
| `--amarillo` | `#ffd43b` | Código de módulos y detalles destacados |
| `--naranja` | `#ee8b35` | Acentos secundarios en las tarjetas |
| `--panel-azul` | `#202d3b` | Paneles oscuros destacados |
| `--fondo` | `#111b25` | Fondo general oscuro |
| `--tinta` | `#fbf8ed` | Texto principal sobre el fondo |
| `--texto-secundario` | `#c6d2df` | Texto secundario sobre el fondo |

Las reglas que comienzan con un punto, como `.modulo`, dan estilo a las clases que aparecen en el HTML. Las reglas `:hover` describen cómo responde un elemento al pasar el puntero. Los estilos están agrupados por componente: encabezado/menú, portada, resumen, especialidad, módulos, programas, proyecto final y páginas de detalle.

El fondo oscuro usa manchas suaves en tonos azules y cálidos en `body::before` y partículas móviles en el elemento `canvas.fondo-particulas`. JavaScript mueve los puntos y dibuja líneas finas entre los que están cerca. Las partículas quedan detrás del contenido; las tarjetas claras conservan contraste con texto oscuro. El movimiento se apaga si el sistema tiene activada la opción de reducir animaciones.

Al final están las reglas `@media`. Estas reorganizan el contenido en pantallas pequeñas: las tarjetas pasan a una columna, se ajusta el encabezado y el texto se hace más compacto. La regla `prefers-reduced-motion` reduce los efectos para personas que han indicado que prefieren menos movimiento.

La referencia web no permitió cargar su interfaz completa en esta sesión. El fondo combina azul marino y carbón con acentos amarillos y naranjas del escudo escolar; las tarjetas cálidas conservan texto oscuro para mantener la lectura clara.

## 3. Menú y animaciones: `script.js`

El script localiza el contenedor `#menu-sitio`, el botón `.menu-boton` y el panel `.menu-contenido`. La función `setMenuOpen` actualiza el atributo `aria-expanded` y la propiedad `hidden`, manteniendo el estado visual y accesible sincronizado.

Cada línea de `script.js` tiene un comentario en español que explica su propósito. El menú se cierra cuando:

- se vuelve a pulsar el botón;
- se hace clic fuera del menú;
- se elige un enlace del menú;
- se presiona la tecla `Escape`.

El mismo archivo detecta cuándo una sección o panel entra en pantalla y añade la clase `visible`. CSS se encarga del desvanecido y del movimiento corto. Cada elemento se anima una vez; las tarjetas de módulos no se desvanecen, para conservar el texto sólido y legible. El efecto se omite si el navegador o el sistema indican que se deben reducir las animaciones.

El menú solo se activa en la página que contiene `#menu-sitio`, pero las animaciones también funcionan en las páginas de los módulos. Los HTML cargan el script con `defer`, para que el navegador primero lea la página.

## 4. Páginas de módulos

Cada archivo `modulos/modulo-N.html` comparte una estructura: encabezado y pie con el logo, enlace para regresar, título, código y duración del módulo, temas principales desplegables, una idea para practicar y videos relacionados. Para cambiar el contenido de un módulo, abre su HTML correspondiente. Los estilos compartidos vienen de `../style.css` y el logo se carga desde `../imagenes/parrologo.png` porque esas páginas están dentro de la carpeta `modulos`.

Cada tema principal está dentro de `<details>` y su título dentro de `<summary>`. Al hacer clic, el navegador despliega la explicación que está en el párrafo `<p>`. Este menú desplegable funciona directamente con HTML y también se puede abrir con teclado; no necesita JavaScript. Sus colores y espaciado se controlan con las reglas `.tema-desplegable` en `style.css`.

## Cambios comunes

- **Cambiar un título o descripción:** edita el texto dentro de la etiqueta HTML correspondiente.
- **Cambiar el color principal:** modifica `--azul` y `--azul-oscuro` en `style.css`.
- **Añadir un programa:** copia un enlace `<a>` dentro del grupo adecuado en la sección `#programas` de `index.html` y cambia el nombre y la dirección oficial.
- **Añadir un módulo:** crea otra página HTML en `modulos/` y agrega una tarjeta con su enlace dentro de `.lista-modulos`.
- **Cambiar el logo:** reemplaza el archivo de `imagenes/` conservando el nombre `parrologo.png`, o actualiza la ruta `src` en los HTML.

Guarda los cambios y vuelve a cargar `index.html` en el navegador para verlos.


### Imágenes y descargas para prácticas

Las imágenes de las tarjetas se guardan en `imagenes/`, así se muestran también al abrir el sitio sin conexión. La portada y las tarjetas de práctica/proyecto usan fotos compartidas por el grupo; otras imágenes son de Unsplash y sus páginas de origen indican su licencia de uso:

- Módulo 4, redes: [Manuel Luikenga](https://unsplash.com/photos/ethernet-cables-connected-to-the-back-of-a-network-device-y4GHs9GEFdM).
- Módulo 5, auditoría: [FlyD](https://unsplash.com/photos/black-laptop-computer-with-white-paper-P3-YKLS2VKA).
- Módulo 6, conversación: [Vitaly Gariev](https://unsplash.com/photos/students-talking-in-a-lecture-hall-during-class-9faEJgSvmjc).
- Módulo 7, microempresa: [Headway](https://unsplash.com/photos/person-gesturing-during-meeting-with-laptop-5QgIuuBxKwM).
- La tarjeta del módulo 8 usa una fotografía de práctica técnica compartida por el grupo, para conectar el proyecto con el trabajo real de ITSI.

La sección `#programas` de `index.html` reúne las descargas oficiales de Windows Server 2025, Windows 10, VirtualBox y las herramientas de bases de datos, ERP, redes, auditoría y monitoreo. Windows Server se descarga como edición de evaluación. Windows 10 terminó su soporte el 14 de octubre de 2025; para prácticas, úsalo únicamente en una máquina virtual aislada.

La hora por módulo se tomó del descriptor correspondiente del Plan de Estudio de tercer año. El total publicado suma 1,170 horas de los ocho módulos más 30 horas de orientación al proceso educativo.
