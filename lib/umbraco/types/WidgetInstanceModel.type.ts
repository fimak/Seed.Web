import { WidgetModel } from "./widgetModel.type";

export interface WidgetInstanceModel extends WidgetModel {
    styles: {[key: string]: string}
}