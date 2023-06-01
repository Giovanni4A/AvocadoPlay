/*Slideshow*/
let slideIndex = [1,1];
let slideId = ["slide1", "slide2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

function alerta(){
  alert("este proyecto escolar fue realizado por: giovanniaramburo_a@cbtis4.edu.mx      alexandermolina_i@cbtis4.edu.mx")
}
/*Slideshow*/