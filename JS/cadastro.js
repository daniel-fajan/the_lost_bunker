

function funcao_cadastrar()
{
    if (nome_usuario.value == "" || nome_usuario.value.length < 3)
    {
        alert (`Insira um nome de usuário válido para continuar`);
    }
    if (email.value == "" || (email.value.indexOf('@') == -1) || (email.value.endsWith('.com.br') == -1) || (email.value.indexOf('.com') == -1))
    {
        alert (`Insira um e-mail válido para continuar`);
    }
    //if (email.value.indexOf('.com') == -1)
   // {
       // alert(`Insira um e-mail válido para continuar`);
 //   }
    if (senha.value == "" || senha.value.length < 5)
    {
        alert (`Insira uma senha válida para continuar`);
    }
    if (confirmacao_senha.value == "" || confirmacao_senha.value != senha.value)
    {
        alert ("As senhas não coincidem");
    }
    if ((nome_usuario.value.length >= 3) && (nome_usuario.value != "") && (email.value != "") && (senha.value != "") && (confirmacao_senha.value != "") && (confirmacao_senha.value == senha.value) && (email.value.endsWith('.com') || email.value.endsWith('.com.br')) && (email.value.indexOf('@') >= 0) && (email.value.length >= 9))
    {
        alert (`Parabéns! Cadastro concluído com sucesso!`);
    }
    else
    {
        alert ("Informações incorretas! Revise os campos")
    }
}