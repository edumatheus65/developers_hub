import { useContext } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { TechContext } from "../../../providers/TechContext";
import styles from "./style.module.scss";

export const TechList = ({ tech }) => {
  const { deleteTech, setEditingTech } = useContext(TechContext);

  return (
    <li className={styles.techItem}>
      <h3 className="techName">{tech.title}</h3>
      <div className={styles.techIcons}>
        <div className={styles.icons}>
          <p className="paragraph">{tech.status}</p>
          <div className={styles.iconsCard}>
            <button
              className="iconsColor"
              onClick={() => setEditingTech(tech)}
              title="Editar tecnologia"
              aria-label="edit"
            >
              <BiSolidPencil size={15} />
            </button>
            <button
              className="iconsColor"
              onClick={() => deleteTech(tech.id)}
              title="Deletar tecnologia"
              aria-label="remove"
            >
              <BsTrash size={16} />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
