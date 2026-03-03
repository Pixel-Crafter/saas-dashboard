import { StatCard } from "@/components/ui/stat-card";
import { statsData } from "@/lib/mock-data";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">
                Overview
            </h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {statsData.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <StatCard 
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                            icon={<Icon size={18} />}
                        />
                    )
                })}
            </div>
        </div>
    )
}