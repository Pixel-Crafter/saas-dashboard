"use client"

import Link from "next/link";
import { BarChart3, LayoutDashboard, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

export function Sidebar() {
    const pathname = usePathname()

    const navItems =[
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            label: "Analytics",
            href: "/dashboard/analytics",
            icon: BarChart3
        },
        {
            label: "Settings",
            href: "/dashboard/settings",
            icon: Settings,
        },
    ]

    return (
        <aside className="w-64 border-r border-neutral-200 dark:border-neutral-800 p-4 hidden md:flex flex-col">
            <h1 className="text-lg font-semibold mb-8">
                SaaS Panel
            </h1>

            <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition
                                ${
                                    isActive
                                        ? "bg-neutral-200 dark:bg-neutral-800 font-medium"
                                        : "hover:bg-neutral-100 dark:hover:bg-neutral-900"
                                }`}
                        >
                            <Icon size={18} />
                            {item.label}
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}