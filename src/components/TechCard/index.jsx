import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { TechList } from "./TechList";
import styles from "./style.module.scss";

export const TechCard = () => {
  const { techList } = useContext(TechContext);
  return (
    <ul className={styles.techList}>
      {techList.map((tech) => (
        <TechList key={tech.id} tech={tech} />
      ))}
    </ul>
  );
};
