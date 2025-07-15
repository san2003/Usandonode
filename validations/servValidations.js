const Joi = require("joi");

const servSchema = Joi.object({
  descricao: Joi.string().min(3).required().messages({
    "string.base": "Descrição deve ser em texto",
    "string.empty": "Descrição obrigatoria",
    "string.min": "Descrição deve ter pelo menos 3 caracteres",
    "any.required": "Descrição obrigatória",
  }),
});

module.exports = { servSchema };