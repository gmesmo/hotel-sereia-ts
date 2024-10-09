import { CSSProperties, MouseEvent, ReactNode } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  text?: string;
  Icon?: ReactNode;
  to?: string;
  customBg?: string;
}

function Button({ onClick, text, Icon }: ButtonProps) {
  // Se a prop "to" estiver presente, renderize um Link do React Router
  return (
    <button className={styles.main_link} onClick={onClick}>
      {Icon}
      {text}
    </button>
  );
}

const LinkButton = ({ onClick, text, Icon }: ButtonProps) => {
  // Caso contrário, renderize um botão comum
  return (
    <button onClick={onClick} className={`${styles.main_link} ${styles.small}`}>
      {Icon}
      {text}
    </button>
  );
};

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

export { Button, LinkButton, SocialButton };
