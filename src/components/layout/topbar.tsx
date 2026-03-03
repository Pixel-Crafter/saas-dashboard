"use client"

import { ThemeToggle } from "../theme-toggle";

export function Topbar() {
    return (
        <header className="h-16 border-b border-neutral-200 dark:*:border-neutral-800 flex items-center justify-between px-6">
            <h1 className="text-lg font-semibold">
                Dashboard
            </h1>

            <ThemeToggle />
        </header>
    )
}