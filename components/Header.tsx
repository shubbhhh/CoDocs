import { Search } from "lucide-react"

export default function Header() {
    return (
        <div className="p-2 shadow flex justify-between">
            <div className="flex items-center">
                <img src="/docsIcon.png" alt="Doc Icon" height={40} width={40} />
                <div className="font-semibold items-center">
                    Co-Docs
                </div>
            </div>

            <div className="flex bg-slate-100 px-2 rounded-3xl w-1/4 items-center">
                <Search />
                <input type="text" placeholder="Search" name="" id="" className="w-full px-2 bg-slate-100 outline-none" />
            </div>

            <div className="bg-black h-10 w-10 rounded-full">

            </div>
        </div>
    )
}