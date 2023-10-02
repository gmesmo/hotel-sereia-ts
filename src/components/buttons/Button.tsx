import React, { MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  text: string;
  Icon?: ReactNode;
  to?: string; // Adicione a prop "to"
}

const Button: React.FC<ButtonProps> = ({ onClick, text, Icon, to }) => {
  if (to) {
    // Se a prop "to" estiver presente, renderize um Link do React Router
    return (
      <Link to={to} className={styles.main_link}>
        {Icon}
        {text}
      </Link>
    );
  }

  // Caso contrário, renderize um botão comum
  return (
    <button onClick={onClick} className={styles.main_link}>
      {Icon}
      {text}
    </button>
  );
};

export default Button;
