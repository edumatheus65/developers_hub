import { Inputs } from "../Inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { useForm } from "react-hook-form";
import { InputPassword } from "../InputPasswordLogin";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { apiKenzieHub } from "../../services/api";

export const LoginForm = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userLoginRequest = async (formData) => {
    try {
      setLoading(true);
      const { data } = await apiKenzieHub.post("sessions", formData);
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      toast.success("Bem-vindo a dashboard...");
      navigate("/dashboard");
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
      <h3>Login</h3>
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
        <p>Ainda não possui uma conta?</p>
        <Link className="buttonForm moveToSignup" to="/register">
          Cadastre-se
        </Link>
      </div>
    </form>
  );
};
