import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import WidgetWrapper from "../widgetWrapper";
import styles from "./feed.module.scss";

interface Feed {
  thumbnail: string;
  tag: string;
  summary: string;
}

const Feed: FC<WidgetModel> = (model) => {
  return (
    <WidgetWrapper model={model} styles={styles}>
      {model.content.items.map((item: Feed) => (
        <div className={styles.item} key={item.tag}>
          <div
            className={styles.thumbnail}
            style={{ backgroundImage: `url(${item.thumbnail})` }}
          />
          <div className={styles.title}>{item.tag}</div>
          <div className={styles.summary}>{item.summary}</div>
          <Link className={styles.button} href="/">
            <Image
              src="/media/icons/arrow.svg"
              alt="arrow"
              width={18}
              height={12}
            />
          </Link>
        </div>
      ))}
    </WidgetWrapper>
  );
};

export default Feed;
