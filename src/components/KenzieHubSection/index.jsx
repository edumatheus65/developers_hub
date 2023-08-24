import { useContext } from "react";
import { TechCard } from "../TechCard";
import styles from "./style.module.scss";
import { BsPlusSquare } from "react-icons/bs";
import { TechContext } from "../../providers/TechContext";
import { EditTechModal } from "../EditTechModal";

export const KenzieHubSection = () => {
  const { setCreateTechModal, editingTech } = useContext(TechContext);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.flexbox}>
          <h3 className="headerForms">Tecnologias</h3>
          <button title="addTechs" onClick={() => setCreateTechModal(true)}>
            <BsPlusSquare size={25} />
          </button>
        </div>
        {editingTech ? <EditTechModal /> : null}
        <TechCard />
      </div>
    </section>
  );
};
