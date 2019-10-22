
function escolher()
{
    if (personagem.value == 'homem')
    {
        foto_personagem.src = '../Imagens/personagem2.png';
        foto_personagem.style.width = '400px';
        foto_personagem.style.marginLeft = '-5VW';
        foto_personagem.style.marginTop = '5VW';
    }

    if (personagem.value == 'mulher')
    {
        foto_personagem.src = '../Imagens/personagem9.png';
        foto_personagem.style.width = '250px';
        foto_personagem.style.marginLeft = '0VW';
        foto_personagem.style.marginTop = '5VW';
    }

    if (personagem.value == '')
    {
        foto_personagem.src = '';
    }

    var nome_p = nome_personagem.value;
    var foto_p = foto_personagem.src;

    sessionStorage.nome = nome_p;
    sessionStorage.foto = foto_p;
}