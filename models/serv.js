const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  descricao: { type: String, required: true },
});

module.exports = mongoose.model("serv", ToDoSchema);