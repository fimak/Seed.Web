import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import VariantBoats from "@widgets/carousel/variantBoats";
import VariantText from "@widgets/carousel/variantText";
import { FC } from "react";
import WidgetWrapper from "../widgetWrapper";
import styles from "./carousel.module.scss";

const Carousel: FC<WidgetModel> = (model) => {
  const {
    content: { items, builderLink },
  } = model;

  return (
    <WidgetWrapper model={model} styles={styles}>
      {model.variant === "Boats" && (
        <VariantBoats items={items} builderLink={builderLink} />
      )}
      {model.variant === "Text" && <VariantText items={items} />}
    </WidgetWrapper>
  );
};

export default Carousel;
