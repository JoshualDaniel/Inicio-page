// Duración de la animación en milisegundos (1.5 segundos = 1500 ms)
var animationDuration = 2000;

// Esperamos a que se cargue completamente la página
window.addEventListener("load", function () {
  // Ocultamos la animación de carga después de la duración especificada
  var loadingAnimation = document.querySelector(".loader");
  setTimeout(function () {
    loadingAnimation.classList.add("hidden");
  }, animationDuration);

  // Mostramos el contenido principal después de la duración especificada
  var content = document.getElementById("content");
  setTimeout(function () {
    content.classList.remove("hidden");
  }, animationDuration);
});
