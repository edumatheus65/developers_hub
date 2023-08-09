import { useForm } from "react-hook-form";
import { Inputs } from "../Inputs";
import { Select } from "../Select";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form>
      <Inputs
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
      />
      <Inputs
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <Inputs
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <Inputs
        label="Confirmar Senha"
        type="password"
        placeholder="Confirme a sua senha"
        {...register("confirmPassword")}
      />

      <Inputs
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        {...register("bio")}
      />

      <Inputs
        label="Contato"
        type="text"
        placeholder="Opção de Contato"
        {...register("contact")}
      />

      <Select label="Selecionar módulo" {...register("course_module")}>
        <option value="">Selecione um modulo</option>
        <option value="Primeiro_Modulo">Primeiro Módulo</option>
        <option value="Segundo_Modulo">Segundo Módulo</option>
        <option value="Terceiro_Modulo">Terceiro Módulo</option>
        <option value="Quarto_Modulo">Quarto Módulo</option>
        <option value="Quinto_Modulo">Quinto Módulo</option>
        <option value="Sexto_Modulo">Sexto Módulo</option>
      </Select>
    </form>
  );
};
