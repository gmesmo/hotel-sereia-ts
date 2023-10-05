import { Button } from "../buttons/Button";
import { useLocation } from "react-router-dom";

import styles from "./navigation.module.css";

function Navigation() {
  const location = useLocation();

  return (
    <nav className={styles.header}>
      <div>
        {location.pathname !== "/" && <Button text={"Início"} to="/" />}
        {location.pathname !== "/Acomodacoes" && (
          <Button text={"Acomodações"} to="/Acomodacoes" />
        )}
        {location.pathname !== "/Como_chegar" && (
          <Button text={"Como chegar"} to="/Como_chegar" />
        )}
        {location.pathname !== "/Mais_fotos" && (
          <Button text={"Mais fotos"} to="/Mais_fotos" />
        )}
      </div>
    </nav>
  );
}

export default Navigation;
