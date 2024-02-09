import React from "react";
import { VideoModel } from "../../../lib/umbraco/types/videoModel.type"
import Video from "../video/video";
import { DialogContext } from "./dialogProvider";
import DialogTrigger from "./dialogTrigger";
import GlobalDialog from "./globalDialog";
import styles from "./videoDialog.module.scss";

export type VideoDialogModel = {
    video: VideoModel,
    id: string
}

export default function VideoDialog({ video, id }: VideoDialogModel) {
    const { state } = React.useContext(DialogContext);
    const pauseVideo = () => {

    }
    return (
        <GlobalDialog classes={{paper: styles.clearBackground}} className={styles.videoDialog} size="lg" onClose={pauseVideo} id={id}>
            <div className={styles.wrapper}>
                <DialogTrigger className={styles.closeContainer} id={id} close={true}>
                    <a className={styles.closeButton + ' bmg-icon bmg-icon-times'}></a>
                </DialogTrigger>
                <Video data={video} load={state.modals[id] !== undefined} />
            </div>
        </GlobalDialog>
    )
}