import { ImageModel } from "@lib/umbraco/types/imageModel.type";
import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import { getCropUrl } from "@lib/umbraco/util/helpers";
import Rte from "../../rte";
import WidgetWrapper from "../widgetWrapper";
import styles from "./banner.module.scss";
import CroppedImage from "@components/images/croppedImage";
import isDark from "common/util/isDark";

export default function Banner(model: WidgetModel) {
    return (
        <WidgetWrapper model={model} styles={styles}>
            <p>Markup goes here.</p>
        </WidgetWrapper>
    )
}