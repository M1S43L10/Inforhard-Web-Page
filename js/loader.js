window.addEventListener("load", function () {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("oculto");

      // Eliminar completamente después de la transición
      setTimeout(() => {
        loader.style.display = "none";
      }, 600); // igual a la duración de la animación CSS
    }
  }, 3000); // visible durante 3 segundos
});
