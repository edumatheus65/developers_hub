import { createContext, useState } from "react";
import { apiKenzieHub } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);
  const [createTechModal, setCreateTechModal] = useState(false);
  const [editingTech, setEditingTech] = useState(null);

  const createTech = async (formData) => {
    try {
      const getToken = localStorage.getItem("@TOKEN");
      const { data } = await apiKenzieHub.post("users/techs", formData, {
        headers: {
          Authorization: `Bearer ${getToken} `,
        },
      });
      setTechList([...techList, data]);
      toast.success("Tecnologia adicionada com sucesso !!!");
      setCreateTechModal(false);
    } catch {
      toast.error("Não é possível criar uma tecnogia com o mesmo nome");
    }
  };

  const deleteTech = async (deletingId) => {
    try {
      const getToken = localStorage.getItem("@TOKEN");
      await apiKenzieHub.delete(`users/techs/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      const newTechList = techList.filter((tech) => {
        return tech.id !== deletingId;
      });
      setTechList(newTechList);
      toast.success("Tecnologia excluida com sucesso");
    } catch {
      toast.error("Não foi possível excluir a tecnologia!!!");
    }
  };

  const updateTech = async (formData) => {
    try {
      const getToken = localStorage.getItem("@TOKEN");
      const { data } = await apiKenzieHub.put(
        `users/techs/${editingTech.id}`,
        {
          status: formData.status,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );
      const newTechList = techList.map((tech) => {
        if (tech.id === editingTech.id) {
          return data;
        } else {
          return tech;
        }
      });
      setTechList(newTechList);
      setEditingTech(null);
      toast.success("Tecnologia atualizada com sucesso!!!");
    } catch {
      toast.error("Não foi possível atualizar a tecnologia");
    }
  };

  return (
    <TechContext.Provider
      value={{
        techList,
        setTechList,
        setCreateTechModal,
        createTechModal,
        createTech,
        deleteTech,
        editingTech,
        setEditingTech,
        updateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
