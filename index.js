$(window).on('scroll', function() {
  if($(window).scrollTop()){
    $('header').addClass('nav-show');
  } else {
    $('header').removeClass('nav-show');
  }
})

const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".nav-bar");
  const navLinks = document.querySelector(".nav-bar li");

  hamburger.onclick = () => {
    navbar.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
      }
    });
    hamburger.classList.toggle("toggle");

  }
}

// use this for changing variable colors and making the theme light on click of toggle
// const themeSwitch = () =>{
//   document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');
// }


window.onload = () => navSlide();
