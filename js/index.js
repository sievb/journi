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

var personInfo = [
    {
        "name": "Angela Birchman",
        "role": "Project Manager",
        "portfolioLink": "https://www.google.com/",
        "img": "img/profile.png"
    },

    {
        "name": "Benjamin Siev",
        "role": "Web Developer ( ͡° ͜ʖ ͡°)",
        "portfolioLink": "https://www.google.com/",
        "img": "img/profile.png"
    },

    {
        "name": "Junior Tran-Thien",
        "role": "Narrative Designer",
        "portfolioLink": "https://www.google.com/",
        "img": "img/profile.png"
    },

    {
        "name": "Su Li",
        "role": "App Developer",
        "portfolioLink": "https://www.google.com/",
        "img": "img/profile.png"
    },

    {
        "name": "Yin Yin",
        "role": "UI/UX Designer",
        "portfolioLink": "https://www.google.com/",
        "img": "img/profile.png"
    }
];

function openOverlay() {
    document.getElementById("infoOverlay").style.height = "100%";
}

function closeOverlay() {
    document.getElementById("infoOverlay").style.height = "0%";
    $(".infoContent").empty();
}

var overlayWindow = document.getElementById("infoOverlay");

window.onclick = function(event) {
    if (event.target == overlayWindow) {
        closeOverlay();
    }
}