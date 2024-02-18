import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import { useMemo, useState } from "react";
import styles from "./hotspots.module.scss";
import WidgetWrapper from "../widgetWrapper";
import Image from "next/image";

export default function Hotspots(model: WidgetModel) {
  const [index, setIndex] = useState(0);
  const {
    content: { hotspots },
  } = model;

  const hotspot = useMemo(() => hotspots[index], [index, hotspots]);

  const handleHotspotShift = (x: number) => {
    setIndex((prevState) => {
      const delta = prevState + x;
      return delta < 0
        ? hotspot.length - 1
        : delta >= hotspot.length
        ? 0
        : delta;
    });
  };

  return (
    <WidgetWrapper model={model} styles={styles}>
      <div
        className={styles.thumbnail}
        style={{ backgroundImage: `url(${hotspot.thumbnail})` }}
      >
        <div className={styles.wrapper}>
          <Image
            className={styles.secondaryImage}
            src={hotspot.secondaryImage}
            alt="secondary"
            width={138}
            height={232}
          />
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{hotspot.name}</h2>
        <p className={styles.summary}>{hotspot.summary}</p>
        <div className={styles.control}>
          <span>NEXT</span>
          <button>
            <Image
              src="/media/icons/arrow.svg"
              alt="arrow"
              width={18}
              height={12}
            />
          </button>
        </div>
      </div>
    </WidgetWrapper>
  );
}
