import IconLink, { IconLinkOptions } from './iconLink';
import styles from './verticalLink.module.scss';

export default function VerticalLink({ link, className, iconAfter=true }: IconLinkOptions) {
    return (
        <div className={styles.verticalLinkWrapper + ' ' + className}>
            <IconLink className={`${styles.verticalLink} whiteButton`} link={link} iconAfter={iconAfter} />
        </div>
    )
}