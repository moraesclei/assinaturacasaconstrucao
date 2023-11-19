// function updateSignature() {
//     // Capturar os valores dos campos
//     const nome = document.getElementById('nome').value;
//     const funcao = document.getElementById('funcao').value;
//     const phone = document.getElementById('phone').value;
//     const email = document.getElementById('email').value;

//     // Atualizar o conteúdo das divs na assinatura
//     document.querySelector('.nome').innerText = nome;
//     document.querySelector('.funcao').innerText = funcao;
//     document.querySelector('.telefone').innerText = 'Fone: (92) ' + phone;
//     document.querySelector('.email').innerText = 'E-mail: ' + email;
// }

function updateSignature() {
    // Capturar os valores dos campos
    const nome = document.getElementById('nome').value;
    const funcao = document.getElementById('funcao').value;
    const phone = document.getElementById('phone').value;
    const phone2 = document.getElementById('phone2').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;
    const complemento = document.getElementById('complemento').value;

    // Atualizar o conteúdo das divs na assinatura
    document.querySelector('.nome').innerText = nome;
    document.querySelector('.funcao').innerText = funcao;
    document.querySelector('.telefone').innerText = 'Fone: (92) ' + phone;
    document.querySelector('.telefone2').innerText = 'Fone: (92) ' + phone2;
    document.querySelector('.email').innerText = 'E-mail: ' + email;
    document.querySelector('.endereco').innerText = 'Endereço: ' + endereco;
    document.querySelector('.complemento').innerText = complemento;

}

function limparCampos() {
    // Limpar os campos de entrada
    document.getElementById("nome").value = "";
    document.getElementById("funcao").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("phone2").value = "";
    document.getElementById("email").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("complemento").value = "";

    // Limpar os dados na assinatura.jpg
    document.getElementById("assinaturaNome").innerText = "";
    document.getElementById("assinaturaFuncao").innerText = "";
    document.getElementById("assinaturaTelefone").innerText = "Fone: (92)";
    document.getElementById("assinaturaTelefone2").innerText = "Fone: (92)";
    document.getElementById("assinaturaEmail").innerText = "E-mail:";
    document.getElementById("assinaturaEndereco").innerText = "Endereço:";
    document.getElementById("assinaturaComplemento").innerText = "";

    // Atualizar a imagem da assinatura
    document.getElementById("signatureImage").src = "assinatura2.jpeg";
}