"use client"

import Link from "next/link"
import { Icon, Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ListItem} from "@/types/popover"
import { Combobox } from "@/components/combobox"
import React from "react"
import { Slider } from "@/components/ui/slider"

const dwellings = 
[
  {
      value: "Detached",
      label: "Detached",
  },
  {
      value: "Semi-attached",
      label: "Semi-Attached",
  },
  {
      value: "Council",
      label: "Council",
  },
  {
      value: "Estate",
      label: "Estate",
  },
  {
      value: "Lot",
      label: "Lot",
  }]

const years = [
  {
    value: "1",
    label: "1 Year",
},
{
    value: "2",
    label: "2 Years",
},
{
    value: "3",
    label: "3 Years",
},
{
    value: "4",
    label: "4 Years",
},
{
    value: "5",
    label: "5 Years",
}
]


export default function ICodeThis() {
  const [dwelling, setDwelling] = React.useState("");
  const [year, setYear] = React.useState("");
  const [area,setArea] = React.useState(156);
  return (
    <section className="bg-white-100 grid gap-10 items-center px-10">
      <div className="bg-white  rounded shadow-xl grid md:grid-flow-col py-10  items-center">
        <div className="grow grid grid-flow-row gap-1 md:p-10 items-center justify-items-center">
          <Icons.sun className="w-6 h-6 mb-2" />
          <span className=" text-zinc-400 uppercase text-xs">Type of dwelling</span>
          <span className=" font-bold">{dwelling?dwelling.toLocaleUpperCase():"Detached"}</span>
        </div>
        <div className="grow grid grid-flow-row gap-1 md:p-10 items-center justify-items-center">
          <Icons.sun className="w-6 h-6 mb-2" />
          <span className=" text-zinc-400 uppercase text-xs">Living area</span>
          <span className=" font-bold">{area?`${area} m2`:"156 m2"}</span>
        </div>
        <div className="grow grid grid-flow-row gap-1 md:p-10 items-center justify-items-center">
          <Icons.sun className="w-6 h-6 mb-2" />
          <span className=" text-zinc-400 uppercase text-xs">Consider to sold within</span>
          <span className=" font-bold">{year?`${year}`:"1 year"}</span>
        </div>

      </div>
      <div className=" text-zinc-400 bg-gray-800 rounded shadow-xl grid grid-flow-row justify-stretch justify-items-center">
        <div className="py-10">
          <div className="capitalise mt-5 text-xl">Edit</div>
          <div className="">Enter details and let others know when you are considering selling the property</div>
        </div>
        <div className="grow grid md:grid-flow-col gap-1 items-center justify-stretch ">

          <div className="grow grid grid-flow-row gap-1 p-10 items-center justify-items-center">
            <Icons.sun className="w-6 h-6 mb-2" />
            <span className=" uppercase text-xs">Type of dwelling</span>
            <Combobox value={dwelling} setValue={setDwelling} label={"Type"} list={dwellings} />
          </div>

          <div className="grow grid grid-flow-row gap-1 p-10 items-center justify-items-center">
            <Icons.sun className="w-6 h-6 mb-2" />
            <span className="col uppercase text-xs">Living area</span>
            <Slider className="col-span-3" onValueChange={(value:number[]) => setArea(value[0])} defaultValue={[156]} max={500} step={1} />
            
          </div>

          <div className="grow grid grid-flow-row gap-1 p-10 items-center justify-items-center">
            <Icons.sun className="w-6 h-6 mb-2" />
            <span className=" uppercase text-xs">Consider to sold within</span>
            <Combobox value={year} setValue={setYear} label={"Yearspan"} list={years} />
          </div>

        </div>
      </div>

    </section>
  )
}
