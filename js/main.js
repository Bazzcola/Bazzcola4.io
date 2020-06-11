$('.burger_menu').on('click', function(){
    $('.navigation').slideToggle();
});
$(document).ready(function() {
    $('.fancybox').fancybox({
        padding : 0,
        openEffect  : 'elastic'
    });
});

$('.popup-gallery').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
        enabled: true
    }
    // other options
});


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slider_item");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

  