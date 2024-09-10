import { useCallback, useEffect, useRef, useState } from "react";
import Quill from "quill";
import { Modules } from "@/lib/utils";


export function useEditor() {
    const [editorState, setEditorState] = useState<string>("");
    const editorRef = useRef<HTMLDivElement>(null);
    const quillRef = useRef<Quill | null>(null);

    const initializeEditor = useCallback(() => {
        if (editorRef.current && !quillRef.current) {
            const editor = document.createElement('div');
            editorRef.current.innerHTML = '';
            editorRef.current.append(editor);
            quillRef.current = new Quill(editor, {
                theme: 'snow',
                modules: Modules,
            });

            quillRef.current.root.innerHTML = editorState;

            quillRef.current.on('text-change', () => {
                const currentContent = quillRef.current?.root.innerHTML || '';
                if (currentContent !== editorState) {
                    setEditorState(currentContent);
                }
            });
        }
    }, [editorState]);

    useEffect(() => {
        if (quillRef.current) {
            const currentContent = quillRef.current.root.innerHTML;
            if (currentContent !== editorState) {
                quillRef.current.root.innerHTML = editorState;
            }
        }
    }, [editorState]);

    const getEditorContent = () => {
        return quillRef.current ? quillRef.current.root.innerHTML : '';
    };

    const setEditorContent = (content: string) => {
        setEditorState(content);
    };

    return {
        editorRef,
        initializeEditor,
        getEditorContent,
        setEditorContent
    };
};