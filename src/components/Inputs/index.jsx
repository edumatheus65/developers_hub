import { forwardRef } from "react";

export const Inputs = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input {...rest} ref={ref} />
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
