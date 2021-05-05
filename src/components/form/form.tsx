import React from "react";

import Input from "../input/input";

const Form: React.FC = () => {
  return (
    <form action="#" className="sign-in__form">
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <Input
            type="email"
            placeholder="Email"
            name="user-email"
            id="user-email"
          />
          <label
            className="sign-in__label visually-hidden"
            htmlFor="user-email"
          >
            Email
          </label>
        </div>
        <div className="sign-in__field">
          <Input
            type="password"
            placeholder="Пароль"
            name="user-password"
            id="user-password"
          />
          <label
            className="sign-in__label visually-hidden"
            htmlFor="user-password"
          >
            Пароль
          </label>
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
