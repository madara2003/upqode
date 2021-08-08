const menuBtn = document.querySelector('.menu-burgger');
const burger = document.querySelector('.burger-menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    burger.style.position = 'absolute';
    burger.style.top = '100px';
    burger.style.display = 'flex';
    burger.style.marginLeft = '100px';

    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    burger.style.display = 'none';
    menuOpen = false;

  }
});
console.log(menuOpen);
$(document).ready(function(){
  $('.banner').slick({
   
    prevArrow: ' <button type="button" class="slick-prev slick-btn"><img src="../images/lol2.png"></button>',
    nextArrow:'<button type="button" class="slick-next slick-btn"><img src="../images/lol1.png"></button>',
    
  });
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.slider-nav',
    prevArrow: '<button type="button" class="slick-previous slick-button">NEXT —></button>',
    nextArrow:'<button type="button" class="slick-next-one slick-button"><— PREV </button>'
  });
  $('.slider-nav').slick({
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    fade: true
  
  });

  if(window.scrollY ) {
  var media = $("#stop-2").get(0);
   media.pause();
   media.currentTime = 0;
   var medias = $("#stop-1").get(0);
   medias.pause();
   medias.currentTime = 0;
   var mediass = $("#stop-3").get(0);
   mediass.pause();
   mediass.currentTime = 0;
  }
});

var intervalId = window.setInterval(function(){
  if(window.scrollY>0 ) {
        var media = $("#stop-2").get(0);
        media.pause();
        media.currentTime = 0;
        var medias = $("#stop-1").get(0);
        medias.pause();
        medias.currentTime = 0;
        var mediass = $("#stop-3").get(0);
        mediass.pause();
        mediass.currentTime = 0;
    }   
}, 1000);








