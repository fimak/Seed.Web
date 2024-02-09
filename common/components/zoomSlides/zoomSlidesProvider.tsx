import { createContext, Dispatch, ReactNode, ReducerAction, useReducer } from "react";

export type ZoomSlidesState = {
    index: number,
    prevIndex: number,
    limit: number,
    animating: boolean
}

export const reducer = (state: ZoomSlidesState, index: number) => {
    if (index === state.index) {
        return state;
    }
    var result = {
        ...state
    };
    if (index < 0) {
        result.index = state.limit;
    }
    else if (index > state.limit) {
        result.index = 0;
    }
    else {
        result.index = index;
    }
    result.prevIndex = state.index;
    return result;
}

export type ZoomSlidesContextModel = {
    state: ZoomSlidesState,
    dispatch: Dispatch<ReducerAction<typeof reducer>>
}


export const ZoomSlidesContext = createContext<ZoomSlidesContextModel>({
    state: { index: 0, prevIndex: 0, limit: 0, animating: false },
    dispatch: () => null
});

export type ZoomSlidesProviderModel = {
    children: ReactNode,
    limit: number
}

export const ZoomSlidesProvider = ({ children, limit }: ZoomSlidesProviderModel) => {
    const [state, dispatch] = useReducer(reducer, {
        index: 0,
        prevIndex: 0,
        limit: limit,
        animating: false
    });

    return (
        <ZoomSlidesContext.Provider value={{ state, dispatch }}>
            {children}
        </ZoomSlidesContext.Provider>
    )
}