import React from "react";

interface InputType {
  className: string;
  type: string;
  placeholder: string;
  name: string;
  id: string;
  handleBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputType> = ({
  className,
  type,
  placeholder,
  name,
  id,
  handleBlur,
}) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      onBlur={handleBlur}
    />
  );
};

export default Input;
