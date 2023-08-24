import { AiOutlineClose } from "react-icons/ai";
import { Inputs } from "../Inputs";
import { useForm } from "react-hook-form";
import { Select } from "../Select";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const CreateTechModal = () => {
  // {
  //   "title":" Angular",
  //   "status" :"Iniciante"
  // }

  const { register, handleSubmit } = useForm();
  const { setCreateTechModal } = useContext(TechContext);

  const submitNewTech = (formData) => {};

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
          />
          <Select label="Selecionar status" {...register("status")}>
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
