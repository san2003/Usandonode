const serv = require("../models/serv");

exports.create = async (req, res) => {
  const { descricao } = req.body;
  try {
    const novaTarefa = new serv({ descricao });
    await novaTarefa.save();
    res.status(201).json(novaTarefa);
  } catch (error) {}
  res.status(500).json({ erro: "Erro ao incluir tarefa" });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { descricao } = req.body;
  try {
    const tarefas = await serv.findByIdAndUpdate(
      id,
      { descricao },
      { new: true }
    );
    res.json(tarefas);
  } 
  catch (error) {
    res.status(500).json({ erro: "Erro ao atualizar tarefa" });
  }
};
