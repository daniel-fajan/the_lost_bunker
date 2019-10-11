
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
  }

  if (contador == 2)
  {
    foto_slide.src = '../Imagens/floresta1.jpg';
  }

  if (contador == 3)
  {
    foto_slide.src = '../Imagens/cidade3.jpg';
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
  }

  if (contador == 2)
  {
    foto_slide.src = '../Imagens/floresta1.jpg';
  }

  if (contador == 3)
  {
    foto_slide.src = '../Imagens/cidade3.jpg';
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
    }

    if (contador == 2)
    {
      foto_slide.src = '../Imagens/floresta1.jpg';
    }

    if (contador == 3)
    {
      foto_slide.src = '../Imagens/cidade3.jpg';
    }

    contador ++;

  }, 3000);
}