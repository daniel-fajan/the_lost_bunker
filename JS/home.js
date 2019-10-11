
var slideIndex = 1;

mostrar_slide(slideIndex);


function trocar_slide(n)
{
  mostrar_slide(slideIndex += n);
}


function currentSlide(n)
{
  mostrar_slide(slideIndex = n);
}

function showSlides(n)
{
  var i;
  var slides = document.getElementsByClassName("slide");

  if (n > slides.length)
  {
    slideIndex = 1
  }

  if (n < 1)
  {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++)
  {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}




/*
var slideIndex = 0;
showSlides();

function showSlide() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}s