import styles from "./logo.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <>
      <Link to="/">
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <div className={styles.backRibbon}></div>
    </>
  );
};

export default Logo;
