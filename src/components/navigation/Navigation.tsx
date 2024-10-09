import { Button } from "../buttons/Button";

import styles from "./navigation.module.css";

import { useTranslation } from "react-i18next";

interface NavigationProps {
  onClick: (page: string) => void; // Define o tipo da função onClick
  activePage: string; // Define o tipo de activePage, ajuste conforme necessário
}

type TranslationObj = {
  [key: string]: {
    nativeName: string;
  };
};

const lngs: TranslationObj = {
  pt: { nativeName: "PT" },
  es: { nativeName: "ES" },
};

const Navigation: React.FC<NavigationProps> = ({ onClick, activePage }) => {
  const { t, i18n } = useTranslation();

  console.log(activePage);

  return (
    <nav className={styles.header}>
      <div>
        {activePage !== "home" && (
          <Button text={t("navigation.home")} onClick={() => onClick("home")} />
        )}
        {activePage !== "tarifas" && (
          <Button
            text={t("navigation.booking")}
            onClick={() => onClick("tarifas")}
          />
        )}
        {activePage !== "comoChegar" && (
          <Button
            text={t("navigation.location")}
            onClick={() => onClick("comoChegar")}
          />
        )}
        {activePage !== "maisFotos" && (
          <Button
            text={t("navigation.pictures")}
            onClick={() => onClick("maisFotos")}
          />
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
};
export default Navigation;
