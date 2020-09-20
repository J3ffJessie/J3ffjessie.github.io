//header scrolling effect
$(window).on('scroll', function() {
  if($(window).scrollTop()) {
      $('header').addClass('nav-show');
  } else {
      $('header').removeClass('nav-show');
  }
})

//hamburger
const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".nav-bar");
  const navlinks = document.querySelector(".nav-bar li");

  hamburger.onClick = () => {
      navbar.classList.toggle("nav-active");

      //Animation Links
      navLinks.forEach((link, index) => {
          if(link.style.animation) {
              link.style.animation = "";
          } else {
              link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7+1}s';
          }
      });
  }
}


window.onload = () => navSlide();