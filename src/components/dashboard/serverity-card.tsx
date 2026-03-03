import {
    AlertOctagon,
    AlertTriangle,
    ShieldAlert,
    Search
} from "lucide-react"

interface Props {
    title: string
    value: string
    type: "critical" | "high" | "medium" | "low"
}

export function SeverityCard({ title, value, type }: Props) {

    const styles = {
        critical: {
            icon: <AlertOctagon size={16} />,
            bg: "bg-pink-100 text-pink-600 dark:bg-pink-500/15 dark:text-pink-400",
            change: "text-red-500"
        },
        high: {
            icon: <AlertTriangle size={16} />,
            bg: "bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400",
            change: "text-orange-400"
        },
        medium: {
            icon: <ShieldAlert size={16} />,
            bg: "bg-yellow-100 text-yellow-600 dark:bg-yellow-500/15 dark:text-yellow-400",
            change: "text-yellow-400"
        },
        low: {
            icon: <Search size={16} />,
            bg: "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
            change: "text-blue-400"
        }
    }

    const current = styles[type]

    return (
        <div className="p-5 rounded-xl bg-white dark:bg-[#111E2C] border border-neutral-200 dark:border-white/8">

            <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {title}
                </p>

                <div className={`w-8 h-8 flex items-center justify-center rounded-lg ${current.bg}`}>
                    {current.icon}
                </div>
            </div>

            <div className="text-2xl font-semibold mb-1">
                {value}
            </div>

            <p className={`text-xs ${current.change}`}>
                + 2.3% increase from yesterday
            </p>

        </div>
    )
}