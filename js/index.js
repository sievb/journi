// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// $(".prev").on("click", function() {
//     $(".carouselImage img").animate({
//         left: "-50px",
//         opacity: 0
//     }, 10)
//     plusSlides(-1);

// })

// $(".next").on("click", function() {
//     plusSlides(1);
// })

// function showSlides(n) {
//     var i;
//     var slideImages = $(".carouselImage img");
//     var caption = $(".caption");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slideImages.length) {slideIndex = 1};
//     if (n < 1) {slideIndex = slideImages.length};
//     for (i = 0; i < slideImages.length; i++) {
//         slideImages[i].style.display = "none";  
//         caption[i].style.display = "none"
//     };
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     };
//     slideImages[slideIndex-1].style.display = "flex";
//     caption[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// };

// $(document).ready(function() {
//     var slideCount = $(".carouselImg img").length;
//     var slideWidth = $(".carouselImg img").width();
//     var slideHeight = $(".carouselImg img").height();
//     var sliderUIWidth = slideCount * slideWidth;

//     $(".carousel").css({width: slideWidth, height: slideHeight});
//     $(".carouselImg").css({width: sliderUIWidth, marginLeft: -slideWidth});
//     $(".carouselImg img:last-child").prependTo(".carouselImg");

//     function moveLeft() {
//         $("carouselImg img").animate({
//             left: + slideWidth
//         }, 200, function() {
//             $(".carouselImg img:last-child").prependTo(".carousel");
//             $(".carouselImg").css("left", "");
//         });
//     };

//     function moveRight() {
//         $("carouselImg img").animate({
//             left: - slideWidth
//         }, 200, function() {
//             $(".carouselImg img:first-child").prependTo(".carousel");
//             $(".carouselImg").css("left", "");
//         });
//     };

//     $(".prev").on("click", function() {
//         moveLeft();
//     });

//     $(".next").on("click", function() {
//         moveRight();
//     });
// });

// $(document).ready(function() {
//     var i= 0;
//     //when the next button is clicked on
//     $('.next').on("click", function(){
//         //increase the display picture index by 1
//         i = i + 1;
//         //if we are at the end of the image queue, set the index back to 0
//         if (i == $('img').length) {
//             i=0;
//         }
//         //set current image and previous image
//         var currentImg = $('.carouselImg img').eq(i);
//         var prevImg = $('.carouselImg img').eq(i-1);
//         //call function to animate the rotation of the images to the right
//         animateImage(prevImg, currentImg);	
//     });
//     //when the previous button is clicked on
//     $('.prev').on("click", function(){
//         //if we are at the beginning of the image queue, set the previous image to the first image and the current image to the last image of the queue
//         if (i==0) {	
//             prevImg = $('img').eq(0);
//             i=$('img').length-1;
//             currentImg = $('img').eq(i);
//         }
//         //decrease the display picture index by 1
//         else {
//             i=i-1;
//             //set current and previous images
//             currentImg = $('img').eq(i);
//             prevImg = $('img').eq(i+1);
//         }
//         //call function to animate the rotation of the images to the left
//         animateImageLeft(prevImg, currentImg);	
//     });
//     //function to animate the rotation of the images to the left
//     function animateImageLeft(prevImg, currentImg) {
//         //move the image to be displayed off the visible container to the right
//         currentImg.css({"left":"100%"});
//         //slide the image to be displayed from off the container onto the visible container to make it slide from the right to left
//         currentImg.animate({"left":"0%"}, 1000);
//         //slide the previous image off the container from right to left
//         prevImg.animate({"left":"-100%"}, 1000);
//     }
//     //function to animate the rotation of the images to the right
//     function animateImage(prevImg, currentImg) {
//         //move the image to be displayed off the container to the left
//         currentImg.css({"left":"-100%"});
//         //slide the image to be displayed from off the container onto the container to make it slide from left to right
//         currentImg.animate({"left":"0%"}, 1000);
//         //slide the image from on the container to off the container to make it slide from left to right
//         prevImg.animate({"left":"100%"}, 1000);	
//     }
// });