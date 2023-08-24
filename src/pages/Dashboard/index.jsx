import { useContext } from "react";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { KenzieHubSection } from "../../components/KenzieHubSection";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";
import { BiUserCheck } from "react-icons/bi";
import { TechContext } from "../../providers/TechContext";
import { CreateTechModal } from "../../components/CreateTechModal";

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { setCreateTechModal, createTechModal } = useContext(TechContext);

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
        {createTechModal ? <CreateTechModal /> : null}
        <KenzieHubSection />
      </main>
    </>
  );
};
