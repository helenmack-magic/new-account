import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Sidebar } from "@/components/sidebar"
import { TopNav } from "@/components/top-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "服装工厂管理系统",
  description: "全面的服装工厂管理系统",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={cn(inter.className, "bg-gray-50")}>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <TopNav />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}

