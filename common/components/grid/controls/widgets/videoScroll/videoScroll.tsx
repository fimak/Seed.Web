import Rte from "@components/grid/controls/rte";
import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import React, { FC } from "react";
import WidgetWrapper from "../widgetWrapper";
import Video from "@components/customVideo/Video";
import styles from "./videoScroll.module.scss";

const VideoScroll: FC<WidgetModel> = (model) => {
  return (
    <WidgetWrapper
      model={model}
      styles={styles}
      style={{ backgroundImage: `url(${model.content.backgroundVideo})` }}
    >
      <Rte text={model.content.upperText} className={styles.header} />
      <div className={styles.footer}>
        <Rte text={model.content.lowerText} />
        <Video
          video={model.content.video}
          thumbnail={model.content.videoThumbnail}
        />
      </div>
    </WidgetWrapper>
  );
};

export default VideoScroll;
