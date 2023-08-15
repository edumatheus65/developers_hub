import { useContext } from "react";
import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const HeaderDashboard = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.flexbox}>
          <img src={Logo} alt="Logo KenzieHub" />
          <button
            className="buttonNavigation logout"
            onClick={() => userLogout()}
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
};
