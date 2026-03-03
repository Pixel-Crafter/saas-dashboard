import { StatCard } from "@/components/ui/stat-card";
import { Activity, DollarSign, ShoppingCart, Users } from "lucide-react";

export default function DashboardLayout() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">
                Overview
            </h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Revenue"
                    value="$24,500"
                    change="+12% from last month"
                    icon={<DollarSign size={18} />}
                />

                <StatCard 
                    title="Users"
                    value="1,245"
                    change="+8% from last month"
                    icon={<Users size={18} />}
                />

                <StatCard 
                    title="Orders"
                    value="320"
                    change="+5% from last month"
                    icon={<ShoppingCart size={18} />}
                />

                <StatCard 
                    title="Engagement"
                    value="89%"
                    change="+2% from last month"
                    icon={<Activity size={18} />}
                />
            </div>
        </div>
    )
}