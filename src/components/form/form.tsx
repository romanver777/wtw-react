import React, { useState } from "react";

import Input from "../input/input";
import { validateEmail, validatePass } from "../../helpers/helpers";

interface User {
  email?: string;
  pass?: string;
}

const Form: React.FC = () => {
  const [user, setUser] = useState<User>({});
  const [errors, setErrors] = useState<User>({});
  const [errorUser, setErrorUser] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();

    const { name, value } = e.target;
    const inputErrors = { ...errors };

    switch (name) {
      case "email":
        if (validateEmail(value)) {
          setUser({ ...user, email: value });
          delete inputErrors[name];
        } else {
          inputErrors[name] = "Введите правильный email";
          if (errorUser) setErrorUser(false);
        }
        break;
      case "pass":
        if (validatePass(value)) {
          setUser({ ...user, pass: value });
          delete inputErrors[name];
        } else {
          inputErrors[name] = "Введите пароль длиной от 4 до 15 символов";
          if (errorUser) setErrorUser(false);
        }
        break;
      default:
        break;
    }
    setErrors(inputErrors);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (
      Object.entries(user).length === 2 &&
      Object.entries(errors).length === 0
    ) {
      setErrorUser(true);
    }
  };

  return (
    <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
      <div className="sign-in__error-txt">
        {errorUser && "Пользователь не найден"}
      </div>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <Input
            className={
              errors && errors.email
                ? "sign-in__input sign-in__input--error"
                : "sign-in__input"
            }
            type="email"
            placeholder="Email"
            name="email"
            id="user-email"
            handleBlur={handleInputChange}
          />
          <label className="sign-in__label visually-hidden" htmlFor="email">
            Email
          </label>
        </div>
        <div className="sign-in__error-txt">{errors.email}</div>
        <div className="sign-in__field">
          <Input
            className={
              errors && errors.pass
                ? "sign-in__input sign-in__input--error"
                : "sign-in__input"
            }
            type="password"
            placeholder="Пароль"
            name="pass"
            id="user-password"
            handleBlur={handleInputChange}
          />
          <label className="sign-in__label visually-hidden" htmlFor="pass">
            Пароль
          </label>
          <div className="sign-in__error-txt">{errors.pass}</div>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">
          Войти
        </button>
      </div>
    </form>
  );
};

export default Form;
