import { createContext, useState } from "react";
import { apiKenzieHub } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);
  const [createTechModal, setCreateTechModal] = useState(false);

  // Create Tech
  // title,status(formData),token

  const createTech = async (formData) => {
    const getToken = localStorage.getItem("@TOKEN");
    try {
      const { data } = await apiKenzieHub.post("users/techs", formData, {
        headers: {
          Authorization: `Bearer ${getToken} `,
        },
      });
      setTechList([...techList, data]);
      setCreateTechModal(false);
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
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
