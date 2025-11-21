// Função para copiar a chave PIX
function copyPixKey() {
    const pixKey = "705.207.691-80";
    navigator.clipboard.writeText(pixKey).then(() => {
        alert("Chave PIX copiada para a área de transferência!");
    }).catch(err => {
        console.error('Erro ao copiar a chave PIX: ', err);
        alert("Não foi possível copiar a chave PIX.");
    });
}

// Lógica para ocultar/mostrar a navbar ao rolar
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    // Oculta a navbar ao rolar para baixo, mas apenas após rolar um pouco
    if (lastScrollY < window.scrollY && window.scrollY > 100) {
        navbar.classList.add('nav-hidden');
    } else {
        // Mostra a navbar ao rolar para cima
        navbar.classList.remove('nav-hidden');
    }
    // Atualiza a última posição de rolagem
    lastScrollY = window.scrollY;
});
