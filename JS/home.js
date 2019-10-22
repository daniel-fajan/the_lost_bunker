
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
    texto_slide.innerHTML = 'Jogue online de onde e quando quiser';
    texto_slide.style.marginLeft = '-88%';
  }

  if (contador == 2)
  {
    foto_slide.src = '../Imagens/floresta1.jpg';
    texto_slide.innerHTML = 'O mais jogado do Brasil';
    texto_slide.style.marginLeft = '-74%';
  }

  if (contador == 3)
  {
    foto_slide.src = '../Imagens/cidade3.jpg';
    texto_slide.innerHTML = 'Faça sua conta grátis agora';
    texto_slide.style.marginLeft = '-78%';
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
    texto_slide.innerHTML = 'Jogue online de onde e quando quiser';
    texto_slide.style.marginLeft = '-88%';
  }

  if (contador == 2)
  {
    foto_slide.src = '../Imagens/floresta1.jpg';
    texto_slide.innerHTML = 'O mais jogado do Brasil';
    texto_slide.style.marginLeft = '-74%';
  }

  if (contador == 3)
  {
    foto_slide.src = '../Imagens/cidade3.jpg';
    texto_slide.innerHTML = 'Faça sua conta grátis agora';
    texto_slide.style.marginLeft = '-78%';
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
      texto_slide.innerHTML = 'Jogue online de onde e quando quiser';
      texto_slide.style.marginLeft = '-88%';
    }

    if (contador == 2)
    {
      foto_slide.src = '../Imagens/floresta1.jpg';
      texto_slide.innerHTML = 'O mais jogado do Brasil';
      texto_slide.style.marginLeft = '-74%';
    }

    if (contador == 3)
    {
      foto_slide.src = '../Imagens/cidade3.jpg';
      texto_slide.innerHTML = 'Faça sua conta grátis agora';
      texto_slide.style.marginLeft = '-78%';
    }

    contador ++;

  }, 3000);
}