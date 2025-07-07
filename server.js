const express = require("express");
require("./db");
const serv = require("./models/ToDo");
const app = express();
const PORT = 3000;

//middleware (meio termo entre a API e o client) para entender json em requisições
app.use(express.json());

app.get("/", (requisisao, resposta) => {
  resposta.status(200).send("Bem-vidno à API!");
});

app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

app.post("/tarefas", async (req, res) => {
  const { descricao } = req.body;
  if (!descricao) {
    return res.status(400).json({ erro: "Preencha a descrição" });
  }
  try {
    const novaTarefa = new serv({ descricao });
    await novaTarefa.save();
    res.status(201).json(novaTarefa);
  } catch (error) {}
  res.status(500).json({ erro: "Erro ao incluir tarefa" });
});

app.delete("/tarefas/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tarefa = await serv.findByIdAndDelete(id);
    if (!tarefa) {
      return res.status(404).json({ erro: "Tarefa não encontrada!" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: "Erro ao remover tarefa: " + error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
