import { z } from "zod"; 

export const editTechSchema = z.object({
  status: z.string().nonempty("É possível apenas editar o seu status!"),
});
