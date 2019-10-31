

var save = sessionStorage.save;

function funcao_logar()
{
    if (save == undefined)
    {
        window.location.href = '../HTML/intro1.html';
    }

    else
    {
        window.location.href = save;
    }
}