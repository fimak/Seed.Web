import React, { Fragment } from 'react';
import mapClass from '../../util/mapClass';
import styles from './inline-list.module.scss';

export type InlineListData = {
    items: React.ReactNode[],
    className?: string,
    divider?: boolean | string,
    dividerClass?: string,
    restrict?: string,
    gutterSize?: 1 | 2 | 3
}

export default function InlineList({ items, className, divider, restrict, dividerClass, gutterSize }: InlineListData) {
    var defaultDevider = divider === true;
    if (!gutterSize) {
        gutterSize = 1;
    }
    return (
        <ul className={`${styles[restrict ? restrict + 'InlineList' : 'inlineList']} ${styles['size' + gutterSize]} ${mapClass(styles, className)}`}>
            {
                items.map((item, index) =>
                    <Fragment key={index}>
                        {divider && index > 0 &&
                            <li key={'item-' + index} className={styles.divider + (dividerClass ? ' ' + dividerClass : (defaultDevider ? ' ' + styles.default : ''))}>
                                {defaultDevider ? '' : divider}
                            </li>
                        }
                        <li>
                            {item}
                        </li>
                    </Fragment>
                )
            }
        </ul>
    )
}