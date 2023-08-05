import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
    return (
        <section className="bg-white-100 flex flex-col justify-center items-center min-h-screen">

            <blockquote className="text-3xl font-semibold italic text-center text-primary-foreground m-5">
                Ship your products
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-yellow-400 to-pink-500 relative inline-block">
                    <span className="relative text-white">fast.</span>
                </span>

            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
                <div className="grid  pt-6 justify-center bg-white-900 p-8 space-y-9 shadow-lg shadow-slate-300/50 rounded-xl">
                    <h1 className="text-lg text-black text-center bg-slate-300 p-2 font-medium">FREE
                    </h1>
                    <div className="before:content-['£'] before:text-sm before:pr-1 before:bottom-5 before:relative  before:italic text-center text-4xl font-bold ">0</div>
                    <div className="text-center">GREAT FOR STARTERS</div>
                    <p className="text-center">Discover how to make your first projects.</p>
                    <button className="border-2 rounded border-black p-3 hover:bg-blue-950 hover:text-white">GET STARTED</button>
                    <ul className="gap-3">
                        <li className="before:content-['✅']"> 3 new projects / month</li>
                        <li className="before:content-['✅']"> Basic interaction</li>
                        <li className="before:content-['❌']"> Assets library</li>
                    </ul>
                </div>
                <div className="grid  pt-6 justify-center bg-white-900 p-8 space-y-9 shadow-lg shadow-indigo-300/50 rounded-xl">
                    <h1 className="text-lg text-white text-center bg-gradient-to-r from-indigo-300 to-purple-700 p-2 font-medium">LITE</h1>
                    <div className="before:content-['£'] before:text-sm before:pr-1 before:bottom-5 before:relative  before:italic text-center text-4xl font-bold  after:content-['/mo'] after:text-sm text-center">7</div>
                    <div className="text-center">FOR PLANNED PROJECTS</div>
                    <p className="text-center">Bring your designs to the next level and export them.</p>
                    <button className="border-2 rounded border-black p-3 hover:bg-blue-950 hover:text-white">GET STARTED</button>
                    <ul className="gap-3">
                        <li className="before:content-['✅']"> 3 new projects / month</li>
                        <li className="before:content-['✅']"> Basic interaction</li>
                        <li className="before:content-['✅']"> Assets library</li>
                    </ul>
                </div>
                <div className="grid  pt-6 justify-center bg-white-900 p-8 space-y-9 shadow-lg shadow-rose-300/50 rounded-xl">
                    <h1 className="text-lg text-white text-center bg-gradient-to-r from-rose-300 to-yellow-500 p-2 font-medium">PRO
                    </h1>
                    <div className="before:content-['£'] before:text-sm before:pr-1 before:bottom-5 before:relative  before:italic text-center text-4xl font-bold after:content-['/mo'] after:text-sm text-center">12</div>
                    <div className="text-center">FOR PROFESSIONAL USE</div>
                    <p className="text-center">Enjoy limitless use with interactive export options</p>
                    <button className="border-2 rounded border-black p-3 hover:bg-blue-950 hover:text-white">GET STARTED</button>
                    <ul className="gap-3">
                        <li className="before:content-['✅']"> 3 new projects / month</li>
                        <li className="before:content-['✅']"> Basic interaction</li>
                        <li className="before:content-['✅']"> Assets library</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
