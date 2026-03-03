"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/store/use-auth-store"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    const { isAuthenticated, checkAuth } = useAuthStore()

    useEffect(() => {
        checkAuth()
    }, [])

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login")
        }
    }, [isAuthenticated])

    if (!isAuthenticated) return null

    return (
        <div className="min-h-screen flex bg-white dark:bg-neutral-950">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Topbar />
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}