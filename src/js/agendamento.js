// Mostra ou oculta os detalhes de tele-busca com base na seleção do checkbox
document.addEventListener('DOMContentLoaded', function () {
  const teleBuscaCheckbox = document.getElementById('tele-busca');
  const teleBuscaDetalhes = document.querySelector('.tele-busca-detalhes');
  const form = document.getElementById('agendamento-form');

  teleBuscaCheckbox.addEventListener('change', function () {
    if (this.checked) {
      teleBuscaDetalhes.style.display = 'block'; 
    } else {
      teleBuscaDetalhes.style.display = 'none'; 
    }
  });

  // Valida o formulário e exibe um alerta com base no preenchimento dos campos
  form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    const endereco = teleBuscaCheckbox.checked ? document.getElementById('endereco').value : '';
    const horarioColeta = teleBuscaCheckbox.checked ? document.getElementById('horario-coleta').value : '';

    if (servico && data && hora && (!teleBuscaCheckbox.checked || (endereco && horarioColeta))) {
      alert("Agendamento confirmado!"); 
    } else {
      alert("Por favor, preencha todos os campos."); 
    }
  });
});


