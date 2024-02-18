import Image from "next/image";
import React, { FC, useState } from "react";
import styles from "./Video.module.scss";

interface Props {
  video: string;
  thumbnail: string;
}

const Video: FC<Props> = ({ video, thumbnail }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleThumbnailClick = () => {
    setShowVideo((prevState) => !prevState);
  };

  return (
    <div
      className={styles.video}
      style={{ backgroundImage: `url(${thumbnail})` }}
      onClick={handleThumbnailClick}
    >
      {!showVideo && (
        <div className={styles.play}>
          <Image
            src="/media/icons/play-arrow.svg"
            alt="play"
            width={11}
            height={14}
          />
        </div>
      )}
      {showVideo && (
        <video
          className={styles.video}
          width="360"
          height="215"
          controls
          autoPlay
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Video;
