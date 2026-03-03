"use client"

import { RevenueChart } from "@/components/ui/revenue-chart";
import { SkeletonCard } from "@/components/ui/skeleton-card";
import { SkeletonChart } from "@/components/ui/skeleton-chart";
import { StatCard } from "@/components/ui/stat-card";
import { statsData } from "@/lib/mock-data";
import { useEffect, useState } from "react";

export default function DashboardPage() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1200)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">
                Overview
            </h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {loading
                    ? Array.from({ length: 4 }).map((_, i) => (
                        <SkeletonCard key={i} />
                    ))
                    : statsData.map((stat) => {
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

            {loading ? <SkeletonChart /> : <RevenueChart />}
        </div>
    )
}