import { GridConfig } from "./gridConfig.type"
import { GridControl } from "./gridControl.type"

export type GridCell = {
    size: number,
    config?: GridConfig,
    controls: GridControl[]
}