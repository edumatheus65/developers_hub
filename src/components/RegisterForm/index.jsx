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
      setLoading(true);
      await apiKenzieHub.post("users", formData);
      toast.success("Conta criada com sucesso!");
      reset();
    } catch {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
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
        disabled={loading}
      />
      <Inputs
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
        error={errors.email}
        disabled={loading}
      />

      <InputPassword
        label="Senha"
        placeholder="Digite aqui sua senha"
        {...register("password")}
        error={errors.password}
        disabled={loading}
      />

      <InputPassword
        label="Confirmar Senha"
        placeholder="Confirme a sua senha"
        {...register("confirmPassword")}
        error={errors.confirmPassword}
        disabled={loading}
      />

      <Inputs
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        {...register("bio")}
        error={errors.bio}
        disabled={loading}
      />

      <Inputs
        label="Contato"
        type="text"
        placeholder="Opção de Contato"
        {...register("contact")}
        error={errors.contact}
        disabled={loading}
      />

      <Select
        label="Selecionar módulo"
        {...register("course_module")}
        error={errors.course_module}
        disabled={loading}
      >
        <option value="">Selecione um modulo</option>
        <option value="Primeiro Módulo (Introdução ao Frontend)">
          Primeiro Módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo Módulo (Frontend Intermediário)">
          Segundo Módulo (Frontend Intermediário)
        </option>
        <option value="Terceiro Módulo (Frontend Avançado)">
          Terceiro Módulo (Frontend Avançado)
        </option>
        <option value="Quarto Modulo (Introdução ao Backend)">
          Quarto Modulo (Introdução ao Backend)
        </option>
        <option value="Quinto Modulo (Backend Avançado)">
          Quinto Modulo (Backend Avançado)
        </option>
        <option value="Sexto Modulo (FullStack)">
          Sexto Modulo (FullStack)
        </option>
      </Select>

      <button className="buttonForm signup" type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>
    </form>
  );
};
