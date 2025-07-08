const express = require("express");
require("./config/db");
const tarefasRoutes = require("./routes/servRoutes");
const serv = require("./models/serv");
const app = express();
const PORT = 3000;
const cors = require("cors");
//da permições maximas pro cors
app.use(cors());
//middleware (meio termo entre a API e o client) para entender json em requisições
app.use(express.json());
app.get("/", (requisisao, resposta) => {
  resposta.status(200).send("Bem-vidno à API!");
});

app.use("/tarefas", tarefasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
