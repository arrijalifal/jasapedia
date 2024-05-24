import Image from "next/image";
import jasapedialogo from "@/public/images/jasapedialogo.png";
import Link from "next/link";

export default function Header() {
    return <header className="flex justify-between items-center">
        <div className="relative w-56 h-32">
            <Link href={'/'}><Image src={jasapedialogo} fill={true} alt="logo jasapedia" className="object-contain"></Image></Link>
        </div>
        <div>
            <Link href={'/about'}><button className="mr-6">About</button></Link>
            <Link href={'/contact'}><button className="mr-6">Contact</button></Link>
            <button className="border border-white px-4 py-2 rounded-xl cursor-not-allowed">Download</button>
        </div>
    </header>
}