var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carouselImage");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}

var personInfo = {
    {
        "name": "Angela Birchman",
        "role": "Project Manager",
        "portfolioLink": "https://www.google.com/"
    },

    {
        "name": "Benjamin Siev",
        "role": "Web Developer ( ͡° ͜ʖ ͡°)",
        "portfolioLink": "https://www.google.com/"
    },

    {
        "name": "Junior Tran-Thien",
        "role": "Narrative Designer",
        "portfolioLink": "https://www.google.com/"
    },

    {
        "name": "Su Li",
        "role": "App Developer",
        "portfolioLink": "https://www.google.com/"
    },

    {
        "name": "Yin Yin",
        "role": "UI/UX Designer",
        "portfolioLink": "https://www.google.com/"
    }
};

$(document).ready() {
    console.log(personInfo[0].name);
}