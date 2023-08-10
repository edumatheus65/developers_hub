import { LoginForm } from "../../components/LoginForm";
import pageStyles from "../../styles/pageBox.module.scss";

export const Login = () => {
  return (
    <main className={pageStyles.pageBox}>
      <div className="container forms">
        <LoginForm />
      </div>
    </main>
  );
};
