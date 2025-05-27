document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".carousel-container");
  const items = document.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");
  let currentIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  function updateCarousel() {
    container.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Navegação por botões
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });

  // Navegação por touch (para dispositivos móveis)
  container.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  container.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const difference = touchStartX - touchEndX;
    if (difference > 50) {
      // Swipe para a esquerda
      currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    } else if (difference < -50) {
      // Swipe para a direita
      currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    }
    updateCarousel();
  }

  // Inicializa o carrossel
  updateCarousel();
});
