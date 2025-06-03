// Script para o slider de depoimentos

document.addEventListener('DOMContentLoaded', () => {
  // Seleção dos elementos
  const slider = document.querySelector('.testimonials-slider');
  const slides = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('[data-direction="prev"]');
  const nextBtn = document.querySelector('[data-direction="next"]');
  const dots = document.querySelectorAll('.dot');

  // Definir variáveis de controle
  let currentSlide = 0;
  const totalSlides = slides.length;

  // Marcar slides como visíveis para animação
  slides.forEach((slide) => {
    slide.classList.add('visible');
  });

  // Função para atualizar o slide atual
  const goToSlide = (index) => {
    // Verificar limites
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }

    // Atualizar a posição do slider
    slider.scrollLeft = index * slider.offsetWidth;
    currentSlide = index;

    // Atualizar os dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  };

  // Event listeners para controles do slider
  prevBtn.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
  });

  nextBtn.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
  });

  // Event listeners para os dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
  });

  // Adicionar suporte para arrastar/swipe no mobile
  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;

  slider.addEventListener('touchstart', touchStart);
  slider.addEventListener('touchmove', touchMove);
  slider.addEventListener('touchend', touchEnd);
  
  function touchStart(event) {
    startPos = event.touches[0].clientX;
    isDragging = true;
    currentTranslate = slider.scrollLeft;
  }
  
  function touchMove(event) {
    if (isDragging) {
      const currentPosition = event.touches[0].clientX;
      const diff = startPos - currentPosition;
      slider.scrollLeft = currentTranslate + diff;
    }
  }
  
  function touchEnd() {
    isDragging = false;
    // Determinar qual slide está mais visível
    const slideWidth = slider.offsetWidth;
    const newIndex = Math.round(slider.scrollLeft / slideWidth);
    goToSlide(newIndex);
  }

  // Auto-rotação do slider (opcional)
  let slideInterval;

  const startSlideTimer = () => {
    slideInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5000); // Muda a cada 5 segundos
  };

  const stopSlideTimer = () => {
    clearInterval(slideInterval);
  };

  // Iniciar auto-rotação
  startSlideTimer();

  // Parar a rotação quando o usuário interage
  slider.addEventListener('mouseenter', stopSlideTimer);
  slider.addEventListener('mouseleave', startSlideTimer);
  slider.addEventListener('touchstart', stopSlideTimer);
  slider.addEventListener('touchend', startSlideTimer);

  // Inicialização
  goToSlide(0);
}); 