import Editor from "@/components/Editor";
import Header from "@/components/Header";


export default function Docs() {
    return (<>
        <Header />
        <div className="flex items-center justify-center p-4">
            <div className="max-w-3xl">
                <Editor />
            </div>
        </div>
    </>
    );
  }