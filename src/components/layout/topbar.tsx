"use client"

import { useAuthStore } from "@/store/use-auth-store";
import { ThemeToggle } from "../theme-toggle";
import { useRouter } from "next/navigation";

export function Topbar() {
    const { logout } = useAuthStore()
    const router = useRouter()

    const handleLogout = () => {
        logout()
        router.replace("/login")        
    }

    return (
        <header className="h-16 border-b border-neutral-200 dark:*:border-neutral-800 flex items-center justify-between px-6">
            <h1 className="text-lg font-semibold">
                Dashboard
            </h1>
            
            <div className="flex items-center gap-4">
                <ThemeToggle />
                <button
                    onClick={handleLogout}
                    className="text-sm px-3 py-1.5 border rounded-md hover:bg-neutral-100 dark:bg-neutral-800 transition"
                >
                    Logout
                </button>
            </div>
        </header>
    )
}