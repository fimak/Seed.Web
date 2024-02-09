import { CircularProgress } from '@mui/material';
import styles from './submitButton.module.scss';

export type SubmitButtonModel = {
    children: React.ReactNode
    loading: boolean
}

export default function SubmitButton({children, loading} : SubmitButtonModel) {
    return (
        <button type="submit" className={"button " + styles.submitButton} disabled={loading}>
            {children}
            {loading &&
                <div className={styles.loadingIndicator}>
                    <CircularProgress color="inherit" size={32} />
                </div>
            }
        </button>
    )
}