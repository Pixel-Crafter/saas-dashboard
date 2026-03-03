import { ReactNode } from "react"

interface StatCardProps {
    title: string
    value: string
    icon?: ReactNode
    change?: string
}

export function StatCard({
    title,
    value,
    icon,
    change,
}: StatCardProps) {
    return (
        <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-neutral-500">{title}</p>
                {icon}
            </div>

            <h2 className="text-2xl font-semibold mb-1">
                {value}
            </h2>

            {change && (
                <p className="text-sm text-green-600">
                    {change}
                </p>
            )}
        </div>
    )
}