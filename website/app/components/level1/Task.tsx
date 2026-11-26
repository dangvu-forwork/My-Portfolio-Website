import { type ReactNode } from "react"
import "./components.css"

interface Props {
    // children: ReactNode;
    taskIcon: React.ImgHTMLAttributes<HTMLImageElement>['src'];
    taskName: string
}

export default function({ taskIcon, taskName }: Props){
    return <div className="task down-gradient">
        <img src={taskIcon}/>
        <p>{taskName}</p>
    </div>
}