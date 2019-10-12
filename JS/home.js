
var contador = 1;

function trocar_slide_a()
{
  contador ++;

  if (contador > 3)
  {
    contador = 1;
  }

  if (contador == 1)
  {
    foto_slide.src = '../Imagens/bunker1.jpg';
    texto_slide.innerHTML = 'lorem ipsum dolor sit amet decoder fenur termna';
  }

  if (contador == 2)
  {
    foto_slide.src = '../Imagens/floresta1.jpg';
    texto_slide.innerHTML = 'os castelos caem tudo na vida vem como a vida vai';
  }

  if (contador == 3)
  {
    foto_slide.src = '../Imagens/cidade3.jpg';
    texto_slide.innerHTML = 'as mascaras caem, os amigos se traem';
  }
}

function trocar_slide_v()
{
  contador --;

  if (contador < 1)
  {
    contador = 3;
  }

  if (contador == 1)
  {
    foto_slide.src = '../Imagens/bunker1.jpg';
    texto_slide.innerHTML = 'lorem ipsum dolor sit amet decoder fenur termna';
  }

  if (contador == 2)
  {
    foto_slide.src = '../Imagens/floresta1.jpg';
    texto_slide.innerHTML = 'os castelos caem tudo na vida vem como a vida vai';
  }

  if (contador == 3)
  {
    foto_slide.src = '../Imagens/cidade3.jpg';
    texto_slide.innerHTML = 'as mascaras caem, os amigos se traem'; 
  }
}

function passar_slide_tempo()
{
  setInterval (function()
  {
    if (contador > 3)
    {
      contador = 1;
    }

    if (contador == 1)
    {
      foto_slide.src = '../Imagens/bunker1.jpg';
      texto_slide.innerHTML = 'lorem ipsum dolor sit amet decoder fenur termna';
    }

    if (contador == 2)
    {
      foto_slide.src = '../Imagens/floresta1.jpg';
      texto_slide.innerHTML = 'os castelos caem tudo na vida vem como a vida vai';
    }

    if (contador == 3)
    {
      foto_slide.src = '../Imagens/cidade3.jpg';
      texto_slide.innerHTML = 'as mascaras caem, os amigos se traem';
    }

    contador ++;

  }, 3000);
}