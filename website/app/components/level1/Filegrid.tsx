import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react"
import "./components.css"

interface Props {
    children?: ReactNode;
}

interface FileSelection {
    selectedFileId: string | null;
    selectFile: (id: string) => void;
}

const FileSelectionContext = createContext<FileSelection | null>(null)

export function useFileSelection() {
    const selection = useContext(FileSelectionContext)
    if (!selection) {
        throw new Error("File must be rendered inside Filegrid")
    }
    return selection
}

export default function({ children }: Props){
    const [selectedFileId, setSelectedFileId] = useState<string | null>(null)
    const gridRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleDocumentClick = (event: MouseEvent) => {
            const target = event.target
            if (
                !(target instanceof Element) ||
                !gridRef.current?.contains(target) ||
                !target.closest(".desktop-file")
            ) {
                setSelectedFileId(null)
            }
        }

        document.addEventListener("click", handleDocumentClick)
        return () => document.removeEventListener("click", handleDocumentClick)
    }, [])

    return <FileSelectionContext.Provider value={{ selectedFileId, selectFile: setSelectedFileId }}>
        <div ref={gridRef} id="filegrid" className="down-gradient">
            {children}
        </div>
    </FileSelectionContext.Provider>
}