import { ImageModel } from "@lib/umbraco/types/imageModel.type";
import { UmbracoNode } from "@lib/umbraco/types/umbracoNode.type";
import { WidgetModel } from "../../../../../../lib/umbraco/types/widgetModel.type";
import WidgetWrapper from "../widgetWrapper";
import styles from './carousel.module.scss';

export default function Carousel(model: WidgetModel) {
    return (
        <WidgetWrapper model={model} styles={styles}>
            <p>Markup goes here.</p>
        </WidgetWrapper>
    )
}