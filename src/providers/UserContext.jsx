import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiKenzieHub } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const userLogout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@TOKEN");
    toast.warning("Deslogando...");
  };

  const userLoginRequest = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      const { data } = await apiKenzieHub.post("sessions", formData);
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      toast.success("Bem-vindo(a) a dashboard...");
      navigate("/dashboard");
      reset();
    } catch {
      toast.error("O e-mail e a senha não correspondem");
    } finally {
      setLoading(false);
    }
  };

  const createNewUserRequest = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      await apiKenzieHub.post("users", formData);
      toast.success("Conta criada com sucesso!");
      navigate("/");
      reset();
    } catch {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, userLogout, userLoginRequest, createNewUserRequest }}
    >
      {children}
    </UserContext.Provider>
  );
};
