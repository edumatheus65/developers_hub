import { BiSolidPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

export const TechList = ({ tech }) => {
  return (
    <li>
      <h3>{tech.title}</h3>
      <div>
        <p>{tech.status}</p>
        <button title="Editar tecnologia" aria-label="edit">
          <BiSolidPencil />
        </button>
        <button title="Deletar tecnologia" aria-label="remove">
          <BsTrash />
        </button>
      </div>
    </li>
  );
};
