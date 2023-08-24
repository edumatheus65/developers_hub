import { AiOutlineClose } from "react-icons/ai";
import { Inputs } from "../Inputs";
import { Select } from "../Select";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { editTechSchema } from "./editTechSchema";
import styles from "./style.module.scss";

export const EditTechModal = () => {
  const { editingTech, setEditingTech, updateTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: editingTech.title,
      status: editingTech.status,
    },
    resolver: zodResolver(editTechSchema),
  });

  const submitEditForm = (formData) => {
    updateTech(formData);
  };

  return (
    <div className={styles.modalOverlay} role="dialog">
      <div className={styles.modalBox}>
        <div className={styles.ModalHeaders}>
          <h3 className="headerForms modalTitle">Tecnologia Detalhes</h3>

          <button
            className="modalClose"
            onClick={() => setEditingTech(null)}
            title="fechar"
            aria-label="close"
          >
            <AiOutlineClose size={17} />
          </button>
        </div>
        <form
          onSubmit={handleSubmit(submitEditForm)}
          className={styles.formModal}
        >
          <Inputs label="Nome" type="text" {...register("title")} readonly />
          <Select label="Status" {...register("status")} error={errors.status}>
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
