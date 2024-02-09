import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import WidgetWrapper from "../widgetWrapper";
import styles from "./dealerSearch.module.scss";


export default function DealerSearch(model: WidgetModel) {
    return (
        <WidgetWrapper model={model} styles={styles}>
            <p>Markup goes here.</p>
        </WidgetWrapper>
    )
}