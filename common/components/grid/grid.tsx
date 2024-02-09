
import { GridConfig } from "@lib/umbraco/types/gridConfig.type";
import isDark from "common/util/isDark";
import { createContext, useContext } from "react";
import { GridSection } from "../../../lib/umbraco/types/gridSection.type";
import Base from "./controls/base";
import styles from './grid.module.scss';

const IsDarkContext = createContext<boolean>(false);

export type GridModel = {
    content: GridSection,
    className?: string
}

export const useIsDarkContext = () => {
    return useContext(IsDarkContext);
}

export default function Grid({content, className}: GridModel) {
    return (
        <div className={styles.grid}>
            {content.rows.map((row, index) => {
                const fullWidth = row.config?.settings?.fullWidth === "1";
                const wide = row.config?.settings?.wideGrid === "1";
                const rowDark = isDark(row.config?.styles?.backgroundColor);
                const columnSize = row.config?.settings?.desktopColumns === "1" ? "large" : "medium";
                const rowClasses = row.config?.classes?.map(item => styles[item]).filter(x => x).join(' ');
                return (
                    <div key={'gridRow-' + index} className={row.config?.classes?.join(' ') + ' ' + rowClasses + (rowDark ? ' darkBackground' : '') + ' ' + styles.row + ' ' + styles[row.layout] + (className ? ' ' + className : '')} style={row.config?.styles}>
                        <div className={"grid-container" + (fullWidth ? ' full' : '') + (wide ? ' wide' : '')}>
                            <div className={"grid-x grid-margin-x " + styles.area}>
                                {row.cells.map((cell, cellIndex) => {
                                    const cellDark = isDark(cell.config?.styles?.backgroundColor);
                                    const cellClasses = cell.config?.classes?.map(item => styles[item]).filter(x => x).join(' ');
                                    return (
                                        <IsDarkContext.Provider key={'gridCell-' + index + '-' + cellIndex} value={cellDark || (!cell.config?.styles?.backgroundColor && rowDark)}>
                                            <div className={styles.cell + ' cell ' + (cellDark ? ' darkBackground' : '') + columnSize + '-' + cell.size + ' ' + cell.config?.classes?.join(' ') + ' ' + cellClasses} id={cell.config?.settings?.anchorId} style={cell.config?.styles}>
                                                {
                                                    cell.controls.map((control, controlIndex) => {
                                                        //tweak to make position: sticky work
                                                        if (control.value.widget === "JumpLinks") {
                                                            return <Base key={'gridControl-' + index + '-' + cellIndex + '-' + controlIndex} alias={control.editorAlias} content={control.value} />;
                                                        }
                                                        return (
                                                            <div key={'gridControl-' + index + '-' + cellIndex + '-' + controlIndex} className={control.config?.classes?.join(' ')} style={control.config?.styles}>
                                                                <Base anchor={control.config?.settings?.anchorId} alias={control.editorAlias} content={control.value} />
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </IsDarkContext.Provider>
                                    )
                                })}
                            </div>
                        </div>
                    </div>    
                )
            })}
        </div>
    )
}