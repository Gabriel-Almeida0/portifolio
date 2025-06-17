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

// Função para lidar com responsividade em dispositivos móveis
const setupMobileNavigation = () => {
  // Adicionar classe ativa ao link da página atual
  const currentPath = window.location.pathname;
  const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === filename || 
        (filename === '' && linkHref === 'index.html') || 
        (filename === '/' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // Verificar se a tela é pequena para ajustes de responsividade
  const checkScreenSize = () => {
    if (window.innerWidth <= 768) {
      document.body.classList.add('mobile');
    } else {
      document.body.classList.remove('mobile');
      document.body.classList.remove('mobile-nav-open');
    }
  };
  
  // Verificar no carregamento e ao redimensionar
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
  
  // Adicionar botão de menu mobile ao header
  const setupMobileMenu = () => {
    const header = document.querySelector('header .container');
    
    // Verificar se o botão já existe
    if (!document.querySelector('.mobile-nav-toggle')) {
      const mobileNavToggle = document.createElement('button');
      mobileNavToggle.className = 'mobile-nav-toggle';
      mobileNavToggle.setAttribute('aria-label', 'Toggle navigation menu');
      
      const hamburger = document.createElement('div');
      hamburger.className = 'hamburger';
      
      for (let i = 0; i < 4; i++) {
        const span = document.createElement('span');
        hamburger.appendChild(span);
      }
      
      mobileNavToggle.appendChild(hamburger);
      header.appendChild(mobileNavToggle);
      
      // Adicionar evento de clique para abrir/fechar menu
      mobileNavToggle.addEventListener('click', () => {
        document.body.classList.toggle('mobile-nav-open');
      });
      
      // Fechar menu ao clicar em um link
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          document.body.classList.remove('mobile-nav-open');
        });
      });
    }
  };
  
  setupMobileMenu();
};

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  observeElements();
  setupSmoothScrolling();
  handleScrollSpy();
  setupMobileNavigation();

  // Verificar tema do sistema e aplicar modo claro/escuro se necessário
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    // Implementar mudança para tema claro se necessário
  }
}); 