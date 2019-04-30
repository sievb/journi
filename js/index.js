var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

$(".prev").on("click", function() {
    plusSlides(-1);
    
})

$(".next").on("click", function() {
    plusSlides(1);
})

function showSlides(n) {
    var i;
    var slideImages = $(".carouselImage img");
    var caption = $(".caption");
    var dots = document.getElementsByClassName("dot");
    if (n > slideImages.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slideImages.length};
    for (i = 0; i < slideImages.length; i++) {
        slideImages[i].style.display = "none";  
        caption[i].style.display = "none"
    };
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    };
    slideImages[slideIndex-1].style.display = "flex";
    caption[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
};