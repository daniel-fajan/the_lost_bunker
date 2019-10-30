
function mostrar1()
{
    espec_resis.style.display = 'none';
    espec_reboc.style.display = 'block';
}

function mostrar2()
{
    espec_reboc.style.display = 'none';
    espec_resis.style.display = 'block';
}

function confirmar1()
{
    sessionStorage.vida = 4400;
    sessionStorage.dano = 600;
    window.location.href = './fase1.html';
}

function confirmar2()
{
    sessionStorage.vida = 6500;
    sessionStorage.dano = 400;
    window.location.href = './fase1.html';
}