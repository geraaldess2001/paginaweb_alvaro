document.getElementById("modoOscuroBtn").addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");
  localStorage.setItem("modoOscuro", document.body.classList.contains("modo-oscuro"));
});

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("modoOscuro") === "true") {
    document.body.classList.add("modo-oscuro");
  }
});

window.addEventListener("scroll", () => {
  const btn = document.querySelector(".subir");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("usuario-teclado");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (typeof bootstrap !== 'undefined') {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach((carousel) => {
      new bootstrap.Carousel(carousel, {
        interval: 5000,
        ride: 'carousel'
      });
    });
  }
});
