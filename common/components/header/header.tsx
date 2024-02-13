import BurgerMenu from "@components/header/burgerMenu";
import { FlexibleLinkModel } from "@lib/umbraco/types/flexibleLinkModel.type";
import { FC } from "react";
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
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Image src={logo} alt="logo" width={106} height={48} />
        <BurgerMenu mainLinks={mainLinks} secondaryLinks={secondaryLinks} />
      </div>
    </header>
  );
};

export default Header;
