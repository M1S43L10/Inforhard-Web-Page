document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.getElementById("main-header");
  if (!headerElement) return;

  const enPages = window.location.pathname.includes("/pages/");
  const rutaBase = enPages ? "../" : "";
  const headerPath = enPages ? "../components/header.html" : "components/header.html";

  fetch(headerPath)
    .then(response => {
      if (!response.ok) throw new Error("No se pudo cargar el header");
      return response.text();
    })
    .then(html => {
      const temp = document.createElement("div");
      temp.innerHTML = html;

      // Corregir imágenes
      const imgs = temp.querySelectorAll("img");
      imgs.forEach(img => {
        const src = img.getAttribute("src");
        if (src && !src.startsWith("http")) {
          img.src = rutaBase + src;
        }
      });

      // Corregir links
      const links = temp.querySelectorAll("a");
      links.forEach(link => {
        const href = link.getAttribute("href");
        if (
          href &&
          !href.startsWith("http") &&
          !href.startsWith("#") &&
          !href.startsWith("mailto:")
        ) {
          link.setAttribute("href", rutaBase + "pages/" + href);
        }
      });

      // Corregir logo
      const logo = temp.querySelector(".navbar-brand");
      if (logo) {
        logo.setAttribute("href", rutaBase + "index.html");
      }

      // ✅ Aplicar clase para ocultar el navbar dinámicamente
      const navbar = temp.querySelector("nav.navbar");
      if (navbar) {
        const isIndex = location.pathname.endsWith("index.html") || location.pathname === "/" || location.pathname === "/index.html";
        if (isIndex) {
          navbar.classList.add("navbar-ocultable");
        }
      }


      // Insertar contenido final
      headerElement.innerHTML = temp.innerHTML;
    })
    .catch(error => {
      console.error("Error al cargar el header:", error);
    });
});
