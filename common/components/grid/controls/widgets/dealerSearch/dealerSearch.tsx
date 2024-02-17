import Rte from "@components/grid/controls/rte";
import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import { FC } from "react";
import Image from "next/image";
import WidgetWrapper from "../widgetWrapper";
import styles from "./dealerSearch.module.scss";

const DealerSearch: FC<WidgetModel> = (model) => {
  return (
    <WidgetWrapper model={model} styles={styles}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${model.content.background})` }}
      />
      <div className={styles.right}>
        <Rte text={model.content.text} className={styles.text} />
        <form>
          <input type="text" placeholder={model.content.searchPlaceholder} />
          <button>
            <Image
              src={`/media/icons/arrow.svg`}
              alt="arrow"
              width={15}
              height={15}
            />
          </button>
        </form>
      </div>
    </WidgetWrapper>
  );
};

export default DealerSearch;
