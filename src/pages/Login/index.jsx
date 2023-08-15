import { LoginForm } from "../../components/LoginForm";
import pageStyles from "../../styles/pageBox.module.scss";
import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";

export const Login = () => {
  return (
    <main className={pageStyles.pageBox}>
      <div className={styles.imageBox}>
        <img src={Logo} alt="Logo kenzieHub" />
        <div className="container forms">
          <div className={styles.formBox}>
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
};
