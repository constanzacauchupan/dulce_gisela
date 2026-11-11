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
