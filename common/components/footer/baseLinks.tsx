import React from "react";
import styles from "@components/footer/baseLinks.module.scss";
import { BasicLink } from "@components/header/header";
import clsx from "clsx";

interface BaseLinksProps {
  baseLinks: BasicLink[];
}

const BaseLinks = ({ baseLinks }: BaseLinksProps) => {
  return (
    <nav className={styles.baseLinks}>
      <ul className={styles.linksWrapper}>
        {baseLinks.map((link, index) => (
          <li key={link.label}>
            <a
              className={clsx(styles.linkLabel, {
                [styles.nonBorder]: index === baseLinks.length - 1,
              })}
              href={link.url}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BaseLinks;
