import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import "quill/dist/quill.snow.css";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const Modules = {
  theme: 'snow',
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["blockquote", "code-block"],
    ["clean"],
  ]
}