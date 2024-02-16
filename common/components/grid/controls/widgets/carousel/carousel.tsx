import Rte from "@components/grid/controls/rte";
import { ImageModel } from "@lib/umbraco/types/imageModel.type";
import { UmbracoNode } from "@lib/umbraco/types/umbracoNode.type";
import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import Link from "next/link";
import Image from "next/image";
import { FC, useEffect, useState, useRef, useMemo } from "react";
import WidgetWrapper from "../widgetWrapper";
import styles from "./carousel.module.scss";

const Carousel: FC<WidgetModel> = (model) => {
  const [index, setIndex] = useState(0);
  const {
    content: { items },
  } = model;

  const item = useMemo(() => items[index], [index, items]);

  const handleSliderShift = (x: number) => {
    setIndex((prevState) => {
      const delta = prevState + x;
      return delta < 0 ? items.length - 1 : delta >= items.length ? 0 : delta;
    });
  };

  return (
    <WidgetWrapper
      model={model}
      styles={styles}
      style={{ backgroundImage: `url(${item.background})` }}
    >
      <Rte text={item.text} className={styles.text} />
      <div className={styles.btnGroup}>
        <button onClick={() => handleSliderShift(-1)}>
          <Image
            src="/media/icons/arrow.svg"
            alt="arrow"
            width={11}
            height={7}
          />
        </button>
        <Link href={item.link.url}>{item.link.label}</Link>
        <button onClick={() => handleSliderShift(1)}>
          <Image
            src="/media/icons/arrow.svg"
            alt="arrow"
            width={11}
            height={7}
          />
        </button>
      </div>
    </WidgetWrapper>
  );
};

export default Carousel;
