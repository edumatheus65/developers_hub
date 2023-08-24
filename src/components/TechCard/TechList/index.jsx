import { useContext } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { TechContext } from "../../../providers/TechContext";

export const TechList = ({ tech }) => {
  const { deleteTech, setEditingTech } = useContext(TechContext);

  return (
    <li>
      <h3>{tech.title}</h3>
      <div>
        <p>{tech.status}</p>
        <button
          onClick={() => setEditingTech(tech)}
          title="Editar tecnologia"
          aria-label="edit"
        >
          <BiSolidPencil />
        </button>
        <button
          onClick={() => deleteTech(tech.id)}
          title="Deletar tecnologia"
          aria-label="remove"
        >
          <BsTrash />
        </button>
      </div>
    </li>
  );
};
