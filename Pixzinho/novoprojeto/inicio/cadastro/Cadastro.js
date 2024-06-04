document.addEventListener("DOMContentLoaded", function() {
  var enviar = document.querySelector("#enviar");

  enviar.addEventListener("click", function(event) {
    event.preventDefault();

    var nomePes = document.querySelector("#nome").value;
    var data = document.querySelector("#nascimento").value;
    var cpf = document.querySelector("#cpf").value;
    var email = document.querySelector("#email").value;
    var tel = document.querySelector("#tel").value;
    var nomeA = document.querySelector("#nomeA").value;
    var tel2 = document.querySelector("#tel2").value;
    var email2 = document.querySelector("#email2").value;

    if (!nomePes || !data || !cpf || !email || !tel || !nomeA || !tel2 || !email2) {
      // Adiciona foco ao primeiro campo vazio para melhorar a navegação por teclado
      var firstEmptyField = document.querySelector("input:invalid");
      if (firstEmptyField) {
        firstEmptyField.focus();
      }

      window.alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    console.log("Nome do Responsável:", nomePes);
    console.log("Data de Nascimento:", data);
    console.log("CPF:", cpf);
    console.log("Email do Responsável:", email);
    console.log("Telefone do Responsável:", tel);
    console.log("Nome da ONG:", nomeA);
    console.log("Telefone ONG:", tel2);
    console.log("Email da ONG:", email2);

    // Mensagem de confirmação para leitores de tela
    var statusMessage = document.getElementById("statusMessage");
    statusMessage.textContent = "Seu cadastro foi realizado com sucesso!";
    statusMessage.focus();

    window.alert("Seu cadastro foi realizado com sucesso!");

    // Limpar os campos do formulário após o envio
    document.querySelector("#nome").value = "";
    document.querySelector("#nascimento").value = "";
    document.querySelector("#cpf").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#tel").value = "";
    document.querySelector("#nomeA").value = "";
    document.querySelector("#tel2").value = "";
    document.querySelector("#email2").value = "";
  });
});