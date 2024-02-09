import { useCommonDataContext } from "@components/layout/layout";
import { WidgetModel } from "@lib/umbraco/types/widgetModel.type";
import { CSSProperties, forwardRef, ReactNode, RefObject } from "react";

export type WidgetExportModel = {
    model: WidgetModel,
    styles?: { readonly [key: string]: string }
    className?: string,
    style?: CSSProperties,
    children: ReactNode | ReactNode[],
    ref: RefObject<HTMLDivElement>
}

const WidgetWrapper = forwardRef<HTMLDivElement, WidgetExportModel>(({model, styles = {}, className = '', style, children}, ref) => {
    // var data = useCommonDataContext();
    // var theme = ' ' + (data.theme ? styles['theme' + data.theme] : '');
    return (
        <div className={`${className} ${styles['widget' + model.widget]} ${styles['variant' + model.variant]} ${styles['layout' + model.layout]}`} style={style} ref={ref}>
            {children}
        </div>
    )
});

export default WidgetWrapper;