// Funcionalidade para copiar a chave PIX
function copyPixKey() {
    const pixKey = "70520769180";
    
    // Criar um elemento temporário para copiar o texto
    const tempInput = document.createElement("input");
    tempInput.value = pixKey;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis
    
    try {
        // Copiar o texto para a área de transferência
        document.execCommand("copy");
        
        // Feedback visual
        const button = document.querySelector(".copy-pix-btn");
        const originalText = button.innerHTML;
        button.innerHTML = "<i class=\"fas fa-check\"></i> Copiado!";
        button.style.background = "#28a745";
        
        // Restaurar o botão após 2 segundos
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = "";
        }, 2000);
        
    } catch (err) {
        console.error("Erro ao copiar: ", err);
        alert("Chave PIX: " + pixKey);
    }
    
    // Remover o elemento temporário
    document.body.removeChild(tempInput);
}

// Smooth scroll para o indicador de scroll
document.addEventListener("DOMContentLoaded", function() {
    const scrollIndicator = document.querySelector(".scroll-indicator");
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener("click", function() {
            const nextSection = document.querySelector(".pre-wedding-section");
            if (nextSection) {
                nextSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }
    
    // Adicionar efeito de fade-in nas seções quando aparecem na tela
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);
    
    // Observar todas as seções
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(section);
    });
    
    // Adicionar animação de contagem regressiva (opcional)
    const weddingDate = new Date("2026-03-19T11:00:00");
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate.getTime() - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Você pode adicionar um elemento de contagem regressiva se desejar
            // console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
    }
    
    // Atualizar contagem regressiva a cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown();
});

// Adicionar efeito parallax suave no hero
window.addEventListener("scroll", function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero-section");
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Adicionar funcionalidade de zoom nas fotos do pre-wedding
document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll(".pre-wedding-photo");
    
    photos.forEach(photo => {
        photo.addEventListener("click", function() {
            // Criar modal para visualizar a foto em tamanho maior
            const modal = document.createElement("div");
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                cursor: pointer;
            `;
            
            const img = document.createElement("img");
            img.src = this.src;
            img.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 10px;
            `;
            
            modal.appendChild(img);
            document.body.appendChild(modal);
            
            // Fechar modal ao clicar
            modal.addEventListener("click", function() {
                document.body.removeChild(modal);
            });
        });
    });
});
