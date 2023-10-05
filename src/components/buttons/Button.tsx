import { CSSProperties, MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  text?: string;
  Icon?: ReactNode;
  to?: string;
  customBg?: string;
}

function Button({ onClick, text, Icon, to }: ButtonProps) {
  if (to) {
    // Se a prop "to" estiver presente, renderize um Link do React Router
    return (
      <Link to={to}>
        <button className={styles.main_link}>
          {Icon}
          {text}
        </button>
      </Link>
    );
  }

  // Caso contrário, renderize um botão comum
  return (
    <button onClick={onClick} className={`${styles.main_link} ${styles.small}`}>
      {Icon}
      {text}
    </button>
  );
}

function SocialButton({ onClick, Icon, customBg }: ButtonProps) {
  const estilo: CSSProperties = {
    background: customBg,
  };

  return (
    <button className={styles.socialButton} onClick={onClick} style={estilo}>
      {Icon}
    </button>
  );
}

export { Button, SocialButton };
