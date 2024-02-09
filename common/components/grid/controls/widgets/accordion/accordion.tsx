import LabelledContentModel from '@lib/umbraco/types/labelledContentModel';
import { WidgetModel } from '@lib/umbraco/types/widgetModel.type';
import WidgetWrapper from '../widgetWrapper';
import AccordionItem from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails'
import styles from './accordion.module.scss';
import Grid from '@components/grid/grid';
import Rte from '../../rte';
import { useState } from 'react';
import { useCommonDataContext } from '@components/layout/layout';

export type AccordionModel = {
    intro?: string,
    items: LabelledContentModel[],
    loadLimit?: number,
    loadMoreText?: string
}

export default function Accordion(model: WidgetModel) {
    var {intro, items, loadLimit, loadMoreText} = model.content as AccordionModel;
    const [revealed, setRevealed] = useState(loadLimit || items.length);
    var {theme} = useCommonDataContext();
    var textColor = 'lightBlueText';
    if (intro && intro.toLowerCase().indexOf("frequently asked questions") > -1) {
        return null;
    }
    switch (theme) {
        case 'Cool':
            textColor = 'blueText';
            break;
    }
    return (
        <WidgetWrapper model={model} styles={styles}>
            {!!intro &&
                <Rte className={styles.intro} text={intro} />
            }
            {items.slice(0, revealed).map(item =>
                <AccordionItem key={item.label} classes={{root: styles.item}}>
                    <AccordionSummary classes={{root: styles.summary, expanded: styles.expanded}} expandIcon={<span className={styles.indicator + ' bmg-icon bmg-icon-chevron-down'}></span>}>
                        <h4 className={styles.title + ' ' + textColor + " noMargin"}>{item.label}</h4>
                    </AccordionSummary>
                    <AccordionDetails classes={{root: styles.details}}>
                        <Grid className={styles.grid} content={item.bodyText} />
                    </AccordionDetails>
                </AccordionItem>
            )}
            {!!loadMoreText && !!loadLimit && revealed < items.length &&
                <div className="small-margin-top-1 medium-margin-top-2">
                    <a className='button' onClick={() => setRevealed(revealed + (loadLimit as number))}>{loadMoreText}</a>
                </div>
            }
        </WidgetWrapper>
    )
}