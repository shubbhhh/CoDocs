"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";


export default function() {
    const handleSubmit = () => {

    }
    
    return (
        <div className="h-[100vh] flex justify-center">
            <div className="flex items-center justify-center">
                <Card className="">
                    <CardHeader className="m-2 items-center border-b-2">
                        <div className="text-3xl font-light ">
                            Sing-In
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div>
                            Username
                        </div>
                        <input type="text" placeholder="Username or email" className="bg-transparent outline-0 focus:border-b-2" />
                    </CardContent>
                    <CardContent>
                        <div>
                            Password
                        </div>
                        <input type="text" placeholder="*******" className="bg-transparent outline-none" />
                    </CardContent>
                    <CardContent>
                        <Button onClick={handleSubmit} className="w-full">
                            Login
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}