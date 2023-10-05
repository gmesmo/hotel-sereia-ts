import { useState, useEffect, useRef } from "react";
import styles from "./Social.module.css";

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
      <div></div>
    </div>
  );
}

export default Social;
