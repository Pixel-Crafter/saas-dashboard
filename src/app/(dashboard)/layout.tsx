"use client"

import { Sidebar } from "@/components/layout/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-[#F5F7F9] dark:bg-[#0A1420] transition-colors duration-300">

            <Sidebar />

            <main className="flex-1 px-8 py-6 bg-white dark:bg-[#0E1A27] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">

                <div className="flex justify-end mb-6">
                    <ThemeToggle />
                </div>

                {children}

            </main>

        </div>
    )
}