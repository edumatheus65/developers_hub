import { RegisterForm } from "../../components/RegisterForm";
import pageStyles from "../../styles/pageBox.module.scss";
import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";

export const Register = () => {
  return (
    <main className={pageStyles.pageBox}>
      <div className={styles.flexBox}>
        <div className="container">
          <div className={styles.imageButton}>
            <img src={Logo} alt="Logo kenzieHub" />
            <Link class="buttonNavigation returnToLogin" to="/">
              Voltar
              <IoMdReturnLeft />
            </Link>
          </div>
        </div>
        <div className="container forms">
          <div className={styles.formBox}>
            <RegisterForm />
          </div>
        </div>
      </div>
    </main>
  );
};
