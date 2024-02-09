import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import WidgetWrapper from "../widgetWrapper";
import styles from './sideNavigationTabs.module.scss';
import { FlexibleLinkModel } from "@lib/umbraco/types/flexibleLinkModel.type";
import { useEffect, useState } from "react";
import Rte from "../../rte";
import Link from "next/link";
import { useRouter } from "next/router";
import { GridSection } from "@lib/umbraco/types/gridSection.type";
import { ImageModel } from "@lib/umbraco/types/imageModel.type";
import { getAbsoluteMediaUrl } from "@lib/umbraco/util/helpers";

export type TabItem = {
    label: string,
    text: string,
    segment: string
}

export type GridTabItem = {
    label: string,
    grid: GridSection,
    segment: string
}

export type SideNavigationTabsModel = {
    title?:string,
    items: TabItem[],
    cta?: string
    backdropTexture?: ImageModel
}

export default function SideNavigationTabs(model: WidgetModel) {
    const router = useRouter();
    const {title, items, cta, backdropTexture} = model.content as SideNavigationTabsModel;
    const [active, setActive] = useState(items[0])
    useEffect(() => {
        var index = 0;
        if (router.asPath.indexOf('#') > -1) {
            const hash = router.asPath.split('#')[1];
            index = items.findIndex(x => x.segment === hash);
        }
        if (index > -1) {
            setActive(items[index]);
        }
    }, [router])
    
    return <WidgetWrapper model={model} styles={styles} className={cta ? undefined : styles.noCta}>
        <div className={styles.navigation}>
            {!!title && 
                <h2 className={styles.title}>{title}</h2>
            }
            <ul className={styles.triggers + " noMargin"}>
                {items.map(item => (
                    <li key={item.label} className={item.label === active.label ? styles.active : undefined}>
                        <Link className={styles.navTrigger} href={'#' + item.segment}><i className={styles.navIcon + " bmg-icon bmg-icon-chevron-right"}></i><span>{item.label}</span></Link>
                        <Rte className={styles.text} text={item.text} />
                    </li>
                ))}
            </ul>
        </div>
        <div className={styles.sideBox}>
            {model.layout !== 'Cta' &&
                <>
                    <h4 className="noMargin">{active.label}</h4>
                    <Rte className={styles.sideText} text={active.text} />
                </>
            }
            {model.layout === 'Cta' &&
                <div className={styles.tile + ' darkBackground'}>
                    <Rte className={styles.sideText} text={active.text} />
                    {backdropTexture &&
                        <div className={styles.backdrop} style={{backgroundImage: `url('${getAbsoluteMediaUrl(backdropTexture.url)}')`}}></div>
                    }
                </div>
            }
        </div>
        {!!cta &&
            <Rte className={styles.cta + ' darkBackground'} text={cta} />
        }
    </WidgetWrapper>
}