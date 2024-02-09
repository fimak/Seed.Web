import { WidgetModel } from '@lib/umbraco/types/widgetModel.type';
import styles from './pinnedLinks.module.scss';
import WidgetWrapper from '../widgetWrapper';

export default function PinnedLinks(model: WidgetModel) {
    
    return (
        <WidgetWrapper model={model} styles={styles}>
            <p>Code goes here</p>
        </WidgetWrapper>
    )
}