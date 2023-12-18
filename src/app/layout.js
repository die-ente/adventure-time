"use client";
import {Inter} from 'next/font/google'
import './globals.css'
import {SocketProvider} from "@/app/SocketContext.component";
import GmPage from "@/app/gm/ChatPage.component";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
            {children}
        </body>
        </html>
    )
}
