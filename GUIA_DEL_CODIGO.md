# Guía del código — 3 ITSI WEBSITE

Este documento explica cómo se organiza el sitio y dónde modificar cada parte desde Visual Studio Code. El proyecto está hecho con HTML y CSS, con JavaScript para el menú, las partículas animadas y la aparición suave de secciones.

## Archivos y carpetas

- `index.html`: página principal, navegación, descripción de ITSI, lista de módulos, programas y proyecto final.
- `style.css`: colores, tipografía, tamaños, tarjetas, menú y adaptación a móvil.
- `script.js`: controla el menú y las animaciones de aparición al desplazarse.
- `imagenes/`: contiene el logo y las fotografías de portada y de las tarjetas de los módulos 1 al 8.
- `modulos/`: contiene una página HTML independiente para cada uno de los ocho módulos.

## 1. Página principal: `index.html`

El documento comienza con `<!DOCTYPE html>` y `<html lang="es">`, que indican que se usa HTML moderno y que el idioma del contenido es español. Dentro de `<head>` están el título de la pestaña, la descripción del sitio y la conexión con `style.css`.

El `<header>` contiene la identidad de la institución y el botón del menú. El botón usa `aria-expanded` para informar si el menú está abierto y `aria-controls` para identificar el panel que abre. Los enlaces del menú apuntan a secciones de la página usando identificadores, por ejemplo `href="#modulos"` lleva al elemento que tiene `id="modulos"`.

Dentro de `<main>` se encuentran las secciones principales:

1. `.portada`: presenta el nombre y propósito del sitio junto con una foto real de una práctica del grupo.
2. `.resumen`: muestra la cantidad de módulos, horas y semanas.
3. `#especialidad`: explica qué significa ITSI.
4. `#modulos`: enlaza cada tarjeta con su página correspondiente dentro de `modulos/`.
5. `#programas`: agrupa herramientas por área y enlaza sus sitios oficiales.
6. `#proyecto`: describe la posibilidad de que cada equipo proponga un proyecto relacionado con lo aprendido.

Los enlaces de las tarjetas se mantienen en la misma pestaña. Por ejemplo, `href="modulos/modulo-1.html"` abre la página local del primer módulo.

## 2. Apariencia: `style.css`

Al principio del archivo está `:root`, donde se guardan los colores principales como variables. La paleta toma como referencia el blanco y el violeta/índigo de la página de consulta de notas:

- `--morado` y `--morado-oscuro`: botones, enlaces y detalles importantes.
- `--lila` y `--lila-medio`: fondos suaves para destacar algunas secciones.
- `--tinta`: títulos y texto principal.
- `--texto-secundario`: descripciones y texto de apoyo.
- `--fondo`, `--blanco` y `--borde`: superficies y separaciones.

Para cambiar toda la paleta rápidamente, edita esos valores en `:root`:

| Variable | Valor actual | Uso |
| --- | --- | --- |
| `--morado` | `#6036e8` | Botones y acentos principales |
| `--morado-oscuro` | `#3d20ac` | Contraste para títulos sobre tarjetas claras |
| `--magenta` | `#df2ca8` | Segundo acento para variar tarjetas |
| `--azul-vivo` | `#348fff` | Tercer acento para detalles |
| `--lila` | `#2b2349` | Paneles oscuros destacados |
| `--fondo` | `#17132b` | Fondo general oscuro |
| `--tinta` | `#f6f2ff` | Texto principal sobre el fondo |
| `--texto-secundario` | `#c5bddb` | Texto secundario sobre el fondo |

Las reglas que comienzan con un punto, como `.modulo`, dan estilo a las clases que aparecen en el HTML. Las reglas `:hover` describen cómo responde un elemento al pasar el puntero. Los estilos están agrupados por componente: encabezado/menú, portada, resumen, especialidad, módulos, programas, proyecto final y páginas de detalle.

El fondo oscuro usa manchas violetas suaves en `body::before` y partículas móviles en el elemento `canvas.fondo-particulas`. JavaScript mueve los puntos y dibuja líneas finas entre los que están cerca. Las partículas quedan detrás del contenido; las tarjetas claras conservan contraste con texto oscuro. El movimiento se apaga si el sistema tiene activada la opción de reducir animaciones.

Al final están las reglas `@media`. Estas reorganizan el contenido en pantallas pequeñas: las tarjetas pasan a una columna, se ajusta el encabezado y el texto se hace más compacto. La regla `prefers-reduced-motion` reduce los efectos para personas que han indicado que prefieren menos movimiento.

La referencia web no permitió cargar su interfaz completa en esta sesión. El fondo ahora usa morado oscuro con acentos violeta, magenta y azul; los paneles claros quedan reservados para lectura de tarjetas.

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

Cada archivo `modulos/modulo-N.html` comparte una estructura: encabezado con el logo, enlace para regresar, título y resumen, temas principales, una idea para practicar y videos recomendados. Para cambiar el contenido de un módulo, abre su HTML correspondiente. Los estilos compartidos vienen de `../style.css` y el logo se carga desde `../imagenes/parrologo.png` porque esas páginas están dentro de la carpeta `modulos`.

Cada tema principal está dentro de `<details>` y su título dentro de `<summary>`. Al hacer clic, el navegador despliega la explicación que está en el párrafo `<p>`. Este menú desplegable funciona directamente con HTML y también se puede abrir con teclado; no necesita JavaScript. Sus colores y espaciado se controlan con las reglas `.tema-desplegable` en `style.css`.

## Cambios comunes

- **Cambiar un título o descripción:** edita el texto dentro de la etiqueta HTML correspondiente.
- **Cambiar el color principal:** modifica `--morado` y `--morado-oscuro` en `style.css`.
- **Añadir un programa:** copia un enlace `<a>` dentro del grupo adecuado en la sección `#programas` de `index.html` y cambia el nombre y la dirección oficial.
- **Añadir un módulo:** crea otra página HTML en `modulos/` y agrega una tarjeta con su enlace dentro de `.lista-modulos`.
- **Cambiar el logo:** reemplaza el archivo de `imagenes/` conservando el nombre `parrologo.png`, o actualiza la ruta `src` en los HTML.

Guarda los cambios y vuelve a cargar `index.html` en el navegador para verlos.


### Imágenes y descargas para prácticas

Las tarjetas de los módulos 4 al 8 usan fotos guardadas en `imagenes/`, así se muestran también al abrir el sitio sin conexión. Las imágenes son de Unsplash y las páginas de origen indican su licencia de uso:

- Módulo 4, redes: [Manuel Luikenga](https://unsplash.com/photos/ethernet-cables-connected-to-the-back-of-a-network-device-y4GHs9GEFdM).
- Módulo 5, auditoría: [FlyD](https://unsplash.com/photos/black-laptop-computer-with-white-paper-P3-YKLS2VKA).
- Módulo 6, conversación: [Vitaly Gariev](https://unsplash.com/photos/students-talking-in-a-lecture-hall-during-class-9faEJgSvmjc).
- Módulo 7, microempresa: [Headway](https://unsplash.com/photos/person-gesturing-during-meeting-with-laptop-5QgIuuBxKwM).
- Módulo 8, proyecto: [Vitaly Gariev](https://unsplash.com/photos/diverse-group-of-students-gathered-around-a-laptop-8gAbl776pc0).

La sección `#programas` de `index.html` reúne las descargas oficiales de Windows Server 2025, Windows 10, VirtualBox y las herramientas de bases de datos, ERP, redes, auditoría y monitoreo. Windows Server se descarga como edición de evaluación. Windows 10 terminó su soporte el 14 de octubre de 2025; para prácticas, úsalo únicamente en una máquina virtual aislada.
