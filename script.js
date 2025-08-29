document.addEventListener("DOMContentLoaded", function() {
    // Setează anul curent pentru drepturile de autor
    const year = new Date().getFullYear();
    const copyrightElement = document.getElementById("copyright-text");
    copyrightElement.textContent = `© ${year} Numele Tău. Toate drepturile rezervate.`;

    // Funcționalitate pentru Carusel/Slideshow
    let slideIndex = 0;
    const slides = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const totalImages = images.length;

    if (totalImages > 0) {
        // Funcția pentru a afișa slide-ul curent
        function showSlides() {
            slides.style.transform = `translateX(${-slideIndex * 100 / totalImages}%)`;
        }

        // Funcția pentru a schimba slide-urile
        window.plusSlides = function(n) {
            slideIndex += n;
            if (slideIndex >= totalImages) {
                slideIndex = 0; // Revine la prima imagine dacă ajunge la sfârșit
            }
            if (slideIndex < 0) {
                slideIndex = totalImages - 1; // Merge la ultima imagine dacă merge înapoi de la prima
            }
            showSlides();
        }

        // Auto-slideshow (schimbă imaginile automat la fiecare 3 secunde)
        let slideInterval = setInterval(() => {
            plusSlides(1);
        }, 3000); // 3000ms = 3 secunde

        // Oprește slideshow-ul la hover și îl reia la mouseout
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
            carouselContainer.addEventListener('mouseleave', () => {
                slideInterval = setInterval(() => {
                    plusSlides(1);
                }, 3000);
            });
        }

        // Inițializează slideshow-ul
        showSlides();
    } else {
        console.warn("Nu au fost găsite imagini pentru carusel. Asigură-te că directorul 'images' conține imagini.");
    }
});
