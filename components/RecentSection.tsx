import { Plus } from "lucide-react";
import { RecentDocs } from "./RecentDoc";
import { Card } from "./ui/card";

export default function RecentSection() {
    return (
      <section className="bg-gray-50 py-5 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex w-1/3 justify-center items-center">
              <Card className="flex items-center justify-center w-2/3 h-20 rounded-full font-semibold bg-gradient-to-bl from-blue-500 to-white hover:scale-95">
                <Plus /> 
                Create a new
              </Card>
            </div>
            <div className="w-2/3 border-l px-4">
              <div className="py-2 items-center font-light">
                Recent
              </div>
              <RecentDocs />
            </div>
          </div>
        </div>
      </section>
    )
}