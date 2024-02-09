import { Breakpoint, Dialog, DialogContent, DialogContentText, SxProps, DialogTitle, Theme } from "@mui/material"
import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"
import React, { forwardRef, useContext } from "react"
import { DialogContext } from "./dialogProvider"

export type BasicDialogModel = {
    className?: string,
    sx?: SxProps<Theme>,
    open: boolean,
    size?: false | Breakpoint | undefined,
    onClose?: () => void,
    children: React.ReactNode | React.ReactNode[]
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function BasicDialog({ onClose, children, className, open, size, sx }: BasicDialogModel) {

    return (
        <Dialog className={className} open={open} TransitionComponent={Transition} sx={sx} maxWidth={size} onClose={onClose}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    ) 
}