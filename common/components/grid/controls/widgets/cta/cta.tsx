import Rte from "@components/grid/controls/rte";
import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import WidgetWrapper from "../widgetWrapper";
import styles from "./cta.module.scss";

const Cta: FC<WidgetModel> = (model) => {
  return (
    <WidgetWrapper model={model} styles={styles}>
      <h2 className={styles.title}>{model.content.title}</h2>
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(${model.content.image})`,
        }}
      />
      <div className={styles.footer}>
        <Rte text={model.content.text} className={styles.text} />
        <Link href={model.content.link.url} className={styles.link}>
          <Image
            src={`/media/icons/${model.content.link.icon}.svg`}
            alt={model.content.link.icon}
            width={17}
            height={16}
          />
          <Rte text={model.content.link.label} className={styles.label} />
        </Link>
      </div>
    </WidgetWrapper>
  );
};

export default Cta;
