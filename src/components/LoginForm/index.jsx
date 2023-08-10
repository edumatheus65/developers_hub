import { Inputs } from "../Inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { useForm } from "react-hook-form";
import { InputPassword } from "../InputPasswordLogin";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { apiKenzieHub } from "../../services/api";

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

  const userLoginRequest = async (formData) => {
    try {
      setLoading(true);
      const { data } = await apiKenzieHub.post("sessions", formData);
      console.log(data);
    } catch {
      toast.error("O e-mail e a senha não correspondem");
    } finally {
      setLoading(false);
    }
  };

  const submitLoginForm = (formData) => {
    userLoginRequest(formData);
  };

  return (
    <form onSubmit={handleSubmit(submitLoginForm)}>
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
      <div>
        <button className="buttonForm login" type="submit">
          Entrar
        </button>
      </div>
      <div>
        <p>Ainda não possui uma conta?</p>
        <Link className="buttonForm moveToSignup" to="/register">
          Cadastre-se
        </Link>
      </div>
    </form>
  );
};
