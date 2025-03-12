
import { PawPrint } from "lucide-react"
import Link from "next/link"

const navigation = [
    { name: 'Our Team', href: '/team' },
    { name: 'Tech Stack', href: '/tech-stack' },
]

export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="container flex h-16 items-center justify-around px-4 text-white">
                <Link className="flex items-center space-x-2 font-bold" href="/">
                    <PawPrint className="h-6 w-6 text-cyan-400" />
                    <span>MeowMed</span>
                </Link>
                <div className="flex items-center space-x-5 ">
                    {navigation.map((item) => (
                        <Link key={item.name} className="hidden text-sm hover:text-cyan-400 sm:block" href={item.href}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}