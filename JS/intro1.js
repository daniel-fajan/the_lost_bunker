
var nome_p = sessionStorage.nome;
var foto_p = sessionStorage.sexo;

function info()
{
    nome_escolhido1.innerHTML = nome_p;
    nome_escolhido2.innerHTML = nome_p;
    nome_escolhido3.innerHTML = nome_p;
    
    if (foto_p == 'masc')
    {
        foto_personagem.src = '../Imagens/personagem2.png';
        foto_personagem.style.width = '650px';
        foto_personagem.style.marginLeft = '-8VW';
        foto_personagem.style.marginTop = '2VW';
        sessionStorage.foto = '../Imagens/personagem2.png'
    }

    else
    {
        foto_personagem.src = '../Imagens/personagem9.png';
        foto_personagem.style.width = '390px';
        foto_personagem.style.marginLeft = '5VW';
        foto_personagem.style.marginTop = '2VW';
        sessionStorage.foto = '../Imagens/personagem9.png'
    }
}

function avancar()
{
    window.location.href = 'intro2.html';
}