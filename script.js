// Script para lidar com animações e interatividade

// Função para verificar quando elementos entram na tela
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe todos os elementos que devem ter animação quando entram na tela
  document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
  });
};

// Implementação de navegação suave
const setupSmoothScrolling = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
};

// Função para verificar posição de scroll e atualizar navegação ativa
const handleScrollSpy = () => {
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
};

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  observeElements();
  setupSmoothScrolling();
  handleScrollSpy();

  // Verificar tema do sistema e aplicar modo claro/escuro se necessário
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    // Implementar mudança para tema claro se necessário
  }
}); 