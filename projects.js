// Script para animação de entrada dos projetos

document.addEventListener('DOMContentLoaded', function() {
    // Animação de scroll para os elementos
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Funcionalidade para o botão "Receber notificação"
    const notifyBtn = document.querySelector('.notify-btn');
    if (notifyBtn) {
        notifyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Verificar se o elemento de modal já existe
            let modal = document.getElementById('notify-modal');
            
            // Se não existir, criar
            if (!modal) {
                modal = document.createElement('div');
                modal.id = 'notify-modal';
                modal.className = 'modal';
                
                const modalContent = document.createElement('div');
                modalContent.className = 'modal-content';
                
                modalContent.innerHTML = `
                    <span class="close-modal">&times;</span>
                    <h3>Receber notificações</h3>
                    <p>Deixe seu email para ser notificado quando novos projetos forem lançados.</p>
                    <form id="notify-form">
                        <input type="email" id="notify-email" placeholder="Seu email" required>
                        <button type="submit" class="btn primary">Inscrever</button>
                    </form>
                `;
                
                modal.appendChild(modalContent);
                document.body.appendChild(modal);
                
                // Estilização do modal
                const style = document.createElement('style');
                style.textContent = `
                    .modal {
                        display: none;
                        position: fixed;
                        z-index: 100;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.8);
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                    }
                    .modal.show {
                        display: flex;
                        opacity: 1;
                    }
                    .modal-content {
                        background: rgba(20, 20, 20, 0.95);
                        border: 1px solid var(--primary);
                        border-radius: 0.75rem;
                        max-width: 400px;
                        width: 90%;
                        padding: 2rem;
                        position: relative;
                        box-shadow: 0 0 25px rgba(0, 255, 221, 0.2);
                        transform: translateY(20px);
                        transition: transform 0.3s ease;
                    }
                    .show .modal-content {
                        transform: translateY(0);
                    }
                    .close-modal {
                        position: absolute;
                        top: 1rem;
                        right: 1.5rem;
                        color: var(--gray-400);
                        font-size: 1.5rem;
                        cursor: pointer;
                        transition: color 0.3s;
                    }
                    .close-modal:hover {
                        color: var(--primary);
                    }
                    #notify-form {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                        margin-top: 1.5rem;
                    }
                    #notify-email {
                        padding: 0.75rem 1rem;
                        background-color: rgba(255, 255, 255, 0.05);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        border-radius: 0.375rem;
                        color: var(--foreground);
                        transition: all 0.3s;
                    }
                    #notify-email:focus {
                        outline: none;
                        border-color: var(--primary);
                        box-shadow: 0 0 0 2px rgba(0, 255, 221, 0.2);
                    }
                    .btn.primary {
                        background-color: var(--primary);
                        color: black;
                        border: none;
                        padding: 0.75rem;
                        border-radius: 0.375rem;
                        cursor: pointer;
                        font-weight: 500;
                        transition: all 0.3s;
                    }
                    .btn.primary:hover {
                        transform: scale(1.02);
                        box-shadow: 0 0 15px rgba(0, 255, 221, 0.3);
                    }
                    .success-message {
                        color: var(--primary);
                        text-align: center;
                        margin-top: 1rem;
                        font-weight: 500;
                    }
                `;
                document.head.appendChild(style);
                
                // Fechar modal ao clicar no X
                document.querySelector('.close-modal').addEventListener('click', function() {
                    modal.classList.remove('show');
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 300);
                });
                
                // Fechar modal ao clicar fora do conteúdo
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        modal.classList.remove('show');
                        setTimeout(() => {
                            modal.style.display = 'none';
                        }, 300);
                    }
                });
                
                // Submissão do formulário
                document.getElementById('notify-form').addEventListener('submit', function(e) {
                    e.preventDefault();
                    const email = document.getElementById('notify-email').value;
                    const form = this;
                    
                    // Simulação de envio
                    form.innerHTML = '<div class="loading">Processando...</div>';
                    
                    setTimeout(() => {
                        form.innerHTML = `
                            <div class="success-message">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <p>Seu email foi registrado com sucesso!</p>
                            </div>
                        `;
                        
                        // Fechar modal após alguns segundos
                        setTimeout(() => {
                            modal.classList.remove('show');
                            setTimeout(() => {
                                modal.style.display = 'none';
                            }, 300);
                            
                            // Atualizar texto do botão
                            notifyBtn.innerHTML = `
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                Notificação ativada
                            `;
                        }, 2000);
                    }, 1500);
                });
            }
            
            // Mostrar o modal
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });
    }

    // Efeito hover adicional para o card de projeto futuro
    const futureProject = document.querySelector('.future-project');
    if (futureProject) {
        futureProject.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Adicionar efeito de luz seguindo o cursor
            this.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 255, 221, 0.1), rgba(0, 0, 0, 0) 80%), linear-gradient(145deg, rgba(0, 255, 221, 0.05), rgba(0, 0, 0, 0))`;
        });
        
        futureProject.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(145deg, rgba(0, 255, 221, 0.05), rgba(0, 0, 0, 0))';
        });
    }
}); 