// Menú del celular: abre/cierra al tocar el botón ☰
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

// Año actual en el pie de página
document.getElementById("anio").textContent = new Date().getFullYear();
