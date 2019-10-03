function funcao_cadastrar()
{
    if (nome_usuario.value == "")
    {
        alert(`Insira um nome de usuário válido para continuar`)
    }
    if (email.value == "")
    {
        alert(`Insira um e-mail válido para continuar`)
    }
    if (senha.value == "")
    {
        alert(`Insira uma senha válida para continuar`)
    }
    if (confirmacao_senha == "" || confirmacao_senha.value != senha.value)
    {
        alert ("As senhas não coincidem")
    }
    if (nome_usuario.value != "" && email.value != "" && senha.value != "" && confirmacao_senha.value != "" && confirmacao_senha.value == senha.value)
    {
        alert(`Parabéns! Cadastro concluído com sucesso!`)
    }
}