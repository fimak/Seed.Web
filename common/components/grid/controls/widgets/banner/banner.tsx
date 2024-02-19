import Rte from "@components/grid/controls/rte";
import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import WidgetWrapper from "../widgetWrapper";
import styles from "./banner.module.scss";

export default function Banner(model: WidgetModel) {
  return (
    <WidgetWrapper
      model={model}
      styles={styles}
      style={{ backgroundImage: `url(${model.content?.image})` }}
      className={styles.widgetBanner}
    >
      {model.content?.video && (
        <iframe
          className={styles.video}
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/hu3eQ-1f5rY?si=EE4ETeKS4Au-Pb_T&amp;controls=0&autoplay"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
      <Rte text={model.content.text} className={styles.text} />
    </WidgetWrapper>
  );
}
