import { Inputs } from "../Inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { useForm } from "react-hook-form";
import { InputPassword } from "../InputPasswordLogin";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const { userLoginRequest } = useContext(UserContext);

  const submitLoginForm = (formData) => {
    userLoginRequest(formData, setLoading, reset);
  };

  return (
    <form onSubmit={handleSubmit(submitLoginForm)}>
      <h3 className="headerForms">Login</h3>
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
      <div>
        <button className="buttonForm login" type="submit">
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </div>
      <div>
        <p className="paragraph bolder">Ainda não possui uma conta?</p>
        <Link className="buttonForm moveToSignup" to="/register">
          Cadastre-se
        </Link>
      </div>
    </form>
  );
};
