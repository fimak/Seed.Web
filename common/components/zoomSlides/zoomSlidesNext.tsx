import React, { useContext } from 'react';
import { ReactNode } from 'react';
import { ZoomSlidesContext } from './zoomSlidesProvider';

export type ZoomSlidesNextModel = {
	children: ReactNode,
	className?: string
}

export default function ZoomSlidesNext({ children, className }: ZoomSlidesNextModel) {
    const { state, dispatch } = useContext(ZoomSlidesContext);
    const handleClick = () => {
        dispatch(state.index + 1);
    }
    return (
        <span className={className} onClick={handleClick}>
            {children}
        </span>
    )
}