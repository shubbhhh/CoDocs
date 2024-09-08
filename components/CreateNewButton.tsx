"use client"

import { Plus } from "lucide-react"
import { v4 as uuidv4 } from "uuid"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"



export default function() {
    const router = useRouter()
    const handleNewDoc = () => {
        const docId = uuidv4()
        
        router.push (`documents/${docId}`)
    }

    return (
        <Button onClick={handleNewDoc} className="flex items-center justify-center w-2/3 h-20 rounded-full font-semibold bg-gradient-to-bl hover:opacity-90 from-blue-500 to-white">
            <Plus /> 
            Create a new
        </Button> 
    )
}