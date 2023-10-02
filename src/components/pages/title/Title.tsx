import { FC } from "react";
import styles from "./title.module.css";

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <div id={styles.titleWrapper}>
      <h2 id={styles.title}>{title}</h2>
    </div>
  );
};

export default Title;
