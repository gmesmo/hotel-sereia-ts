import styles from "./logo.module.css";
import logo from "../../assets/logo.png";

interface LogoProps {
  onClick: (page: string) => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <>
      <div className={styles.logo} onClick={() => onClick("home")}>
        <img src={logo} alt="Logo" />
      </div>

      <div className={styles.backRibbon}></div>
    </>
  );
};

export default Logo;
