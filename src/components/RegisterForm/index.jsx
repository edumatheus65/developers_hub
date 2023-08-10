import { useForm } from "react-hook-form";
import { Inputs } from "../Inputs";
import { Select } from "../Select";
import { registerFormSchema } from "./registerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputPassword } from "../InputPasswordLogin";
import { apiKenzieHub } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const createNewUserRequest = async (formData) => {
    try {
      await apiKenzieHub.post("users", formData);
      toast.success("Conta criada com sucesso!");
      reset();
    } catch {
      toast.error("Ops! Algo deu errado");
    }
  };

  const submitRegisterForm = (formData) => {
    createNewUserRequest(formData);
  };

  return (
    <form onSubmit={handleSubmit(submitRegisterForm)}>
      <Inputs
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
        error={errors.name}
      />
      <Inputs
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
        error={errors.email}
      />

      <InputPassword
        label="Senha"
        placeholder="Digite aqui sua senha"
        {...register("password")}
        error={errors.password}
      />

      <InputPassword
        label="Confirmar Senha"
        placeholder="Confirme a sua senha"
        {...register("confirmPassword")}
        error={errors.confirmPassword}
      />

      <Inputs
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        {...register("bio")}
        error={errors.bio}
      />

      <Inputs
        label="Contato"
        type="text"
        placeholder="Opção de Contato"
        {...register("contact")}
        error={errors.contact}
      />

      <Select
        label="Selecionar módulo"
        {...register("course_module")}
        error={errors.course_module}
      >
        <option value="">Selecione um modulo</option>
        <option value="Primeiro_Modulo">Primeiro Módulo</option>
        <option value="Segundo_Modulo">Segundo Módulo</option>
        <option value="Terceiro_Modulo">Terceiro Módulo</option>
        <option value="Quarto_Modulo">Quarto Módulo</option>
        <option value="Quinto_Modulo">Quinto Módulo</option>
        <option value="Sexto_Modulo">Sexto Módulo</option>
      </Select>

      <button className="buttonForm signup" type="submit">
        Cadastrar
      </button>
    </form>
  );
};
