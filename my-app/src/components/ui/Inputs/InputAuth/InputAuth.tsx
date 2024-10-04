import React, { ChangeEvent } from "react";
import { InputAuthProps } from "../../../../types/types";
import style from "./inputAuth.module.css";



const InputAuth: React.FC<InputAuthProps> = ({
  img,
  placeholder,
  auth,
  setAuth,
  isName,
  setErrorMassage,
  flagError,
  setFlagError,
  type,
  flagPass,
  setFlagPass,
}) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuth((prev) => ({ ...prev, [isName]: e.target.value }));
    setErrorMassage((prev) => ({ ...prev, errorMassage: "" }));
    setFlagError(false);
    setFlagPass(false);
  };

  const rootClasses = [style.auth];
  if (flagError && !auth) {
    rootClasses.push(style.active);
  }
  if (auth && !(flagPass && (isName === "password" || isName === "passwordRepeat"))) {
    rootClasses.push(style.activeFocus);
  }
  if (flagPass && (isName === "password" || isName === "passwordRepeat")) {
    rootClasses.push(style.activePass);
  }

  return (
    <div className={rootClasses.join(" ")}>
      <img className={style.img__auth} src={img} alt="icon" />
      <input
        value={auth}
        onChange={handleChange}
        placeholder={placeholder}
        className={style.input__auth}
        type={type}
      />
    </div>
  );
};

export default InputAuth;
