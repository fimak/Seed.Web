import { ImageModel } from "@lib/umbraco/types/imageModel.type"
import { VideoModel } from "@lib/umbraco/types/videoModel.type"
import { getCropUrl } from "@lib/umbraco/util/helpers";
import { useState } from "react";
import styles from './lazyVideo.module.scss';
import Video from "./video";

export type LazyVideoModel = {
    video: VideoModel,
    thumbnail?: ImageModel
}

export default function LazyVideo({video, thumbnail} : LazyVideoModel) {
    const [active, setActive] = useState(false);
    return (
        <div className={styles.lazyVideo} style={{backgroundImage: "url('" + (thumbnail ? getCropUrl(thumbnail, 'halfScreen') : video.thumbnailUrl + "')")}}>
            {!active &&
                <a className={styles.play} onClick={() => setActive(true)}>
                    <i className="bmg-icon bmg-icon-play"></i>
                </a>
            }
            <Video data={video} load={active} />
        </div>
    )
}