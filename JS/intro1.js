
var foto_p = '';
var nome_p = '';

function escolher()
{
    if (personagem.value == 'homem')
    {
        foto_personagem.src = '../Imagens/personagem2.png';
        foto_personagem.style.width = '500px';
        foto_personagem.style.marginLeft = '-5VW';
        foto_personagem.style.marginTop = '2VW';
    }

    if (personagem.value == 'mulher')
    {
        foto_personagem.src = '../Imagens/personagem9.png';
        foto_personagem.style.width = '300px';
        foto_personagem.style.marginLeft = '5VW';
        foto_personagem.style.marginTop = '2VW';
    }

    if (personagem.value == '')
    {
        foto_personagem.src = '';
    }

    nome_p = nome_personagem.value;
    foto_p = foto_personagem.src;

    sessionStorage.nome = nome_p;
    sessionStorage.foto = foto_p;
}

function confirmar()
{
    if (nome_p == '')
    {
        alert ('Digite um nome')
    }

    else
    {
        nome_escolhido1.innerHTML = nome_p;
        nome_escolhido2.innerHTML = nome_p;
        div_introducao.style.display = 'block';
    }
}

function avancar()
{
    nome_p != '' && foto_p != '' ? window.location.href = 'intro2.html' : alert ("Você não criou seu personagem");
}