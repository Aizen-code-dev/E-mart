$(document).ready(function (){
    $("#adc").load("add.html"); 
    $("#topnav").load("navbar.html");
    $("#botfoot").load("footer.html");
    $("#ads").load("ads.html");
    
  });
  //
  let currentSlide = 0;

  function showSlide(index) {
      const slides = document.querySelectorAll('.slides img');
      if (index >= slides.length) {
          currentSlide = 0;
      } else if (index < 0) {
          currentSlide = slides.length - 1;
      } else {
          currentSlide = index;
      }
      slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === currentSlide);
      });
  }
  
  function moveSlide(direction) {
      showSlide(currentSlide + direction);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
      showSlide(currentSlide);
  });