import { UmbracoNode } from "@lib/umbraco/types/umbracoNode.type";
import { VideoModel } from "@lib/umbraco/types/videoModel.type";
import styles from './videoTile.module.scss';
import Image from 'next/image';
import Link from "@components/links/link";
export default function VideoTile(model: UmbracoNode) {
    const video = model.properties.videoData as VideoModel;
    return (
        <Link href={model.url}>
            <a className={styles.videoTile}>
                <div className={styles.imageWrapper}>
                    <Image src={video.thumbnailUrl} width={video.thumbnailWidth} height={video.thumbnailHeight} alt={video.title} />
                </div>
                <div className={styles.text}>
                    <i className="bmg-icon bmg-icon-play"></i>
                    <div>
                        <h6 className="noMargin">{model.name}</h6>
                        {video.duration &&
                            <p>{video.duration}</p>
                        }
                    </div>
                </div>
            </a>
        </Link>
    )
}