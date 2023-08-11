import { HeaderDashboard } from "../../components/HeaderDashboard";
import { KenzieHubSection } from "../../components/KenzieHubSection";
import styles from "./style.module.scss";

export const Dashboard = ({ user, userLogout }) => {
  return (
    <>
      <HeaderDashboard userLogout={userLogout} />
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
