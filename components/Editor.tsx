"use client"

import { useEffect } from "react";
import { useEditor } from "@/hooks/useEditor";

  

export default function Editor() {
    const { editorRef, setEditorContent, getEditorContent, initializeEditor } = useEditor();

    useEffect(() => {
        initializeEditor();
    }, [initializeEditor])

    return (
        <div id="editor" ref={editorRef}></div>
    )
};