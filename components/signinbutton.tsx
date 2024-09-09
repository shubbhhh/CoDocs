"use client"

import { signIn } from "next-auth/react"

export function Singin() {
    return (
        <div className="bg-black h-[20px] w-[20px]">
            <button className="h-[20px] w-[20px] bg-white/20" onClick={() => signIn()} />
        </div>
    )
}