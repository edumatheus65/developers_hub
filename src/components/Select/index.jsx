import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Select = forwardRef(({ label, children, error, ...rest }, ref) => {
  return (
    <div className={styles.selectBox}>
      <label className="label">{label}</label>
      <select {...rest} ref={ref}>
        {children}
      </select>
      <div className={styles.validationWarning}>
        {error ? <p className="paragraph failed">{error.message}</p> : null}
      </div>
    </div>
  );
});
