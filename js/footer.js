document.addEventListener("DOMContentLoaded", () => {
  const footerElement = document.getElementById("main-footer");
  if (!footerElement) return;

  const rutaBase = window.location.pathname.includes("/pages/") ? "../" : "";
  const footerPath = rutaBase + "components/footer.html";

  fetch(footerPath)
    .then(res => res.text())
    .then(html => {
      footerElement.innerHTML = html;
    })
    .catch(err => console.error("No se pudo cargar el footer:", err));
});
