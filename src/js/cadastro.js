// Valida o formulário e exibe um alerta com base no preenchimento dos campos
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('senha');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    if (nome && email && senha) {
      alert("Cadastro confirmado!");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
});
