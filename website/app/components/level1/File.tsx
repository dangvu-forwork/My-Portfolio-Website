import { useId } from "react"
import { useFileSelection } from "./Filegrid"
import "./components.css"

interface Props {
    fileName: string,
    fileIcon: React.ImgHTMLAttributes<HTMLImageElement>['src'];
}

export default function({fileName, fileIcon}: Props){
    const id = useId()
    const { selectedFileId, selectFile } = useFileSelection()
    const selected = selectedFileId === id

    return <div
        className={`desktop-file${selected ? " selected" : ""}`}
        onClick={() => selectFile(id)}
    >
        <img src={fileIcon}/>
        <p>{fileName.replace('.', '\u200B.')}</p>
    </div>
}