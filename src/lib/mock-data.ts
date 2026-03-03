import { Activity, DollarSign, LucideIcon, ShoppingCart, Users } from "lucide-react"

export interface StatItem {
    title: string
    value: string
    change: string
    icon: LucideIcon
}

export const statsData: StatItem[] = [
    {
        title: "Revenue",
        value: "$24,500",
        change: "+12% from last month",
        icon: DollarSign,
    },
    {
        title: "Users",
        value: "1,245",
        change: "+8% from last month",
        icon: Users,
    },
    {
        title: "Orders",
        value: "320",
        change: "+5% from last month",
        icon: ShoppingCart,
    },
    {
        title: "Engagement",
        value: "89%",
        change: "+2% from last month",
        icon: Activity
    },
]