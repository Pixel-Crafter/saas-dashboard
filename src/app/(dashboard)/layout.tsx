import { Sidebar } from "@/components/layout/sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen">

            <Sidebar />

            <main className="flex-1 px-8 py-6 bg-white dark:bg-[#0F1C2B] text-neutral-900 dark:text-neutral-100">                
                {children}
            </main>

        </div>
    )
}