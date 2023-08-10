import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Inputs = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className={styles.inputBox}>
      <label className="label ">{label}</label>
      <input ref={ref} {...rest} />
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
