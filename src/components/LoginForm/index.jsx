import { Inputs } from "../Inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { useForm } from "react-hook-form";
import { InputPassword } from "../InputPasswordLogin";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const submitLoginForm = (formData) => {
    console.log(formData);
    reset();
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
        <button type="submit">Entrar</button>
      </div>
      <div>
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </form>
  );
};
