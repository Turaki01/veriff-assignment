import React from "react";
import "./Button.css";

type ButtonProps = {
  children: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button className="Button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
