import styles from './iconCircle.module.scss';

export type IconCircleModel = {
    className?: string,
    backgroundColor: string,
    icon: string
}

export default function IconCircle({className, backgroundColor, icon}: IconCircleModel) {
    const background = backgroundColor.indexOf('#') === 0 ? backgroundColor : '#' + backgroundColor;
    return (
        <div className={styles.iconCircle + (className ? ' ' + className : '')} style={{backgroundColor: background}}>
            <i className={icon + ' bmg-icon'}></i>
        </div>
    )
}