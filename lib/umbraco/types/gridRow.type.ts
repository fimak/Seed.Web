import { GridCell } from "./gridCell.type"
import { GridConfig } from "./gridConfig.type"

export type GridRow = {
    config?: GridConfig,
    layout: string,
    cells: GridCell[]
}