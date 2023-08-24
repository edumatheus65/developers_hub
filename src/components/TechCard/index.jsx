import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { TechList } from "./TechList";

export const TechCard = () => {
  const { techList } = useContext(TechContext);
  return (
    <ul>
      {techList.map((tech) => (
        <TechList key={tech.id} tech={tech} />
      ))}
    </ul>
  );
};
