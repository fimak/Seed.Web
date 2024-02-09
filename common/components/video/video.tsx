import { VideoModel } from '../../../lib/umbraco/types/videoModel.type';
import Rte from '../grid/controls/rte';
import LoadingIndicator from '../loadingIndicator/loadingIndicator';
import styles from './video.module.scss';

export type VideoElementModel = {
    load: boolean,
    data: VideoModel
}

export default function Video({ load, data }: VideoElementModel) {
    var containerStyles = {
        paddingTop: (100 * data.height / data.width) + '%' 
    }
    return (
        <div className={styles.video} style={containerStyles}>
            {load &&
                <Rte text={data.html.replace('?', '?autoplay=1&')} />
            }
        </div>
    )
}