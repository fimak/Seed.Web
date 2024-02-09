import styles from './iconSquare.module.scss';

export type IconSquareModel = {
    icon: string,
    className?: string
}

export default function IconSquare({icon, className}: IconSquareModel) {
    return (
        <div className={styles.iconSquare + (className ? ' ' + className : '')} >
            <i className={'bmg-icon ' + icon}></i>
        </div>
    )
}