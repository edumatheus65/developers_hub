import styles from "./style.module.scss";

export const KenzieHubSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.flexbox}>
          <h3 className="headerForms">
            Que pena! Estamos em desenvolvimento :(
          </h3>
          <p className="dashboard">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </div>
    </section>
  );
};
