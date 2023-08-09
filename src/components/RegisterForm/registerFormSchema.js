import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().nonempty("Nome é obrigatório"),
    email: z
      .string()
      .nonempty("E-mail é obrigatório")
      .email("Forneça um e-mail válido"),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "São necessários pelo menos 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/.*\d.*/, "É necessário pelo menos um número"),
    confirmPassword: z.string().nonempty("É obrigatório confirmar a senha"),
    bio: z.string().nonempty("É obrigatório preencher a bio"),
    contact: z.string().nonempty("É obrigatório preencher o campo de contato"),
    course_module: z.string.nonempty("É obrigatório escolher o seu módulo"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
