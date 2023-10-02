import Button from "../buttons/button";

import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.header}>
      <Button text={"Início"} to="./" />
      <Button text={"Acomodações"} to="./Acomodacoes" />
    </nav>
  );
};

export default Navigation;
