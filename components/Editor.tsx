"use client"

import { useCallback } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"

const modules = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
  ]
  

export default function Editor() {
    const editorRef = useCallback((editRef: HTMLDivElement) => {
        if (!editRef) return

        editRef.innerHTML = ""
        const editor = document.createElement("div")
        editRef.append(editor)
        const q = new Quill(editor, 
            {
                theme: "snow",
                modules: {
                    toolbar: modules
                }
            }
        )
    }, [])

    return (
        <div id="editor" ref={editorRef}>
            
        </div>
    )
}