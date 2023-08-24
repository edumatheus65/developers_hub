import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiKenzieHub } from "../services/api";
import { TechContext } from "./TechContext";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setTechList } = useContext(TechContext);

  const userLogout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@TOKEN");
    toast.warning("Deslogando...");
  };

  const pathname = window.location.pathname;

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await apiKenzieHub.get(`/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        setTechList(data.techs);
        navigate(pathname);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      getUser();
    }
  }, []);

  const userLoginRequest = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      const { data } = await apiKenzieHub.post("sessions", formData);
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      toast.success(`Bem-vindo(a),${data.user.name}`);
      setTechList(data.user.techs);
      navigate("/dashboard");
      reset();
    } catch {
      toast.error("Ops! Algo deu errado");
      setTimeout(() => {
        setLoading(false);
      }, 1300);
    }
  };

  const createNewUserRequest = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      await apiKenzieHub.post("users", formData);
      toast.success("Conta criada com sucesso!");
      setTimeout(() => {
        navigate("/");
        reset();
      }, 1300);
    } catch {
      toast.error("Ops! Algo deu errado");
      setTimeout(() => {
        setLoading(false);
      }, 1300);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        userLogout,
        userLoginRequest,
        createNewUserRequest,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
