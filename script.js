// PreLoader
const preloader = document.querySelector('.preloader');

const fadeEffect = setInterval(() => {

    if(!preloader.style.opacity) {
        preloader.style.opacity = 1;
    }
    if(preloader.style.opacity > 0){
        preloader.style.opacity -= 0.1;
    } else{
        preloader.parentNode.removeChild(preloader)
        clearInterval(fadeEffect);
    }
}, 300)

// calling timer on DOM load
window.addEventListener('load', fadeEffect);

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