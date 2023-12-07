import { Button } from "../buttons/Button";
import { useLocation } from "react-router-dom";

import styles from "./navigation.module.css";

import { useTranslation } from "react-i18next";

type TranslationObj = {
  [key: string]: {
    nativeName: string;
  };
};

const lngs: TranslationObj = {
  pt: { nativeName: "PT" },
  es: { nativeName: "ES" },
};

function Navigation() {
  const location = useLocation();

  const { t, i18n } = useTranslation();

  return (
    <nav className={styles.header}>
      <div>
        {location.pathname !== "/" && (
          <Button text={t("navigation.home")} to="/" />
        )}
        {location.pathname !== "/Tarifas" && (
          <Button text={t("navigation.booking")} to="/Tarifas" />
        )}
        {location.pathname !== "/Como_chegar" && (
          <Button text={t("navigation.location")} to="/Como_chegar" />
        )}
        {location.pathname !== "/Mais_fotos" && (
          <Button text={t("navigation.pictures")} to="/Mais_fotos" />
        )}
      </div>
      <div
        className={`${styles.langSelector} ${
          i18n.resolvedLanguage === "pt" ? styles.pt : styles.es
        }`}
      >
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => {
              i18n.changeLanguage(lng);
            }}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
