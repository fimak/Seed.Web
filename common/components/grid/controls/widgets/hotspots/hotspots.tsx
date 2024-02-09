import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import styles from './hotspots.module.scss';
import WidgetWrapper from "../widgetWrapper";

export default function Hotspots(model: WidgetModel) {
    return (
        <WidgetWrapper model={model} styles={styles}>
            <p>Markup goes here.</p>
        </WidgetWrapper>
    )
}