// Usar Intersection Observer para carga perezosa
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach((img) => {
  observer.observe(img);
});

// Inicializar Swiper solo cuando sea visible
if (document.querySelector(".mySwiper-1")) {
  var swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

if (document.querySelector(".mySwiper-2")) {
  var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
}

// Asegurar que las imágenes de los sliders tengan el atributo data-src correcto
const sliderImages = document.querySelectorAll(".slider-img img");
sliderImages.forEach((img) => {
  if (!img.dataset.src) {
    img.dataset.src = img.src;
  }
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function (input) {
  input.addEventListener("change", function () {
    let id = input.value;
    let thisSwiper = document.getElementById("swiper" + id);
    thisSwiper.swiper.update();
  });
});
