document.addEventListener("DOMContentLoaded", function() {
    var icono = document.getElementById("flecha");
  
    setTimeout(function() {
      icono.style.opacity = "1";}, 1000); 
  });
  

//para q la flecha desaparezca gradualmente cuando se scrolee para abajo
var lastScrollTop = 0;

window.addEventListener("scroll", function() {
  var currentScroll = document.documentElement.scrollTop;
  var flecha = document.getElementById("flecha");
  
  if (currentScroll > lastScrollTop) {
    // Scroll hacia abajo
    flecha.style.opacity = "0"; // Establece la opacidad de la flecha a 0
  } else {
    // Scroll hacia arriba
    flecha.style.opacity = "1"; // Establece la opacidad de la flecha a 1
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);




