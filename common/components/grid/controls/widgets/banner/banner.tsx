import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import WidgetWrapper from "../widgetWrapper";
import styles from "./banner.module.scss";

export default function Banner(model: WidgetModel) {
  return (
    <WidgetWrapper
      model={model}
      styles={styles}
      style={{ backgroundImage: `url(${model.content.image})` }}
      className={styles.widgetBanner}
    >
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: model.content.text }}
      />
    </WidgetWrapper>
  );
}
