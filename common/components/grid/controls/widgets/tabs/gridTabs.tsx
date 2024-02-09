import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import WidgetWrapper from "../widgetWrapper";
import styles from './gridTabs.module.scss';
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GridSection } from "@lib/umbraco/types/gridSection.type";
import Grid from "@components/grid/grid";

export type GridTabItem = {
    label: string,
    grid: GridSection,
    segment: string
}

export type GridTabsModel = {
    gridItems: GridTabItem[]
}

function Tab({content, active}: {
    content: GridSection,
    active: boolean
}) {
    if (!active) {
        return null;
    }
    return (
        <Grid content={content} />
    )
}

export default function GridTabs(model: WidgetModel) {
    const router = useRouter();
    const {gridItems} = model.content as GridTabsModel;
    const [active, setActive] = useState(0);
    useEffect(() => {
        var index = 0;
        if (router.asPath.indexOf('#') > -1) {
            const hash = router.asPath.split('#')[1];
            index = gridItems.findIndex(x => x.segment === hash);
        }
        if (index > -1) {
            setActive(index);
        }
    }, [router])
    
    return <WidgetWrapper model={model} styles={styles}>
        {gridItems.length > 1 &&
            <div className={styles.tabsContainer + " grid-container small-margin-bottom-2 medium-margin-bottom-3"}>
                <ul className={styles.tabs + " noMargin"}>
                    {gridItems.map((item, index) => (
                        <li key={item.label}>
                            <Link className={index === active ? styles.active : undefined} href={'#' + item.segment}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        }
        {gridItems.map((item, index) => (
            <Tab key={item.label} content={item.grid} active={index === active} />
        ))}
    </WidgetWrapper>
}