import { BasicLink } from "@components/header/header";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import styles from "./footer.module.scss";

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

const Footer: FC<FooterModel> = ({ socialMedia }) => {
  return (
    <footer>
      <nav className={styles.socialMedia}>
        {socialMedia.map((link) => (
          <Link href={link.url} key={link.icon}>
            <Image
              src={`/media/icons/${link.icon}.svg`}
              alt={link.icon}
              width={36}
              height={36}
            />
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
