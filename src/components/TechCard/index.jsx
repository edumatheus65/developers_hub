import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { TechList } from "./TechList";
import styles from "./style.module.scss";
import { EmptyTechAnimation } from "../EmptyTechAnimation";

export const TechCard = () => {
  const { techList } = useContext(TechContext);

  return (
    <>
      {techList.length > 0 ? (
        <ul className={styles.techList}>
          {techList.map((tech) => (
            <TechList key={tech.id} tech={tech} />
          ))}
        </ul>
      ) : (
        <>
          <h2 className={styles.emptyTech}>
            A lista de tecnologias está vazia
          </h2>
          <EmptyTechAnimation />
        </>
      )}
    </>
  );
};
