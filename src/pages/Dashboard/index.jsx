import { useContext } from "react";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { KenzieHubSection } from "../../components/KenzieHubSection";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <HeaderDashboard />
      <main>
        <div className={styles.dashboard}>
          <div className="container">
            <div className={styles.userInformation}>
              <h3 className="headerForms">Olá , {user?.name}</h3>
              <p className="paragraph">{user?.course_module}</p>
            </div>
          </div>
        </div>
        <KenzieHubSection />
      </main>
    </>
  );
};
