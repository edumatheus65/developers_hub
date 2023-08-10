import { RegisterForm } from "../../components/RegisterForm";
import pageStyles from "../../styles/pageBox.module.scss";

export const Register = () => {
  return (
    <main className={pageStyles.pageBox}>
      <div className="container forms">
        <RegisterForm />
      </div>
    </main>
  );
};
