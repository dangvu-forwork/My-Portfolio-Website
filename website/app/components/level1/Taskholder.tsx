import { type ReactNode } from "react"
import "./components.css"

interface Props {
    children?: ReactNode;
}

export default function({ children }: Props){
    return <div id="taskholder">
        {children}
    </div>
}