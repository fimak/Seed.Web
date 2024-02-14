import Rte from "@components/grid/controls/rte";
import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import { FC } from "react";
import WidgetWrapper from "../widgetWrapper";
import styles from "./textColumns.module.scss";

const TextColumns: FC<WidgetModel> = (model) => {
  return (
    <WidgetWrapper model={model} styles={styles}>
      {model.content.items.map((el: NodeJS.Dict<any>) => (
        <Rte className={styles.text} text={el.text} key={el.text} />
      ))}
    </WidgetWrapper>
  );
};

export default TextColumns;
