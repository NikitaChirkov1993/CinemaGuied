import React, { ChangeEvent } from "react";
import { InputAuthProps } from "../../../../types/types";
import style from "./inputAuth.module.css";



const InputAuth: React.FC<InputAuthProps> = ({
  img,
  type,
  placeholder,
  auth,
  setAuth,
  isName,
  setErrorMassage,
  errorMassage,
}) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuth((prev) => ({ ...prev, [isName]: e.target.value }));
      setErrorMassage((prev) => (
          {
              ...prev,
              flagGlobal: false,
              flagEmail: false,
              flagPass: false,
              errorMassage: ""
          }));
    // setFlagError(false);
    // setFlagPass(false);
  };

  const rootClasses = [style.auth];
  if (errorMassage?.flagGlobal && !auth) {
    rootClasses.push(style.active);
  }
  if (auth && !((errorMassage.flagPass) && (errorMassage.flagEmail)  )) {
    rootClasses.push(style.activeFocus);
  }
  if (errorMassage?.flagPass && (isName === "password" || isName === "passwordRepeat")) {
    rootClasses.push(style.activePass);
  }
  if (errorMassage?.flagEmail && (isName === "email" )) {
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
