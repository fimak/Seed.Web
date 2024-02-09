import { IconLinkModel } from '../../../lib/umbraco/types/iconLinkModel.type';
import mapClass from '../../util/mapClass';
import FlexibleLink from './flexibleLink';
import styles from './iconLink.module.scss';

export type IconLinkOptions = {
    link: IconLinkModel,
    className?: string,
    iconAfter?: boolean
}

export default function IconLink({ link, iconAfter, className }: IconLinkOptions) {
    if (iconAfter) {
        return (
            <FlexibleLink className={styles.iconLink + ' ' + className + ' ' + (link.link.label ? styles.iconAfter : styles.iconOnly) } link={link.link}>
                {link.link.label}<i className={'bmg-icon ' + link.icon}></i>
            </FlexibleLink>
        ) 
    }
    return (
        <FlexibleLink className={styles.iconLink + ' ' + mapClass(styles, className) + ' ' + (link.link.label ? styles.iconBefore : styles.iconOnly)} link={link.link}>
            <i className={'bmg-icon ' + link.icon}></i>{link.link.label}
        </FlexibleLink>
    ) 
}