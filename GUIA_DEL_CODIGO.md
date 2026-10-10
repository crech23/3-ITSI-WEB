# Guía del sitio — 3 ITSI WEBSITE

Esta guía describe la versión actual del sitio y explica cómo editarla desde Visual Studio Code. El proyecto está hecho con HTML y CSS; no necesita archivos ni código JavaScript. Las explicaciones también están dentro de los archivos: los comentarios HTML comienzan con `<!--` y los comentarios CSS con `/*`.

## Archivos y carpetas

- `index.html`: portada, navegación, descripción de ITSI, tarjetas de los módulos, programas y proyecto final.
- `style.css`: colores, tipografía, distribución, menú, tarjetas, fondos animados y adaptación a distintos tamaños de pantalla.
- `imagenes/`: escudo, fotografías y recursos gráficos usados por las páginas.
- `modulos/`: una página HTML independiente para cada uno de los ocho módulos.

## La página principal (`index.html`)

El archivo empieza con `<!DOCTYPE html>` y `<html lang="es">`. Esto identifica el documento como HTML moderno e indica que su idioma es español. En `<head>` están el título, la descripción, el favicon y el enlace a `style.css`.

El `<header>` reúne el logo de la institución y el menú. El menú usa el atributo HTML `popover` y el botón `popovertarget="menu-contenido"`: el navegador abre y cierra el panel, lo cierra al hacer clic fuera, al elegir un enlace o al presionar Escape. No hace falta un archivo adicional para que funcione.

Dentro de `<main>` están las secciones principales:

1. `.portada`: nombre de la especialidad y una fotografía de una práctica.
2. `.resumen`: cantidad de módulos, horas y semanas.
3. `#especialidad`: explicación de ITSI.
4. `#modulos`: tarjetas con código, nombre, resumen y enlace a la página de cada módulo.
5. `#programas`: herramientas agrupadas por área con enlaces a sus sitios oficiales.
6. `#proyecto`: descripción del proyecto final que cada equipo puede proponer.

Los enlaces internos usan identificadores. Por ejemplo, `href="#modulos"` lleva a la sección cuyo atributo es `id="modulos"`. Los enlaces a detalle, como `modulos/modulo-1.html`, abren páginas del mismo sitio en la pestaña actual.

## Apariencia (`style.css`)

Al principio de la hoja están las variables de `:root`, que reúnen los colores y la tipografía. La paleta usa azul marino, amarillo y naranja, inspirados en el escudo y el uniforme. Las tarjetas de módulos usan fondo claro y texto oscuro para facilitar la lectura.

- `--azul` y `--azul-oscuro`: botones, enlaces y acentos.
- `--amarillo` y `--naranja`: números y detalles destacados.
- `--fondo`, `--tinta` y `--texto-secundario`: fondo general y textos.
- `--superficie` y `--borde`: tarjetas y separadores.
- `--letra`: tipografía de todo el sitio.

Para cambiar la paleta, modifica esos valores dentro de `:root`. Las reglas con punto, como `.modulo`, aplican a las clases del HTML. Las reglas `:hover` definen el aspecto al pasar el cursor y `:focus-visible` marca el elemento que se usa con teclado.

El fondo tiene manchas de color y puntos discretos hechos con gradientes CSS. Las reglas `@keyframes` desplazan esos elementos lentamente. En equipos que tienen activada la preferencia de reducir movimiento, el bloque `@media (prefers-reduced-motion: reduce)` detiene la animación.

Las reglas `@media (max-width: 720px)` y `@media (max-width: 520px)` reorganizan la página para tabletas y teléfonos: las columnas pasan a una sola, se ajustan los espacios y el encabezado se hace más compacto.

## Páginas de módulos

Cada archivo `modulos/modulo-N.html` comparte el encabezado con logo, enlace de regreso, nombre y código del módulo, duración, temas, idea de práctica y recursos relacionados. Los estilos vienen de `../style.css`; las imágenes y el escudo se cargan desde `../imagenes/` porque las páginas están dentro de `modulos/`.

Los temas se construyen con las etiquetas nativas `<details>` y `<summary>`. Al pulsar el título, el navegador muestra u oculta la explicación. También se pueden manejar con teclado.

## Cambios comunes

- **Cambiar un título o descripción:** edita el texto dentro de la etiqueta HTML correspondiente.
- **Cambiar colores o tamaños:** modifica las reglas de `style.css`.
- **Añadir un programa:** agrega un enlace `<a>` dentro del grupo adecuado de `#programas` en `index.html`; utiliza la página oficial del programa.
- **Añadir un tema a un módulo:** copia un bloque `<details class="tema-desplegable">` en la página del módulo y cambia el contenido de `<summary>` y `<p>`.
- **Cambiar el logo:** reemplaza el archivo en `imagenes/` conservando su nombre o actualiza la ruta `src` en los HTML.

## Fotografías, recursos y datos

Las imágenes están en `imagenes/`, por lo que las páginas pueden mostrarlas desde el proyecto local. Las tarjetas de módulos incluyen fotografías de prácticas del grupo y recursos visuales vinculados con cada tema.

La sección de programas enlaza a páginas oficiales de descarga de Windows Server, Windows 10 y herramientas para bases de datos, ERP, redes, auditoría y monitoreo. Windows Server se ofrece como evaluación; Windows 10 terminó su soporte el 14 de octubre de 2025, así que se recomienda usarlo únicamente en una máquina virtual aislada para prácticas.

Las horas por módulo se tomaron del plan de estudio de tercer año. El total publicado suma 1,170 horas de los ocho módulos y 30 horas de orientación al proceso educativo.

## Abrir y editar el sitio

Abre `index.html` en el navegador para recorrer el sitio. Para modificarlo, abre la carpeta completa en Visual Studio Code; conserva juntas las carpetas `imagenes` y `modulos` y los archivos `index.html` y `style.css`, porque las páginas usan esas rutas relativas.
