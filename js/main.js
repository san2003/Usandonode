const API = "http://localhost:3000/tarefas";

//npm install cors
//usar cors para liberar de fazer post, get pull e delet
function adicionarTarefa() {
  const descricao = document.getElementById("descricao").value;
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ descricao }),
  });
}

function excluirTarefa() {
  const descricao = document.getElementById("descricao").value;
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ descricao }),
  });
}
