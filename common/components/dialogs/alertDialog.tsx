import Rte from "@components/grid/controls/rte";
import { Dispatch, SetStateAction, useState } from "react";
import BasicDialog, { BasicDialogModel } from "./basicDialog";
import styles from './alertDialog.module.scss';

export type AlertDialogModel = {
    message: string,
    onClose?: () => void
}

export default function AlertDialog({message, onClose}: AlertDialogModel) {
    const htmlCheck = /<\/?[a-z][\s\S]*>/i;
    const [open, setOpen] = useState(!!message);
    const formatAlert = (message: string) => {
        if (htmlCheck.test(message)) {
            return <Rte text={message} />
        }
        return <p>{message}</p>
    }
    const handleClose = () => {
        if (onClose) {
            onClose();
        }
        setOpen(false);
    }
    return (
        <BasicDialog className={styles.alertDialog} open={open} size="md" sx={{
            '.MuiDialogContent-root': {
                padding: '15px'
            },
            '.MuiDialog-paper': {
                borderRadius: 0,
                border: '10px solid #152456',
                overflowY: 'visible'
            }
        }} onClose={handleClose}>
            <a className={styles.close + ' bmg-icon bmg-icon-times'} aria-label="close" onClick={handleClose}></a>
            <div className={styles.content}>
                {formatAlert(message)}
            </div>
        </BasicDialog>
    )
}