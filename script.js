// PreLoader
const preloader = document.querySelector(".preloader");
var intervalId;

// calling timer on DOM load
window.addEventListener(
  "load",
  function () {
    intervalId = setInterval(fadeEffect, 300);
  },
  false
);

function fadeEffect() {
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.1;
  } else {
    preloader.parentNode.removeChild(preloader);
    clearInterval(intervalId);
  }
}

var sidenav = document.getElementById("sideNav");
var main = document.getElementById("main");
var menu = document.getElementById("menuBtn");
var footer = document.getElementById("footer");
var landingbar = document.getElementById("landingbar").querySelector(".desktop-page-bar");

function openNav() {
  sidenav.style.width = "250px";
  main.style.transform = "translateX(-250px)";
  main.style.transition = "transform 1s";
  footer.style.transform = "translateX(-250px)";
  footer.style.transition = "transform 1s";
  landingbar.style.transform= "translateX(-250px)";
  landingbar.style.transition = "transform 1s";
  menu.onclick = function () {
    closeNav();
  };
  menu.className = "far fa-times-circle";
}

function closeNav() {
  sidenav.style.width = "0";
  main.style.transform = "translateX(0)";
  main.style.transition = "transform 0.3s";
  footer.style.transform = "translateX(0)";
  footer.style.transition = "transform 0.3s";
  landingbar.style.transform= "translateX(0)";
  menu.onclick = function () {
    openNav();
  };
  menu.className = "fas fa-bars";
}

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});

// var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    // var currentScrollPos = window.pageYOffset;
    // if (prevScrollpos > currentScrollPos) {
    //   document.getElementById("top-navbar").style.top = "0";
    // } else {
    //   document.getElementById("top-navbar").style.top = "-80px";
    // }
    // prevScrollpos = currentScrollPos;
    document.getElementById("landingbar").style.background =
      "rgba(156, 181, 238,1)";
    document
      .getElementById("landingbar")
      .querySelector(".desktop-page-bar > ul").style.color = "white";
    document.getElementById("landingbar").style.height = "70px";
    document.getElementById("landingbar").style.paddingTop = "0px";
    document
      .getElementById("landingbar")
      .querySelector(".desktop-page-bar > ul").style.marginTop = "20px";
    document
      .getElementById("landingbar")
      .querySelector(".desktop-page-bar img").style.maxWidth = "80%";
  } else {
    // document.getElementById("top-navbar").style.top = "-80px";
    document.getElementById("landingbar").style.background =
      "rgba(255,0,150,0.0)";
    document.getElementById("landingbar").style.height = "90px";
    document.getElementById("landingbar").style.paddingTop = "20px";
    document
      .getElementById("landingbar")
      .querySelector(".desktop-page-bar > ul").style.marginTop = "0px";
    document
      .getElementById("landingbar")
      .querySelector(".desktop-page-bar img").style.maxWidth = "100%";
  }
};

// Initialize Swiper
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//Dark mode
function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}

var tilt = $(".js-tilt").tilt();
