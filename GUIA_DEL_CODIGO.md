# Guía ordenada del sitio 3 ITSI WEBSITE

## Para qué sirve esta guía

Aquí se explica la página en el mismo orden en que aparece en pantalla, qué contiene cada parte y qué archivo debes abrir para cambiarla. El sitio usa HTML para el contenido y CSS para la presentación y los efectos visuales. No contiene archivos JavaScript.

Los comentarios están también dentro del código: en HTML se escriben entre `<!--` y `-->`; en CSS, entre `/*` y `*/`.

## 1. Archivos del proyecto

| Archivo o carpeta | Qué contiene |
| --- | --- |
| `index.html` | Página principal y enlaces a las ocho páginas de módulo. |
| `style.css` | Colores, tamaños, distribución, fondos, menú y versión adaptable para móviles. |
| `modulos/` | Ocho páginas con la información ampliada de cada módulo. |
| `imagenes/` | Logo, fotografías de prácticas e ilustraciones de las tarjetas. |

Abre la carpeta completa en Visual Studio Code. Mantén juntas estas carpetas y archivos porque las páginas usan rutas relativas para encontrar CSS e imágenes.

## 2. Página principal: `index.html`

El navegador interpreta el archivo de arriba hacia abajo. Las secciones siguientes aparecen en este orden.

### 2.1 Configuración de la página (`<head>`)

- `<!DOCTYPE html>` indica que el documento utiliza HTML moderno.
- `<html lang="es">` declara que el contenido está en español.
- La etiqueta `charset` permite mostrar correctamente letras como ñ y tildes.
- `viewport` adapta el ancho de la página a teléfonos y tabletas.
- `description`, `og:title` y otros metadatos describen la página para buscadores y al compartir el enlace.
- `rel="icon"` selecciona el escudo que aparece en la pestaña del navegador.
- `<link rel="stylesheet" ...>` conecta esta página con `style.css`. El número después de `?v=` ayuda al navegador a cargar la versión actualizada del diseño.
- `<title>` establece el texto de la pestaña.

### 2.2 Encabezado y menú (`header.encabezado`)

La clase `identidad` agrupa el escudo y el nombre del centro. Su enlace lleva al inicio. El botón tiene `popovertarget="menu-contenido"`, que se conecta con el `id` del panel de enlaces. El navegador se encarga de abrirlo, cerrarlo al hacer clic fuera y cerrarlo con Escape; esta interacción no requiere JavaScript.

Los enlaces `#inicio`, `#especialidad`, `#modulos`, `#programas` y `#proyecto` saltan a secciones de esta misma página. El símbolo `#` indica que el destino es un elemento con ese `id`.

### 2.3 Portada (`section.portada`)

Es la presentación principal de ITSI. Dentro de `.portada-texto` están la etiqueta del nivel, el título del sitio, una bienvenida, una explicación breve y el botón **Conocer los módulos**. El botón apunta a `#modulos`.

La fotografía está dentro de `<figure class="portada-foto">`. El texto alternativo `alt` describe la imagen si no se carga y ayuda a las personas que usan lectores de pantalla. `<figcaption>` muestra el pie de foto sobre la imagen.

Para cambiar esta portada, edita sus textos y la ruta `src` de la imagen en esta sección. La distribución visual se controla con `.portada` y `.portada-foto` en `style.css`.

### 2.4 Datos del plan (`section.resumen`)

La franja muestra ocho módulos, 1,200 horas incluyendo orientación y 40 semanas. Cada `<p>` representa un dato: `<strong>` resalta la cifra y `<span>` explica qué significa. El diseño de tres columnas está en `.resumen`.

### 2.5 Explicación de la especialidad (`section#especialidad`)

La columna izquierda contiene el subtítulo, el encabezado “¿Qué es ITSI?” y el escudo. La columna derecha explica el significado de la especialidad y lo que se estudia en tercer año. Los textos se editan en los dos párrafos de `.texto-seccion`; las columnas y sus espacios se definen en `.especialidad`.

### 2.6 Tarjetas de módulos (`section#modulos`)

El encabezado presenta la sección. En `.lista-modulos` hay ocho enlaces; cada tarjeta completa abre la página indicada en su atributo `href`. Dentro de cada tarjeta están el código, la duración, el nombre, un resumen y una imagen con descripción `alt`.

| Código | Tema | Página de detalle |
| --- | --- | --- |
| 3.1 | Gestión de bases de datos | `modulos/modulo-1.html` |
| 3.2 | Soporte a sistemas empresariales (ERP) | `modulos/modulo-2.html` |
| 3.3 | Operación y monitoreo de centros de datos | `modulos/modulo-3.html` |
| 3.4 | Servicios de red y aplicaciones empresariales | `modulos/modulo-4.html` |
| 3.5 | Auditoría de sistemas de información | `modulos/modulo-5.html` |
| 3.6 | Conversación en inglés sobre auditoría | `modulos/modulo-6.html` |
| 3.7 | Microempresa asociativa y cooperativa | `modulos/modulo-7.html` |
| 3.8 | Proyecto tecnológico integrador | `modulos/modulo-8.html` |

Para modificar una tarjeta, edita el enlace y su contenido dentro de `index.html`. Para modificar su aspecto, busca `.modulo`, `.modulo-con-foto` y `.numero-modulo` en `style.css`. Las reglas `:hover` son los cambios que aparecen al pasar el puntero.

### 2.7 Programas y recursos (`section#programas`)

La introducción explica que los enlaces llevan a páginas oficiales. Cada `.grupo-programa` organiza descargas relacionadas: sistemas operativos y máquinas virtuales, bases de datos, sistemas empresariales, redes, auditoría y monitoreo.

Cada `<a>` contiene la dirección de descarga. El texto dentro de `<span>` indica el tipo de enlace, por ejemplo, “Descarga oficial”. Al agregar un recurso, copia un enlace dentro del grupo adecuado y verifica la dirección antes de guardar.

El párrafo `.aviso-recursos` recuerda las condiciones de uso de Windows Server, Windows 10 y herramientas de red. Se mantiene separado de los enlaces para que las indicaciones de práctica no se confundan con las descargas.

### 2.8 Proyecto final (`section#proyecto`)

La última sección explica que cada equipo puede desarrollar una propuesta relacionada con lo aprendido durante la especialidad. El botón abre la página del módulo 3.8. El color y la distribución se controlan con `.cierre` y `.cierre-contenido`.

### 2.9 Pie de página (`footer.pie`)

Muestra otra vez el escudo y el nombre del centro, además del enlace **Volver al inicio**. El estilo común está en `.pie` y `.pie-identidad`.

## 3. Páginas individuales de los módulos

Cada archivo `modulos/modulo-N.html` sigue la misma estructura; cambia el número, el contenido y los recursos según el módulo.

1. **Configuración:** título de pestaña, descripción, icono y hoja CSS. Se usa `../` porque los HTML están dentro de `modulos/` y deben subir un nivel para llegar a `imagenes/` y `style.css`.
2. **Encabezado:** escudo, nombre del sitio y enlace de regreso a `index.html#modulos`.
3. **Título del módulo:** código 3.1–3.8, nombre, resumen y datos de horas y semanas.
4. **¿De qué trata?:** párrafo que resume el propósito del módulo.
5. **Temas principales:** cada tema está en `<details>`. El encabezado de cada tema es `<summary>` y la explicación es el párrafo que sigue. El navegador muestra u oculta ese texto; no se necesita JavaScript.
6. **Una idea para practicar:** actividad sencilla para relacionar los temas con una práctica de clase.
7. **Videos recomendados:** enlaces a material relacionado. El texto indica el título del video y el canal.
8. **Regreso y pie:** enlaces que vuelven a la lista de módulos o al inicio.

Para cambiar el contenido de un módulo, abre el archivo correspondiente: por ejemplo, el módulo 3.2 está en `modulos/modulo-2.html`. No cambies el nombre de una carpeta o imagen sin actualizar también las rutas que la usan.

## 4. Hoja de estilos: `style.css`

La hoja CSS está agrupada por componentes. Busca el nombre de clase entre comentarios para ubicar la parte que quieres ajustar.

1. **Variables `:root`:** colores, fondos, bordes, sombra y familia tipográfica. Cambiar aquí una variable como `--azul` modifica todos los componentes que la usan.
2. **Normalización y fondo:** `box-sizing` simplifica el cálculo del tamaño. `body::before` y `body::after` crean gradientes y puntos decorativos. Los `@keyframes` mueven esas capas lentamente usando CSS.
3. **Encabezado y menú:** `.encabezado` mantiene la barra visible al desplazarse. `.menu-boton` da estilo al botón y `.menu-contenido` al panel nativo del navegador.
4. **Portada:** `.portada` distribuye el texto y la fotografía; la imagen usa `object-fit: cover` para llenar su espacio sin deformarse.
5. **Datos y especialidad:** `.resumen` alinea cifras; `.especialidad` organiza el encabezado y la descripción en columnas.
6. **Módulos:** `.lista-modulos` crea la cuadrícula y `.modulo` define la apariencia de cada enlace-tarjeta. `.modulo-con-foto` reserva espacio para la imagen.
7. **Recursos y cierre:** `.programas` agrupa enlaces de descarga; `.cierre` da énfasis al proyecto final.
8. **Páginas de detalle:** `.pagina-modulo`, `.titulo-modulo`, `.detalle-cuerpo`, `.panel-info` y `.videos-modulo` dan forma a las páginas de cada módulo.
9. **Temas desplegables:** `.tema-desplegable` define colores, separación y el signo más/menos de `<details>`.
10. **Diseño adaptable:** `@media (max-width: 720px)` reorganiza tabletas; `@media (max-width: 520px)` adapta teléfonos. `prefers-reduced-motion` detiene el fondo animado si el dispositivo lo solicita.

En CSS, un selector con punto como `.modulo` busca un elemento que tenga `class="modulo"`. Un selector con `#`, como `#modulos`, busca el `id` correspondiente. Una regla entre llaves `{ }` reúne propiedades: por ejemplo `color` cambia el texto y `background` cambia el fondo.

## 5. Cambios frecuentes

- **Cambiar un texto:** modifica el contenido entre etiquetas en el HTML, sin borrar las etiquetas.
- **Cambiar una foto:** sustituye el valor de `src` y escribe una descripción clara en `alt`.
- **Cambiar un color:** edita una variable de `:root` en `style.css`.
- **Cambiar un tema de módulo:** edita el `<summary>` y el párrafo dentro de su `<details>`.
- **Agregar un programa:** crea un `<a href="DIRECCIÓN">Nombre <span>Descarga oficial</span></a>` dentro de su categoría.
- **Cambiar el orden de una tarjeta:** mueve el bloque `<a class="modulo ...">` correspondiente dentro de `.lista-modulos`.
- **Ver los cambios:** guarda el archivo y actualiza la página en el navegador.

## 6. Imágenes, horas y seguridad

Las imágenes están guardadas localmente en `imagenes/` para que el sitio use las mismas fotos al abrirse desde el proyecto. Las horas y semanas se basan en el plan de estudio: el total publicado suma 1,170 horas de módulos y 30 horas de orientación.

Los enlaces de Windows Server conducen a una edición de evaluación. Windows 10 terminó su soporte el 14 de octubre de 2025; úsalo solo en una máquina virtual aislada para las prácticas. Realiza escaneos de red únicamente en laboratorios autorizados.
