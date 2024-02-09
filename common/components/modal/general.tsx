import styles from './video.module.scss';
import { VideoModel } from '../../../lib/umbraco/types/videoModel.type';

export default function Video(data: VideoModel) {
    return (
        <div className={styles.entryBanner}>
            <div className={styles.side}>
                <div className="rte" dangerouslySetInnerHTML={{ __html: data.html }}></div>
            </div>
        </div>
    )
}