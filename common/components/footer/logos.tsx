import React, { FC } from "react";
import styles from "@components/footer/logos.module.scss";
import Image from "next/image";

const Logos: FC = () => {
  return (
    <div className={styles.logos}>
      <Image
        width={114}
        height={24}
        alt={"yamaha"}
        src={`/media/icons/yamaha-logo.svg`}
      />
      <Image
        width={133}
        height={35}
        alt={"garmin"}
        src={`/media/icons/garmin-logo.svg`}
      />
    </div>
  );
};

export default Logos;
