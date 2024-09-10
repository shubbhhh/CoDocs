import Editor from "@/components/Editor";
import Header from "@/components/Header";


export default function Docs() {
    return (<div className="h-[100vh]">
        <Header />
        <div className="flex items-center justify-center p-4 min-w-max">
            <div className="max-w-3xl h-full">
                <Editor />
            </div>
        </div>
    </div>
    );
  }