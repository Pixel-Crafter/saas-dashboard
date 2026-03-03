"use client"

import {
    LayoutDashboard,
    Folder,
    Scan,
    Calendar,
    Bell,
    Settings,
    LifeBuoy,
    ChevronRight,
} from "lucide-react"

export function Sidebar() {
    return (
        <aside className="w-64 flex flex-col justify-between bg-[#F5F7F9] dark:bg-[#0B1621] border-r border-neutral-200 dark:border-white/5">

            {/* TOP SECTION */}
            <div>

                {/* Logo */}
                <div className="px-6 py-6 flex items-center gap-2 text-lg font-semibold">
                    <div className="w-3 h-3 bg-teal-400 rounded-full" />
                    aps
                </div>

                {/* Primary Nav */}
                <nav className="px-4 space-y-1 text-sm">

                    <NavItem
                        icon={<LayoutDashboard size={18} />}
                        label="Dashboard"
                        active
                    />

                    <NavItem
                        icon={<Folder size={18} />}
                        label="Projects"
                    />

                    <NavItem
                        icon={<Scan size={18} />}
                        label="Scans"
                    />

                    <NavItem
                        icon={<Calendar size={18} />}
                        label="Schedule"
                    />

                </nav>

                {/* Divider */}
                <div className="my-6 border-t border-neutral-200 dark:border-white/5" />

                {/* Secondary Nav */}
                <nav className="px-4 space-y-1 text-sm">

                    <NavItem
                        icon={<Bell size={18} />}
                        label="Notifications"
                    />

                    <NavItem
                        icon={<Settings size={18} />}
                        label="Settings"
                    />

                    <NavItem
                        icon={<LifeBuoy size={18} />}
                        label="Support"
                    />

                </nav>
            </div>

            {/* BOTTOM USER */}
            <div className="border-t border-neutral-200 dark:border-white/5 p-4">
                <div className="flex items-center justify-between gap-3">

                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center font-semibold">
                            A
                        </div>

                        <div className="text-xs">
                            <p className="font-medium">
                                admin@edu.com
                            </p>
                            <p className="text-neutral-500 dark:text-neutral-400">
                                Security Lead
                            </p>
                        </div>
                    </div>

                    <ChevronRight size={16} className="text-neutral-400" />

                </div>
            </div>

        </aside>
    )
}

/* Nav Item Component */

function NavItem({
    icon,
    label,
    active = false,
}: {
    icon: React.ReactNode
    label: string
    active?: boolean
}) {
    return (
        <div
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition ${
                active
                    ? "bg-teal-100 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400 font-medium"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-white/5"
            }`}
        >
            {icon}
            {label}
        </div>
    )
}