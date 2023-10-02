import styles from "./logo.module.css";
import logo from "../../assets/logo.png";

const Logo: React.FC = () => {
  return (
    <>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.backRibbon}></div>
    </>
  );
};

export default Logo;
