document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const comentario = document.getElementById("comentario").value;

    const resultadoHTML = `
        <h2>Dados do Formulário:</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Comentário:</strong> ${comentario}</p>
    `;

    document.getElementById("resultado").innerHTML = resultadoHTML;
  });
