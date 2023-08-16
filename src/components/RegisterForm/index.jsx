import { useForm } from "react-hook-form";
import { Inputs } from "../Inputs";
import { Select } from "../Select";
import { registerFormSchema } from "./registerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputPassword } from "../InputPasswordLogin";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import Spinner from "../../assets/spinner.svg";

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

  const { createNewUserRequest } = useContext(UserContext);

  const submitRegisterForm = (formData) => {
    createNewUserRequest(formData, setLoading, reset);
  };

  return (
    <form onSubmit={handleSubmit(submitRegisterForm)}>
      <h3 className="headerForms">Crie sua conta</h3>
      <p className="paragraph">Rápido e grátis,vamos nessa</p>
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

      <button
        to="/"
        className="buttonForm signup"
        type="submit"
        disabled={loading}
      >
        {loading ? <img className="icon" src={Spinner} /> : "Cadastrar"}
      </button>
    </form>
  );
};
