import { Dispatch, SetStateAction } from "react";
import BasicDialog  from "./basicDialog";
import { useCommonDataContext } from "@components/layout/layout";
import Grid from "@components/grid/grid";
import { useModal } from "@lib/umbraco/util/publicDataApi";
import styles from './umbracoModal.module.scss';

export type UmbracoModalModel = {
    modalId: string,
    setter: Dispatch<SetStateAction<string>>
}

export default function UmbracoModal({modalId, setter}: UmbracoModalModel) {
    //const {culture} = useCommonDataContext();
    const {data, error, isValidating} = useModal(modalId, '');
    if (!data) {
        return null;
    }
    console.log(data);
    return (
        <BasicDialog className={styles.umbracoModal} open={!!modalId} size={data!.size} sx={{
            '.MuiDialogContent-root': {
                padding: '0'
            },
            '.MuiDialog-paper': {
                borderRadius: '13px',
                border: '10px solid #152456',
                overflowY: 'visible'
            }
        }} onClose={() => setter('')}>
            <a className={styles.close + ' bmg-icon bmg-icon-times'} aria-label="close" onClick={() => setter('')}></a>
            <div className={styles.content}>
                <Grid content={data!.content} />
            </div>
        </BasicDialog>
    )
}