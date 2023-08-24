import { AiOutlineClose } from "react-icons/ai";
import { Inputs } from "../Inputs";
import { useForm } from "react-hook-form";
import { Select } from "../Select";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTechSchema } from "./createTechSchema";

export const CreateTechModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createTechSchema),
  });
  const { setCreateTechModal, createTech } = useContext(TechContext);

  const submitNewTech = (formData) => {
    createTech(formData);
  };

  return (
    <div role="dialog">
      <div>
        <div>
          <h3>Cadastrar Tecnologia</h3>
        </div>
        <button
          title="fechar"
          aria-label="close"
          onClick={() => setCreateTechModal(false)}
        >
          <AiOutlineClose />
        </button>
        <form onSubmit={handleSubmit(submitNewTech)}>
          <Inputs
            label="Nome"
            type="text"
            placeholder="Cadastre sua tecnologia"
            {...register("title")}
            error={errors.title}
          />
          <Select
            label="Selecionar status"
            {...register("status")}
            error={errors.status}
          >
            <option value="">Selecione um status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <button className="buttonForm login" type="submit">
            Cadastrar Tecnologia
          </button>
        </form>
      </div>
    </div>
  );
};
