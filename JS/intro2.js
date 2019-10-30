
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
    sessionStorage.vida = 480;
    sessionStorage.dano = 600;
    window.location.href = './fase1.html';
}

function confirmar2()
{
    sessionStorage.vida = 600;
    sessionStorage.dano = 480;
    window.location.href = './fase1.html';
}