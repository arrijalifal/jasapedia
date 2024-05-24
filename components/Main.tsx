import Header from "./Header";
import { ReactNode } from "react";

export default function Main({ children, flex=true }: { children?: ReactNode; flex?: boolean}) {
    return <main className="px-4 h-screen flex flex-col">
        <Header />
        <main className={`flex-1 ${(flex) ? 'flex justify-between items-center' : ''} pl-4`}>
            {
                children
            }
        </main>
    </main>
}