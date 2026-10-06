document.documentElement.classList.add("js"); // Marca que JavaScript está activo para habilitar las animaciones CSS.

const menu = document.querySelector("#menu-sitio"); // Busca el menú de navegación; en las páginas de módulos no existe.

if (menu) { // Ejecuta la lógica del menú solo en la página principal, donde sí está presente.
  const button = menu.querySelector(".menu-boton"); // Encuentra el botón que abre y cierra el menú.
  const panel = menu.querySelector(".menu-contenido"); // Encuentra el panel que contiene los enlaces de navegación.

  function setMenuOpen(open) { // Define una función para sincronizar el aspecto y el estado accesible del menú.
    button.setAttribute("aria-expanded", String(open)); // Indica a lectores de pantalla si el menú está abierto.
    panel.hidden = !open; // Muestra el panel al abrirlo y lo oculta al cerrarlo.
  } // Termina la función que cambia el estado del menú.

  button.addEventListener("click", () => { // Escucha cada clic sobre el botón del menú.
    const isOpen = button.getAttribute("aria-expanded") === "true"; // Comprueba si el menú ya estaba abierto.
    setMenuOpen(!isOpen); // Invierte el estado actual para abrir o cerrar el menú.
  }); // Termina el evento del botón.

  document.addEventListener("click", (event) => { // Escucha clics que ocurren en cualquier parte del documento.
    if (!menu.contains(event.target)) setMenuOpen(false); // Cierra el menú si el clic fue fuera de él.
  }); // Termina el evento para cerrar al hacer clic afuera.

  panel.addEventListener("click", (event) => { // Escucha clics en los enlaces del menú.
    if (event.target.closest("a")) setMenuOpen(false); // Cierra el menú cuando se selecciona una sección.
  }); // Termina el evento para cerrar después de navegar.

  document.addEventListener("keydown", (event) => { // Escucha las teclas que se presionan en la página.
    if (event.key === "Escape") setMenuOpen(false); // Permite cerrar el menú con la tecla Escape.
  }); // Termina el evento de teclado.
} // Termina la lógica que depende de que exista el menú principal.

const elementosAnimados = document.querySelectorAll( // Busca los elementos que aparecerán suavemente al desplazarse.
  ".portada, .resumen, .especialidad, .programas, .grupo-programa, .cierre, .titulo-modulo, .panel-info, .videos-modulo" // Enumera las secciones que recibirán la animación; las tarjetas de módulos quedan sólidas y legibles.
); // Termina la búsqueda de elementos animados.

const prefiereMenosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches; // Lee la preferencia del sistema para evitar movimiento si la persona lo pidió.

if ("IntersectionObserver" in window && !prefiereMenosMovimiento) { // Activa el efecto solo si el navegador lo admite y no se pidió reducir movimiento.
  const observer = new IntersectionObserver((entradas) => { // Crea un observador que detecta cuando un elemento entra en pantalla.
    entradas.forEach((entrada) => { // Revisa cada elemento cuya visibilidad cambió.
      if (entrada.isIntersecting) { // Comprueba que el elemento ya se ve en la ventana.
        entrada.target.classList.add("visible"); // Añade la clase que inicia la transición de entrada.
        observer.unobserve(entrada.target); // Deja de observarlo para que la animación ocurra una sola vez.
      } // Termina la comprobación de visibilidad.
    }); // Termina el recorrido de cambios de visibilidad.
  }, { threshold: 0.12 }); // Inicia la animación cuando al menos el 12 % del elemento está visible.

  elementosAnimados.forEach((elemento, indice) => { // Prepara cada elemento de la lista para animarlo.
    elemento.classList.add("revelable"); // Añade una clase que permite ocultarlo suavemente antes de mostrarlo.
    elemento.style.setProperty("--orden-entrada", indice % 4); // Varía un poco el retraso para que las tarjetas no aparezcan a la vez.
    observer.observe(elemento); // Pide al navegador que avise cuando este elemento entre en pantalla.
  }); // Termina la preparación de los elementos.
} // Termina la configuración de las animaciones de desplazamiento.

if (!prefiereMenosMovimiento) { // Evita crear un fondo animado si la persona pidió reducir el movimiento.
  const lienzo = document.createElement("canvas"); // Crea el área transparente donde se dibujan las partículas.
  lienzo.className = "fondo-particulas"; // Le asigna la clase que lo coloca detrás del contenido.
  lienzo.setAttribute("aria-hidden", "true"); // Oculta el efecto decorativo a las tecnologías de asistencia.
  document.body.prepend(lienzo); // Añade el lienzo al principio de la página para que quede en el fondo.

  const contexto = lienzo.getContext("2d"); // Solicita el contexto de dibujo 2D del lienzo.

  if (contexto) { // Continúa únicamente si el navegador puede dibujar en el lienzo.
    let ancho = window.innerWidth; // Guarda el ancho actual de la ventana.
    let alto = window.innerHeight; // Guarda el alto actual de la ventana.
    let escala = Math.min(window.devicePixelRatio || 1, 1.5); // Ajusta la nitidez sin usar demasiada memoria.
    let particulas = []; // Prepara la lista donde se guardará cada punto animado.

    function ajustarLienzo() { // Actualiza el tamaño y las partículas cuando cambia la ventana.
      ancho = window.innerWidth; // Lee otra vez el ancho disponible.
      alto = window.innerHeight; // Lee otra vez el alto disponible.
      escala = Math.min(window.devicePixelRatio || 1, 1.5); // Vuelve a limitar la resolución del lienzo.
      lienzo.width = Math.floor(ancho * escala); // Define el ancho interno del lienzo para pantallas nítidas.
      lienzo.height = Math.floor(alto * escala); // Define el alto interno del lienzo para pantallas nítidas.
      lienzo.style.width = `${ancho}px`; // Mantiene el ancho visual igual al de la ventana.
      lienzo.style.height = `${alto}px`; // Mantiene el alto visual igual al de la ventana.
      contexto.setTransform(escala, 0, 0, escala, 0, 0); // Ajusta las coordenadas de dibujo a la resolución elegida.
      const cantidad = Math.min(65, Math.max(28, Math.round(ancho / 22))); // Calcula entre 28 y 65 puntos según el tamaño de pantalla.
      particulas = Array.from({ length: cantidad }, () => ({ // Genera todos los puntos con posiciones iniciales aleatorias.
        x: Math.random() * ancho, // Coloca cada punto en una posición horizontal aleatoria.
        y: Math.random() * alto, // Coloca cada punto en una posición vertical aleatoria.
        radio: 1.2 + Math.random() * 1.8, // Da a cada punto un tamaño pequeño y ligeramente distinto.
        velocidadX: (Math.random() - 0.5) * 0.34, // Asigna un movimiento horizontal lento hacia cualquier lado.
        velocidadY: (Math.random() - 0.5) * 0.34, // Asigna un movimiento vertical lento hacia cualquier lado.
        color: ["96,54,232", "223,44,168", "52,143,255"][Math.floor(Math.random() * 3)] // Elige violeta, magenta o azul para el punto.
      })); // Termina la creación aleatoria de partículas.
    } // Termina la función que adapta el lienzo a la ventana.

    function dibujarParticulas() { // Dibuja un nuevo fotograma del fondo animado.
      contexto.clearRect(0, 0, ancho, alto); // Borra el fotograma anterior para dibujar el siguiente.
      particulas.forEach((particula, indice) => { // Actualiza y dibuja cada punto de la lista.
        particula.x += particula.velocidadX; // Mueve el punto un poco hacia la derecha o la izquierda.
        particula.y += particula.velocidadY; // Mueve el punto un poco hacia arriba o hacia abajo.
        if (particula.x < 0) particula.x = ancho; // Reaparece por la derecha si sale por el borde izquierdo.
        if (particula.x > ancho) particula.x = 0; // Reaparece por la izquierda si sale por el borde derecho.
        if (particula.y < 0) particula.y = alto; // Reaparece abajo si sale por el borde superior.
        if (particula.y > alto) particula.y = 0; // Reaparece arriba si sale por el borde inferior.
        contexto.beginPath(); // Inicia el dibujo circular de esta partícula.
        contexto.arc(particula.x, particula.y, particula.radio, 0, Math.PI * 2); // Dibuja un punto pequeño en su posición actual.
        contexto.fillStyle = `rgba(${particula.color}, 0.62)`; // Aplica el color intenso con transparencia moderada.
        contexto.fill(); // Pinta el punto en el lienzo.

        for (let siguiente = indice + 1; siguiente < particulas.length; siguiente += 1) { // Compara este punto con los que aún no se revisaron.
          const otra = particulas[siguiente]; // Guarda el punto con el que se calculará la distancia.
          const diferenciaX = particula.x - otra.x; // Calcula la distancia horizontal entre ambos puntos.
          const diferenciaY = particula.y - otra.y; // Calcula la distancia vertical entre ambos puntos.
          const distancia = Math.hypot(diferenciaX, diferenciaY); // Calcula la distancia real entre los dos puntos.
          if (distancia < 118) { // Dibuja una conexión solo si los puntos están cerca.
            contexto.beginPath(); // Inicia el trazo de la conexión.
            contexto.moveTo(particula.x, particula.y); // Coloca el inicio de la línea en el primer punto.
            contexto.lineTo(otra.x, otra.y); // Coloca el final de la línea en el segundo punto.
            contexto.strokeStyle = `rgba(${particula.color}, ${(1 - distancia / 118) * 0.2})`; // Hace la línea más tenue cuanto más separados están.
            contexto.lineWidth = 0.7; // Mantiene las conexiones finas para que el fondo no distraiga.
            contexto.stroke(); // Dibuja la conexión entre los puntos.
          } // Termina la comprobación de distancia.
        } // Termina la búsqueda de puntos cercanos.
      }); // Termina el dibujo de todas las partículas.
      window.requestAnimationFrame(dibujarParticulas); // Solicita al navegador el siguiente fotograma de forma eficiente.
    } // Termina la función que dibuja cada fotograma.

    ajustarLienzo(); // Prepara el lienzo y distribuye las partículas al cargar la página.
    window.addEventListener("resize", ajustarLienzo, { passive: true }); // Reorganiza el fondo si cambia el tamaño de la ventana.
    dibujarParticulas(); // Inicia el movimiento continuo de los puntos y sus conexiones.
  } // Termina la comprobación de soporte del lienzo 2D.
} // Termina el fondo animado respetando la preferencia de movimiento.
