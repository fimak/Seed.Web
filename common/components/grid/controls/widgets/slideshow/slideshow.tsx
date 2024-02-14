import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import { CommonLinkModel } from "@lib/umbraco/types/commonLinkModel";
import WidgetWrapper from "../widgetWrapper";
import styles from "./slideshow.module.scss";

gsap.registerPlugin(ScrollTrigger);

type Slide = {
  background: string;
  link: CommonLinkModel;
  subject: string;
  video: string;
  videoThumbnail: string;
};

type SlideshowModel = {
  items: Slide[];
};

const Slideshow: React.FC<WidgetModel> = (model) => {
  const slideshowRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { items } = model.content as SlideshowModel;

  useEffect(() => {
    if (slideshowRef.current) {
      const container = slideshowRef.current;
      const slides = container.querySelectorAll(".slide");

      gsap.to(slides, {
        y: () => -container.clientHeight * (slides.length - 1),
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${container.clientHeight * (slides.length - 1)}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: "labelsDirectional",
            duration: { min: 0.2, max: 0.5 },
            ease: "power1.out",
          },
        },
      });

      gsap.to("progress", {
        value: 100,
        ease: "none",
        scrollTrigger: { scrub: 0.3 },
      });
    }
  }, [items]);

  const [showVideo, setShowVideo] = useState(false);

  const handleThumbnailClick = () => {
    setShowVideo((prevState) => !prevState);
  };

  return (
    <WidgetWrapper model={model} styles={styles}>
      <progress max="100" value="0"></progress>
      <div className={styles.slideshow} ref={slideshowRef}>
        {items.map((item, index) => (
          <div
            key={item.link.label}
            className={styles.slide}
            style={{ backgroundImage: `url(${item.background})` }}
          >
            <h2 className={styles.title}>
              Built For
              <strong>{item.subject}</strong>
            </h2>

            {item.video && item.videoThumbnail && (
              <div
                className={styles.videoWrapper}
                style={{ backgroundImage: `url(${item.videoThumbnail})` }}
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
                    <source src={item.video} type="video/mp4" />
                  </video>
                )}
              </div>
            )}

            <button className={styles.slideButton}>
              <span dangerouslySetInnerHTML={{ __html: item.link.label }} />
              <Image
                src={`/media/icons/arrow.svg`}
                alt="arrow"
                width={18}
                height={12}
              />
            </button>
          </div>
        ))}
      </div>
    </WidgetWrapper>
  );
};

export default Slideshow;
