import { useEffect, useRef, useState } from 'react';
// import { gsap } from '@lib/greensock/gsap-core';
import styles from './dropdownLink.module.scss';
import FlexibleLink from './flexibleLink';
import { LinkWithChildrenPlusToggle } from '@lib/umbraco/types/linkWithChildrenPlusToggle.type';

export type DropdownLinkModel = LinkWithChildrenPlusToggle & {
    className?: string
}

export default function DropdownLink({className, link, noTopLink, children}: DropdownLinkModel) {
    const [open, setOpen] = useState(false);
    const container = useRef<HTMLUListElement>(null);
    const hasChildren = children && children.length > 0;

    const toggleChildren = () => {
        setOpen(!open);
        if (container.current) {
            if (!open) {
                container.current.style.height = 'auto';
                const height = container.current.clientHeight;
                container.current.style.height = '';
                requestAnimationFrame(() => {
                    if (container.current) {
                        container.current.style.height = height + 'px';
                    }
                })
            }
            else {
                requestAnimationFrame(() => {
                    if (container.current) {
                        container.current.style.height = '0px';
                    }
                })
            }
        }
    }

    return (
        <div className={styles.dropdownLink + (hasChildren ? ' ' + styles.hasChildren : '') + (className ? ' ' + className : '')}>
            <div className={styles.linkBlock}>
                {noTopLink &&
                    <a className={styles.parentLink + ' ' + styles.noLink}>{link.label}</a>
                }
                {!noTopLink &&
                    <FlexibleLink className={styles.parentLink} link={link} />
                }
                {hasChildren &&
                    <a className={styles.expander + (open ? ' ' + styles.active : '') + ' bmg-icon bmg-icon-chevron-right hide-for-xxlarge'} onClick={toggleChildren}></a>
                }
            </div>
            {hasChildren &&
                <div className={styles.dropdown}>
                    <ul className={styles.links} ref={container}>
                        {
                            children.map((child,index) =>
                                <li key={index}>
                                    <FlexibleLink link={child} />
                                </li>
                            )
                        }
                    </ul>
                </div>
            }
        </div>
    )
}