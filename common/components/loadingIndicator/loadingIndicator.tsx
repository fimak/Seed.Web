import { ReactNode } from "react"

export type LoadingIndicatorModel = {
    children?: ReactNode[]
}

export default function LoadingIndicator() {
    return (
        <p>Loading...</p>    
    )
}