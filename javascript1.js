document
  .getElementById("curriculoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const rua = document.getElementById("rua").value;
    const cidade = document.getElementById("cidade").value;
    const telefone = document.getElementById("telefone").value;
    const escola = document.getElementById("escola").value;
    const duracao = document.getElementById("duracao").value;
    const experiencia = document.getElementById("experiencia").value;
    const dataAtual = document.getElementById("dataAtual").value;

    const curriculoHTML = `
      <h2>Curriculo</h2>
      <h3>Dados Pessoais</h3>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Rua:</strong> ${rua}</p>
      <p><strong>Cidade:</strong> ${cidade}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      
      <h3>Formação Acadêmica</h3>
      <p><strong>Escola:</strong> ${escola}</p>
      <p><strong>Duração:</strong> ${duracao}</p>
      
      <h3>Experiência Profissional</h3>
      <p>${experiencia}</p>
      
      <h3>Data Atual</h3>
      <p><strong>Data Atual:</strong> ${dataAtual}</p>
    `;

    document.getElementById("curriculoResultado").innerHTML = curriculoHTML;
  });
