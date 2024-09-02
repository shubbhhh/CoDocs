import React from "react";
import Header from "@/components/Header";
import RecentDocs from "@/components/RecentDocs";
import AllDocs from "@/components/AllDocs";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  
  return (
    <div className="flex-col p-2">
      <Header className="p-2 flex justify-between rounded-md shadow-sm items-center">
        Signin
      </Header>
      <div className="flex justify-center items-center">
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            NEW
          </CardContent>
        </Card>
        <div className="flex items-center justify-center">
          <RecentDocs />
        </div>
      </div >
      <div className="flex items-center justify-center">
        <AllDocs />
      </div>
    </div>
  )
}

export default Home;