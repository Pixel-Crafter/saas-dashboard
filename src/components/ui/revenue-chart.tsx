"use client"

import { revenueChartData } from "@/lib/mock-data"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export function RevenueChart() {
    return (
        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <h2 className="text-lg font-semibold mb-4">
                Revenue Overview
            </h2>

            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueChartData}>
                        <XAxis dataKey="month" stroke="#888888" />
                        <YAxis stroke="#888888" />
                        <Tooltip />
                        <Line 
                            type="monotone"
                            dataKey="revenue"
                            stroke="#3b82f6"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}