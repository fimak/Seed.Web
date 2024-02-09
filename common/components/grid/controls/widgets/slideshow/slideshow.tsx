import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import WidgetWrapper from "../widgetWrapper";
import styles from "./slideshow.module.scss";

export default function Slideshow(model: WidgetModel) {
    return (
        <WidgetWrapper model={model} styles={styles}>
            <p>Markup goes here.</p>
        </WidgetWrapper>
    )
}