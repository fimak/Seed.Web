import styles from "@widgets/carousel/carousel.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { FC, useEffect, useRef } from "react";

interface BoatStat {
  name: string;
  value: string;
}

interface BoatItem {
  thumbnail: string;
  detailsLink: string;
  modelNumber: string;
  stats: BoatStat[];
}

interface Props {
  builderLink: string;
  items: BoatItem[];
}

const VariantBoats: FC<Props> = ({ items, builderLink }) => {
  const ref = useRef(null);

  const mid = Math.floor(items.length / 2);

  const getDiff = (a: number, b: number) => {
    const larger = Math.max(a, b);
    const smaller = Math.min(a, b);
    return larger - smaller;
  };

  const getSize = (a: number, b: number) => {
    switch (getDiff(a, b)) {
      case 0:
        return 36;
      case 1:
        return 20;
      case 2:
        return 18;
      case 3:
        return 16;
      default:
        return 14;
    }
  };

  return (
    <div className={styles.slider}>
      <div className={styles.control}>
        {items.map((item, index) => (
          <span
            className={styles.label}
            key={`label-${item.modelNumber}`}
            style={{ fontSize: getSize(mid, index + 1) }}
          >
            {item.modelNumber}
          </span>
        ))}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.ribbon}>
          {items.map((item, index) => (
            <div
              className={clsx(styles.item, {
                [styles.active]: getDiff(mid, index + 1) === 0,
              })}
              key={`item-${item.modelNumber}`}
              ref={ref}
            >
              <div className={styles.model}>{item.modelNumber}</div>
              <div
                className={styles.thumbnail}
                style={{ backgroundImage: `url(${item.thumbnail})` }}
              >
                <div className={styles.links}>
                  <Link className={styles.link} href={item.detailsLink}>
                    View <strong>details</strong>
                  </Link>
                  <Link className={styles.link} href={builderLink}>
                    <strong>Build</strong>
                    {` your ${item.modelNumber}`}
                  </Link>
                </div>
              </div>
              <div className={styles.stats}>
                <div className={styles.statsRibbon}>
                  {item.stats.map((stat) => (
                    <span key={stat.name}>
                      <strong>{stat.name}:</strong>
                      {stat.value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariantBoats;
