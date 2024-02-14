import React, { FC } from "react";
import { LinkColumn } from "@components/footer/footer";
import styles from "@components/footer/columns.module.scss";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  columns: LinkColumn[];
}

const Columns: FC<Props> = ({ columns }) => {
  return (
    <>
      {columns.map((column) => (
        <div key={`container` + column.label} className={styles.container}>
          {column.label && <h6 className={styles.label}>{column.label}</h6>}
          <nav className={styles.navWrapper}>
            {column.innerColumns.map((columns) => (
              <ul className={styles.linksList} key={columns.links.length}>
                {columns.links.map((link) => (
                  <li key={`li` + link.label}>
                    <Link
                      href={link.url}
                      className={clsx(styles.linkLabel, {
                        [styles.bold]: !column.label,
                      })}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>
      ))}
    </>
  );
};

export default Columns;
