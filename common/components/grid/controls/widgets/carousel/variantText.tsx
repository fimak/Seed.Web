import Rte from "@components/grid/controls/rte";
import { CommonLinkModel } from "@lib/umbraco/types/commonLinkModel";
import styles from "@widgets/carousel/carousel.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FC, useMemo, useState } from "react";

interface TextItem {
  text: string;
  link: CommonLinkModel;
  background: string;
}

interface Props {
  items: TextItem[];
}

const VariantText: FC<Props> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const item = useMemo(() => items[index], [index, items]);

  const handleSliderShift = (x: number) => {
    setIndex((prevState) => {
      const delta = prevState + x;
      return delta < 0 ? items.length - 1 : delta >= items.length ? 0 : delta;
    });
  };

  return (
    <div
      className={styles.background}
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
    </div>
  );
};

export default VariantText;
