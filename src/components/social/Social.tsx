import { useState, useEffect, useRef } from "react";
import styles from "./Social.module.css";
import { SocialButton } from "../buttons/Button";

import BsInstagram from "react-icons/bs";
import { ImWhatsapp, ImFacebook } from "react-icons/im";

function Social() {
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

  return (
    <div
      className={`${styles.Social} ${isOpen && styles.open}`}
      ref={socialRef}
    >
      <p onClick={() => setIsOpen(!isOpen)}>Social</p>
      <div>
        <SocialButton Icon={<ImWhatsapp />} customBg="#25d366" />
        <SocialButton Icon={<ImFacebook />} customBg="#1773ea" />
        <SocialButton
          Icon={<BsInstagram />}
          customBg="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
        />
      </div>
    </div>
  );
}

export default Social;
