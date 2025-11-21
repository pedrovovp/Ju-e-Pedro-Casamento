document.addEventListener("DOMContentLoaded", function () {
    // Animação de scroll para as seções
    const sections = document.querySelectorAll("section, footer");

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: "0px 0px -100px 0px" // Inicia a animação um pouco antes de a seção estar totalmente visível
    });

    sections.forEach(section => {
        section.classList.add("fade-in-section");
        sectionObserver.observe(section);
    });

    // Lógica para copiar a chave PIX
    window.copyPixKey = function () {
        const pixKey = "705.207.691-80";
        navigator.clipboard.writeText(pixKey).then(() => {
            const btn = document.querySelector(".copy-pix-btn");
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
            setTimeout(() => {
                btn.innerHTML = originalText;
            }, 2000);
        }).catch(err => {
            console.error("Erro ao copiar a chave PIX: ", err);
        });
    };

    // Lógica do carrossel de fotos
    const gallery = document.querySelector(".photo-gallery");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;

    function updateCarousel() {
        const items = document.querySelectorAll(".photo-item");
        if (items.length > 0) {
            const itemWidth = items[0].clientWidth;
            gallery.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    }

    if (prevBtn && nextBtn && gallery) {
        const items = document.querySelectorAll(".photo-item");
        const totalItems = items.length;

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        });

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        });

        window.addEventListener("resize", updateCarousel);
    }

    // Lógica para ocultar/mostrar a navbar no scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight) {
            // Scroll para baixo
            navbar.classList.add("nav-hidden");
        } else {
            // Scroll para cima
            navbar.classList.remove("nav-hidden");
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});
