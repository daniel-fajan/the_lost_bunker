

function tela_1()
{
    if (sessionStorage.foto.endsWith('2.png'))
    {
        foto_p.src = sessionStorage.foto;
        foto_p.style.width = '30VW';
        foto_p.style.marginTop = '17VW';
        foto_p.style.marginLeft = '-5VW';
    }

    else
    {
        foto_p.src = sessionStorage.foto;
        foto_p.style.width = '18VW';
        foto_p.style.marginTop = '17VW';
        foto_p.style.marginLeft = '2VW';
    }
}

var contador = 1;

function avancar()
{
    if (contador == 1)
    {
        texto_1.style.display = 'block';
        texto_2.style.display = 'none';
        texto_3.style.display = 'none';
    }

    else if (contador == 2)
    {
        texto_1.style.display = 'none';
        texto_2.style.display = 'block';
        texto_3.style.display = 'none';
    }

    else if (contador == 3)
    {
        texto_1.style.display = 'none';
        texto_2.style.display = 'none';
        texto_3.style.display = 'block';
    }

    
}