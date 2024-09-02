import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { Metadata } from "next"
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Co-Docs",
  description: "Google Docs like Collaborative editor."
}

export default function RootLayout({ children }: { children: ReactNode } ) {
  return (
    <ClerkProvider
    >
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
          >
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}