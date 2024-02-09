import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import WidgetWrapper from "../widgetWrapper";
import styles from './textColumns.module.scss';

export default function TextColumns(model: WidgetModel) {
    return (
        <WidgetWrapper model={model} styles={styles}>
            <p>Markup goes here.</p>
        </WidgetWrapper>
    )
}