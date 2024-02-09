import { ReactNode } from "react";

export type ConditionalWrapperModel = {
    condition: boolean,
    wrapper: (children: ReactNode) => ReactNode,
    children: ReactNode
}

export default function ConditionalWrapper({ condition, wrapper, children }: ConditionalWrapperModel) {
    return <>{
        condition ? wrapper(children) : children
    }</>
}