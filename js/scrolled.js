const isIndex =
  location.pathname.endsWith("index.html") ||
  location.pathname === "/" ||
  location.pathname === "/index.html";

if (isIndex) {
  // Aplica clase "scrolled" al hacer scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  });

  window.addEventListener("DOMContentLoaded", () => {
    if (window.scrollY > 10) {
      document.body.classList.add("scrolled");
    }
  });

  // 🔽 Auto-scroll suave luego del loader
  window.addEventListener("load", () => {
    const hoy = new Date().toISOString().split("T")[0]; // ej: "2025-07-14"
    const ultimaVisita = localStorage.getItem("ultimaVisita");

    if (ultimaVisita !== hoy) {
      // 🟢 Primera visita del día: ejecutar efecto
      setTimeout(() => {
        const loader = document.getElementById("loader");

        const waitForLoader = setInterval(() => {
          const oculto = loader?.classList.contains("oculto") || loader?.style.display === "none";
          if (oculto || !loader) {
            clearInterval(waitForLoader);

            // Scroll automático
            setTimeout(() => {
              window.scrollBy({ top: 65, behavior: "smooth" });
            }, 500);

            // 🔐 Guardar la fecha de visita de hoy
            localStorage.setItem("ultimaVisita", hoy);
          }
        }, 100);
      }, 300);
    } else {
      // 🔁 Ya entró hoy → mostrar navbar directamente
      document.body.classList.add("scrolled");
    }
  });
} else {
  document.body.classList.add("scrolled");
}
