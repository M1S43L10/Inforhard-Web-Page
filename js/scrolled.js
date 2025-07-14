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
    const yaVisitado = localStorage.getItem("visitado");

    // Si nunca entró antes, hacemos scroll automático
    if (!yaVisitado) {
        setTimeout(() => {
        const loader = document.getElementById("loader");

        const waitForLoader = setInterval(() => {
            const oculto = loader?.classList.contains("oculto") || loader?.style.display === "none";
            if (oculto || !loader) {
            clearInterval(waitForLoader);

            setTimeout(() => {
                window.scrollBy({ top: 65, behavior: "smooth" });
            }, 500);

            // ✅ Marcamos como ya visitado
            localStorage.setItem("visitado", "true");
            }
        }, 100);
        }, 300);
    } else {
        // Si ya visitó, aseguramos que el navbar se muestre
        document.body.classList.add("scrolled");
    }
  });
} else {
  document.body.classList.add("scrolled");
}
