import { HeaderModel } from "@components/header/header";
import clsx from "clsx";
import Link from "next/link";
import { FC, MouseEvent, useState } from "react";
import styles from "./burgerMenu.module.scss";

type Props = Pick<HeaderModel, "mainLinks" | "secondaryLinks">;

const BurgerMenu: FC<Props> = ({ mainLinks, secondaryLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.burgerMenu}>
      <button className={styles.trigger} onClick={handleClick}>
        <div className={styles.line} />
        <div className={clsx(styles.line, styles.short)} />
      </button>
      {isMenuOpen && (
        <nav>
          <ul>
            {mainLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;
