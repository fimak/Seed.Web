import { GridConfig } from "./gridConfig.type"
import { WidgetModel } from "./widgetModel.type"

export type GridControl = {
    config: GridConfig,
    value: WidgetModel,
    editorAlias: string
}