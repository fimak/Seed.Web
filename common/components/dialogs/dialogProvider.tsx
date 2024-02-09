import React, { createContext, Dispatch, ReactNode, ReducerAction, useReducer } from "react";





export type DialogModalState = {
    modals: NodeJS.Dict<boolean>
}

export type DialogEvent = {
    action: string,
    id: string
}

export const reducer = (state: DialogModalState, event: DialogEvent) => {
    var modals = {
        ...state.modals
    };
    switch (event.action) {
        case "open":
            modals[event.id] = true;
            break;
        case "close":
            modals[event.id] = false;
            break;
        case "toggle":
            modals[event.id] = !modals[event.id];
            break;
        default:
            return state;
    }
    return {
        ...state,
        modals
    };
}

export const initialState = {
    modals: {}
} as DialogModalState;

export type DialogContextModel = {
    state: DialogModalState,
    dispatch: Dispatch<ReducerAction<typeof reducer>>
}

export const DialogContext = createContext<DialogContextModel>({
    state: initialState,
    dispatch: () => null
});

export type DialogProviderModel = {
    children: ReactNode
}

export const DialogProvider = ({ children }: DialogProviderModel) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <DialogContext.Provider value={{ state, dispatch }}>
            {children}
        </DialogContext.Provider>
    )
}