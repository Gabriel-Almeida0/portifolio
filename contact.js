// Script para o formulário de contato

document.addEventListener('DOMContentLoaded', () => {
  // Selecionar elementos
  const contactForm = document.getElementById('contactForm');
  const formElements = contactForm.querySelectorAll('input, textarea, button');
  
  // Marcar elementos como visíveis para animação
  document.querySelectorAll('.fade-in').forEach((elem) => {
    elem.classList.add('visible');
  });

  // Função para validar o formulário
  const validateForm = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;

    // Validação básica
    if (name.value.trim() === '') {
      highlightError(name);
      isValid = false;
    } else {
      removeError(name);
    }

    // Validação de email simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      highlightError(email);
      isValid = false;
    } else {
      removeError(email);
    }

    if (message.value.trim() === '') {
      highlightError(message);
      isValid = false;
    } else {
      removeError(message);
    }

    return isValid;
  };

  // Função para destacar campo com erro
  const highlightError = (element) => {
    element.classList.add('error');
    element.style.borderColor = '#ff3333';
    
    // Adicionar mensagem de erro se ainda não existir
    const parent = element.parentElement;
    if (!parent.querySelector('.error-message')) {
      const errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      errorMessage.textContent = 'Este campo é obrigatório';
      if (element.id === 'email' && element.value.trim() !== '') {
        errorMessage.textContent = 'Por favor, insira um email válido';
      }
      parent.appendChild(errorMessage);
    }
  };

  // Função para remover destaque de erro
  const removeError = (element) => {
    element.classList.remove('error');
    element.style.borderColor = '';
    
    // Remover mensagem de erro se existir
    const parent = element.parentElement;
    const errorMessage = parent.querySelector('.error-message');
    if (errorMessage) {
      parent.removeChild(errorMessage);
    }
  };

  // Event listeners para remover erros quando o usuário começa a digitar
  formElements.forEach((element) => {
    if (element.tagName.toLowerCase() !== 'button') {
      element.addEventListener('input', () => {
        removeError(element);
      });
    }
  });

  // Event listener para envio do formulário
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulação de envio de formulário
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';
      
      // Simular uma requisição de API
      setTimeout(() => {
        // Aqui você conectaria com um back-end real
        submitButton.textContent = 'Mensagem Enviada!';
        submitButton.style.backgroundColor = '#4CAF50';
        
        // Resetar o formulário
        contactForm.reset();
        
        // Restaurar o botão após 3 segundos
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
          submitButton.style.backgroundColor = '';
        }, 3000);
      }, 1500);
    }
  });
}); 