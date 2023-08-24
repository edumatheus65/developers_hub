import { AiOutlineClose } from "react-icons/ai";
import { Inputs } from "../Inputs";
import { Select } from "../Select";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const EditTechModal = () => {
  const { editingTech, setEditingTech, updateTech } = useContext(TechContext);

  const { register, handleSubmit } = useForm({
    values: {
      title: editingTech.title,
      status: editingTech.status,
    },
  });

  const submitEditForm = (formData) => {
    updateTech(formData);
  };

  return (
    <div role="dialog">
      <div>
        <div>
          <h3>Tecnologia Detalhes</h3>
        </div>
        <button
          onClick={() => setEditingTech(null)}
          title="fechar"
          aria-label="close"
        >
          <AiOutlineClose />
        </button>
        <form onSubmit={handleSubmit(submitEditForm)}>
          <Inputs label="Nome" type="text" {...register("title")} />
          <Select label="Status" {...register("status")}>
            <option value="">Selecione um status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <button className="buttonForm signup" type="submit">
            Salvar alterações
          </button>
        </form>
      </div>
    </div>
  );
};
