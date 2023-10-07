import { useState, useEffect, useRef } from "react";
import styles from "./Social.module.css";
import { SocialButton } from "../buttons/Button";

import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp, ImFacebook } from "react-icons/im";

import { Trans, useTranslation } from "react-i18next";

type TranslationObj = {
  [key: string]: {
    nativeName: string;
  };
};

const lngs: TranslationObj = {
  pt: { nativeName: "PT" },
  es: { nativeName: "ES" },
};

function Social() {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const socialRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        socialRef.current &&
        !socialRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function buttonClickHandler(url: string) {
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div
      className={`${styles.Social} ${isOpen && styles.open}`}
      ref={socialRef}
    >
      <div className={styles.titleWrapper}>
        <p onClick={() => setIsOpen(!isOpen)}>Social</p>
      </div>

      <div className={styles.buttonsWrapper}>
        <SocialButton
          Icon={<ImWhatsapp />}
          customBg="#25d366"
          onClick={() =>
            buttonClickHandler(
              `https://wa.me/555193383992?text=${t("whatsMessage")}`
            )
          }
        />
        <SocialButton
          Icon={<ImFacebook />}
          customBg="#1773ea"
          onClick={() =>
            buttonClickHandler("https://pt-br.facebook.com/HotelSereia/")
          }
        />
        <SocialButton
          Icon={<BsInstagram />}
          customBg="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
          onClick={() =>
            buttonClickHandler("https://instagram.com/hotel_sereia")
          }
        />
      </div>
    </div>
  );
}

export default Social;
