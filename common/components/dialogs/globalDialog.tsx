import { Breakpoint, Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"
import React, { createContext, forwardRef, useContext } from "react"
import { DialogContext } from "./dialogProvider"

export type GlobalDialogModel = {
    classes?: NodeJS.Dict<string>,
    className?: string,
    size?: false | Breakpoint | undefined,
    onOpen?: () => void,
    onClose?: () => void,
    children: React.ReactNode | React.ReactNode[],
    id: string
}

export const GlobalDialogContext = createContext<string>('');

export default function GlobalDialog({ classes, className, onOpen, onClose, children, id, size }: GlobalDialogModel) {
    const { state, dispatch } = useContext(DialogContext);
    const Transition = forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement<any, any>
        },
        ref: React.Ref<unknown>
    ) {
        return <Slide direction="up" ref={ref} {...props} onExited={() => {
            if (onClose) {
                onClose();
            }
        }} onEnter={() => {
            if (onOpen) {
                onOpen();
            }
        }} />;
    });

    const handleClose = () => {
        dispatch({
            id,
            action: 'close'
        });
    }

    return (
        <GlobalDialogContext.Provider value={id}>
            <Dialog classes={classes} className={className} open={!!state.modals[id]} TransitionComponent={Transition} maxWidth={size} onClose={handleClose}>
                <DialogContent>
                    {children}
                </DialogContent>
            </Dialog>
        </GlobalDialogContext.Provider>
    ) 
}