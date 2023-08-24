import { z } from "zod";

export const createTechSchema = z.object({
  title: z.string().nonempty("É necessário cadastrar uma tecnologia!"),
  status: z.string().nonempty("É necessário selecionar o status"),
});
