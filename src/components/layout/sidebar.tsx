"use client"

import Link from "next/link";

export function Sidebar() {
    return (
        <aside className="w-64 border-r border-neutral-200 dark:border-neutral-800 p-4 hidden md:block">
            <h1 className="text-lg font-semibold mb-6">
                SaaS Panel
            </h1>

            <nav className="flex flex-col gap-3 text-sm">
                <Link href="/dashboard" className="hover:text-blue-600">
                    Dashboard
                </Link>
                <Link href="#" className="hover:text-blue-600">
                    Analytics
                </Link>
                <Link href="#" className="hover:text-blue-600">
                    Settings
                </Link>
            </nav>
        </aside>
    )
}