import React, { Fragment, ReactElement } from "react";
import { ReactNode } from "react";
import { DialogContext } from "./dialogProvider";
export type DialogTriggerModel = {
    id: string,
    children?: ReactNode,
    close?: boolean,
    className?: string
}
export default function DialogTrigger({ children, id, close, className }: DialogTriggerModel) {
    const { dispatch } = React.useContext(DialogContext);
    const handleClick = () => {
        dispatch({
            action: (close) ? 'close' : 'open',
            id: id
        })
    }
    if (children && (!Array.isArray(children) || children.length > 1)) {
        return (
            <div className={className} onClick={handleClick}>
                {children}
            </div>
        )
    }
    return (
        <span className={className} onClick={handleClick}>
            {children}
        </span>
    )
}