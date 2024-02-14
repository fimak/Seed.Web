import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import isDark from "common/util/isDark";
import Rte from "../../rte";
import WidgetWrapper from "../widgetWrapper";
import styles from "./text.module.scss";

export type TextModel = {
  text: string;
  backgroundColor?: string;
};

export default function Text(model: WidgetModel) {
  const { text, backgroundColor } = model.content as TextModel;
  const dark = isDark(backgroundColor);
  return (
    <WidgetWrapper
      className={
        (dark ? "darkBackground" : "") +
        (backgroundColor ? " " + styles.hasBackground : "")
      }
      model={model}
      styles={styles}
      style={{
        backgroundColor: backgroundColor ? "#" + backgroundColor : undefined,
      }}
    >
      <Rte className={styles.text} text={text} />
    </WidgetWrapper>
  );
}
