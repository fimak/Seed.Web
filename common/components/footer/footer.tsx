import { BasicLink } from "@components/header/header";
import { FC } from "react";
import styles from "./footer.module.scss";
import Columns from "@components/footer/columns";
import SocialLinks from "@components/footer/socialLinks";
import ButtonsGroup from "@components/footer/buttonsGroup";
import Logos from "@components/footer/logos";
import Rte from "@components/grid/controls/rte";
import BaseLinks from "@components/footer/baseLinks";

export type IconLink = {
  icon: string;
  url: string;
};

export type ImageLink = {
  image: string;
  url: string;
};

export type InnerLinkColumn = {
  links: BasicLink[];
};

export type LinkColumn = {
  label?: string;
  innerColumns: InnerLinkColumn[];
};

export type FooterModel = {
  columns: LinkColumn[];
  socialMedia: IconLink[];
  dealerLoginLink: BasicLink;
  subscribeLink: BasicLink;
  copyright: string;
  baseLinks: BasicLink[];
  baseLogos: ImageLink[];
};

const Footer: FC<FooterModel> = ({
  socialMedia,
  columns,
  dealerLoginLink,
  subscribeLink,
  copyright,
  baseLinks,
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <SocialLinks socialMedia={socialMedia} />
        <Columns columns={columns} />
        <ButtonsGroup
          dealerLoginLink={dealerLoginLink}
          subscribeLink={subscribeLink}
        />
        <Logos />
        <Rte text={copyright} className={styles.copyright} />
        <BaseLinks baseLinks={baseLinks} />
      </div>
    </footer>
  );
};

export default Footer;
