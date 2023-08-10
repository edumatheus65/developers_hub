import { forwardRef, useEffect, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const InputPassword = forwardRef(({ error, label, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      <label className="label">{label}</label>
      <input type={isHidden ? "password" : "text"} ref={ref} {...rest} />
      <button type="button" onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
      </button>
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
