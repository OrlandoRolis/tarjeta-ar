document.addEventListener("DOMContentLoaded", () => {
  const marcador = document.querySelector("#marcador-principal");
  const statusText = document.querySelector("#status-text");
  const portfolioBtn = document.querySelector("#portfolio-btn");

  marcador.addEventListener("markerFound", () => {
    statusText.textContent = "Tarjeta detectada";
    portfolioBtn.classList.remove("hidden");
  });

  marcador.addEventListener("markerLost", () => {
    statusText.textContent = "Apunta la cámara al marcador Hiro de la tarjeta";
    portfolioBtn.classList.add("hidden");
  });
});
