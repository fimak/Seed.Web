import React from "react";
import styles from "./button.module.scss";
import Rte from "@components/grid/controls/rte";

interface FooterButtonItemProps {
  label: string;
  url: string;
}

const Button = ({ label, url }: FooterButtonItemProps) => {
  return (
    <button className={styles.button}>
      <p className={styles.text}>
        <a
          className={styles.linkLabel}
          target={"_blank"}
          href={url}
          rel="noreferrer"
        >
          <Rte text={label} />
        </a>
      </p>
    </button>
  );
};

export default Button;
