import React, { FC } from "react";
import styles from "@components/footer/socialLinks.module.scss";
import Link from "next/link";
import Image from "next/image";
import { IconLink } from "@components/footer/footer";

interface Props {
  socialMedia: IconLink[];
}

const SocialLinks: FC<Props> = ({ socialMedia }) => {
  return (
    <nav className={styles.socialMedia}>
      {socialMedia.map((link) => (
        <Link href={link.url} passHref key={link.icon}>
          <Image
            src={`/media/icons/${link.icon}.svg`}
            alt={link.icon}
            width={46}
            height={46}
          />
        </Link>
      ))}
    </nav>
  );
};

export default SocialLinks;
