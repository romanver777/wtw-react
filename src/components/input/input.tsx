import React from "react";

interface InputType {
  type: string;
  placeholder: string;
  name: string;
  id: string;
}

const Input: React.FC<InputType> = ({ type, placeholder, name, id }) => {
  return (
    <input
      className="sign-in__input"
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
    />
  );
};

export default Input;
