import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";

export const HeaderDashboard = ({ userLogout }) => {
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
