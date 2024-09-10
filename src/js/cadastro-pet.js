// Valida o formulário e exibe um alerta com base no preenchimento dos campos
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('cadastro-form');
  const nomeInput = document.getElementById('nome');
  const tipoInput = document.getElementById('tipo');
  const racaInput = document.getElementById('raca');
  const temperamentoInput = document.getElementById('temperamento');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = nomeInput.value.trim();
    const tipo = tipoInput.value.trim();
    const raca = racaInput.value.trim();
    const temperamento = temperamentoInput.value.trim();

    if (nome && tipo && raca && temperamento) {
      alert("Cadastro confirmado!");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
});

