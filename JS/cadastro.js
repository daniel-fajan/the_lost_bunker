
var var_nome = '';
var var_sexo = '';
var var_email = '';
var var_senha = '';

function funcao_cadastrar()
{
    if ((nome_usuario.value.length >= 3) && (nome_usuario.value != "") && (email.value != "") && (senha.value.length >= 5) && (senha.value != "") && (confirmacao_senha.value != "") && (confirmacao_senha.value == senha.value) && (email.value.endsWith('.com') || email.value.endsWith('.com.br')) && (email.value.indexOf('@') >= 0) && (email.value.length >= 9) && (sexo.value != ''))
    {
        var_nome = nome_usuario.value;
        var_sexo = sexo.value;
        var_email = email.value;
        var_senha = senha.value;

        sessionStorage.nome = var_nome;
        sessionStorage.sexo = var_sexo;

        window.location.href = "../HTML/login.html"
    }

    else
    {
        alert ("Informações incorretas! Revise os campos")
    }
}