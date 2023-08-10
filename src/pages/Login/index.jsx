import { LoginForm } from "../../components/LoginForm";
import pageStyles from "../../styles/pageBox.module.scss";

export const Login = ({ setUser }) => {
  return (
    <main className={pageStyles.pageBox}>
      <div className="container forms">
        <LoginForm setUser={setUser} />
      </div>
    </main>
  );
};
