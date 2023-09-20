let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    // Oculta todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Avança para o próximo slide
    slideIndex++;
    
    // Volta ao primeiro slide se necessário
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Exibe o slide atual
    slides[slideIndex - 1].style.display = "block";
    
    // Define o tempo para avançar os slides automaticamente (a cada 2 segundos)
    setTimeout(showSlides, 2000);
}