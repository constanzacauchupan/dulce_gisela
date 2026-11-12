// Número de WhatsApp (código de país + número, sin + ni espacios)
const WHATSAPP = "56986793141";

// ---------- Menú del celular: abre/cierra al tocar el botón ☰ ----------
const menuBoton = document.getElementById("menu-boton");
const menu = document.getElementById("menu");

menuBoton.addEventListener("click", () => {
  const abierto = menu.classList.toggle("abierto");
  menuBoton.setAttribute("aria-expanded", abierto);
  menuBoton.textContent = abierto ? "✕" : "☰";
});

// Al elegir una opción del menú, se cierra
menu.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    menu.classList.remove("abierto");
    menuBoton.setAttribute("aria-expanded", false);
    menuBoton.textContent = "☰";
  });
});

// ---------- Año actual en el pie de página ----------
document.getElementById("anio").textContent = new Date().getFullYear();

// ---------- Catálogo (solo en productos.html) ----------

// Cada botón "Pedir por WhatsApp" abre un mensaje con el nombre del producto
document.querySelectorAll(".producto[data-nombre]").forEach((producto) => {
  const boton = producto.querySelector(".producto__pedir");
  if (!boton) return;
  const mensaje = `Hola Gisela, me interesa: ${producto.dataset.nombre}`;
  boton.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
  boton.target = "_blank";
  boton.rel = "noopener";
});

// Filtros por categoría
const filtros = document.querySelectorAll(".filtro");

filtros.forEach((filtro) => {
  filtro.addEventListener("click", () => {
    const categoria = filtro.dataset.filtro;

    filtros.forEach((f) => f.classList.toggle("activo", f === filtro));

    document.querySelectorAll(".producto[data-categoria]").forEach((producto) => {
      const mostrar = categoria === "todos" || producto.dataset.categoria === categoria;
      producto.hidden = !mostrar;
    });
  });
});

// ---------- Animación: los elementos aparecen al ir bajando ----------
const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!sinMovimiento && "IntersectionObserver" in window) {
  // Elementos que aparecen (la portada tiene su propia animación)
  const selector = [
    ".seccion .etiqueta",
    ".seccion h2",
    ".seccion__intro",
    ".producto",
    ".centrado",
    ".sobre__foto",
    ".sobre p",
    ".testimonio",
    ".paso",
    ".nota",
    ".contacto__datos li",
    ".contacto .boton",
    ".filtros",
    ".pagina-titulo h1",
    ".pagina-titulo .etiqueta",
  ].join(", ");

  const elementos = [...document.querySelectorAll(selector)].filter(
    (el) => !el.closest(".portada")
  );

  // En grupos (productos, opiniones, pasos), cada uno aparece un poquito después del anterior
  elementos.forEach((el) => {
    const hermanos = [...el.parentElement.children].filter((h) => h.matches(selector));
    const posicion = hermanos.indexOf(el);
    if (posicion > 0) el.style.setProperty("--retraso", `${(posicion % 3) * 0.12}s`);
    el.classList.add("revelar");
  });

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  elementos.forEach((el) => observador.observe(el));
}
