// PreLoader
const preloader = document.querySelector('.preloader');
var intervalId;

// calling timer on DOM load
window.addEventListener ('load', function () {
  intervalId = setInterval (fadeEffect, 300);
}, false);

function fadeEffect () {
  if(!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if(preloader.style.opacity > 0){
    preloader.style.opacity -= 0.1;
  } else{
    preloader.parentNode.removeChild(preloader)
    clearInterval(intervalId);
  }
}

var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
sideNav.style.right = "-250px"
menuBtn.onclick = function(){
  if(sideNav.style.right == "-250px"){
    sideNav.style.right = "0"
  }
  else{
    sideNav.style.right = "-250px"
  }
}

var scroll = new SmoothScroll('a[href*="#"]',{
  speed: 500,
  speedAsDuration: true
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("top-navbar").style.top = "0";
  } else {
    document.getElementById("top-navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
//Dark mode
function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}