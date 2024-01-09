// const Joi = require("joi")
const z = require("zod");

const registerSchema = z.object({
  name: z.string(),
  password: z.string(),
  email: z.string(),
});

// const loginSchema = z.object({
//   email: z
//     .string({
//       required_error: "El email es requerido",
//     }),
//     // .email({
//     //   message: "No es un correo válido",
//     // }),
//   password: z
//     .string({
//       required_error: "El password es requerido",
//     })
//     // .min(6, {
//     //   message: "Debe tener al menos 6 caracteres",
//     // }),

module.exports = registerSchema;
