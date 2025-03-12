import { Wallet } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-8">
            <div className="container flex flex-col items-center justify-between space-y-4 px-4 md:flex-row md:space-y-0">
                <div className="flex items-center space-x-2">
                    <Wallet className="h-6 w-6 text-cyan-400" />
                    <span className="font-bold">Ares</span>
                </div>
                <p className="text-sm text-gray-400">© {new Date().getFullYear()} Ares. Todos los derechos reservados.</p>
                <div className="flex space-x-6">
                    <Link className="text-sm text-gray-400 hover:text-cyan-400" href="#">
                        Privacidad
                    </Link>
                    <Link className="text-sm text-gray-400 hover:text-cyan-400" href="#">
                        Términos
                    </Link>
                </div>
            </div>
        </footer>
    )
}
