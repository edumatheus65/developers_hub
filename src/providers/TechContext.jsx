import { createContext, useState } from "react";
import { apiKenzieHub } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);
  const [createTechModal, setCreateTechModal] = useState(false);

  // Criando um estado para O objeto que está sendo editado
  // Começará nulo, pois no momento nada será editado

  const [editingTech, setEditingTech] = useState(null);

  console.log(editingTech);

  // Create Tech
  // title,status(formData),token

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

  // Delete Tech
  // Precisa do deleting id como parâmetro
  // precisa do token
  // Faremos o filtro para atualizar o front-End

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
      // Atualizando o front-end:
      setTechList(newTechList);
      toast.success("Tecnologia excluida com sucesso");
    } catch (error) {
      console.log(error);
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
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
