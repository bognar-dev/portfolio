"use client"

import Link from "next/link";
import { Combobox } from "@/components/combobox";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { fontSerif } from "@/lib/fonts";
import { cn } from "@/lib/utils";


export default function IndexPage() {
    return (
        <div className=" flex flex-col justify-center items-center min-h-screen"
            style={{
                backgroundImage: "url('https://source.unsplash.com/DEaIt9Fkmi4/2400x3600')"
            }}>
            <div className="backdrop-blur-sm shadow-xl rounded-xl p-10 justify-center items-center">
                <h1 className={cn(
                    "font-serif text-5xl"
                )}>Steps For Creating <br /> Beautiful <br /> Artwork </h1>

                <div className="flex flex-col md:flex-row gap-10 mt-10">
                    <div className="grid grid-flow-row gap-3 bg-card justify-center items-center rounded-xl p-10">
                        <h1>Discover the best workshops <br /> near you</h1>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-flow-row bg-card justify-center items-center rounded-xl p-10">
                        <h1>Resources</h1>
                        <Button variant={"outline"}/>
                        
                    </div>
                    <div className="grid grid-flow-row bg-card justify-center items-center rounded-xl p-10">
                        <h1>Choose your tools</h1>
                        <Button variant={"outline"}>
                            <Link href={"/learnmore"}>Learn More</Link>
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
