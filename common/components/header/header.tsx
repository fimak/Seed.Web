import BurgerMenu from "@components/header/burgerMenu";
import { FlexibleLinkModel } from "@lib/umbraco/types/flexibleLinkModel.type";
import { FC, useEffect, useState } from "react";
import styles from "./header.module.scss";
import Image from "next/image";

export type BasicLink = {
  label: string;
  url: string;
};
export type HeaderModel = {
  logo: string;
  secondaryLinks: BasicLink[];
  mainLinks: BasicLink[];
  startTransparent?: boolean;
};

const Header: FC<HeaderModel> = ({ logo, mainLinks, secondaryLinks }) => {
  const [opacity, setOpacity] = useState(0);

  const handleScroll = () => {
    if (window.scrollY <= 100) {
      setOpacity(window.scrollY / 100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div
        className={styles.headerContainer}
        style={{ backgroundColor: `rgba(0, 45, 86, ${opacity})` }}
      >
        <Image src={logo} alt="logo" width={106} height={48} />
        <BurgerMenu mainLinks={mainLinks} secondaryLinks={secondaryLinks} />
      </div>
    </header>
  );
};

export default Header;
