import { useState } from 'react';
import mapClass from '../../util/mapClass';
import styles from './hamburgerToggle.module.scss';

export type HamburgerToggleModel = {
    toggle?: () => void,
    className?: string,
    active: boolean
}

export default function HamburgerToggle({ active, toggle, className }: HamburgerToggleModel) {
    return (
        <a className={styles.hamburgerToggle + ' ' + (active ? styles.active : '') + ' ' + mapClass(styles, className) } onClick={toggle}>
            <span className="piece1"></span>
            <span className="piece2"></span>
            <span className="piece3"></span>
            <span className="piece4"></span>
            <span className="piece5"></span>
            <span className="piece6"></span>
        </a>
    )
}