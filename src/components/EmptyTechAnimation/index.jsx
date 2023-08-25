import empty from "../../assets/EmptyTech.svg";
import styles from "./style.module.scss";

export const EmptyTechAnimation = () => {
  return (
    <div className={styles.emptyAnimation}>
      <img src={empty} alt="animation" />
    </div>
  );
};
