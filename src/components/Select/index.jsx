import { forwardRef } from "react";

export const Select = forwardRef(({ label, children, error, ...rest }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <select {...rest} ref={ref}>
        {children}
      </select>
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
