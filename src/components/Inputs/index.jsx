import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Inputs = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className={styles.inputBox}>
      <label className="label ">{label}</label>
      <input {...rest} ref={ref} />
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
