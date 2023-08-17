import { useContext } from "react";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { KenzieHubSection } from "../../components/KenzieHubSection";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";
import { BiUserCheck } from "react-icons/bi";

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <HeaderDashboard />
      <main>
        <div className={styles.dashboard}>
          <div className="container">
            <div className={styles.userInformation}>
              <h3 className="headerForms">
                Olá , {user?.name} <BiUserCheck className={styles.user} />
              </h3>
              <p className="paragraph">{user?.course_module}</p>
            </div>
          </div>
        </div>
        <KenzieHubSection />
      </main>
    </>
  );
};
