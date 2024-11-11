import React, {ReactNode} from "react";
import Navbar from "@/app/components/Navbar";

export default function layout({children}: Readonly<{children: ReactNode}>) {
    return (
        <main className="font-work-sans">
            <Navbar />

            {children}
        </main>
    )
}