"use client"

import { SeverityCard } from "@/components/dashboard/serverity-card"
import { SearchToolbar } from "@/components/dashboard/search-toolbar"
import { ScanTable } from "@/components/dashboard/scan-table"
export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="p-4 bg-white dark:bg-red-500">Test</div>

            {/* Breadcrumb + Actions */}
            <div className="flex items-center justify-between">
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    Scan &nbsp;›&nbsp; Private Assets &nbsp;›&nbsp; 
                    <span className="text-teal-500 font-medium">New Scan</span>
                </div>

                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 text-sm border rounded-lg dark:border-neutral-700">
                        Export Report
                    </button>
                    <button className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg">
                        Stop Scan
                    </button>
                </div>
            </div>

            {/* Org Stats */}
            <div className="flex flex-wrap gap-6 text-sm text-neutral-600 dark:text-neutral-400 border-b pb-4 dark:border-neutral-800">
                <div><span className="font-medium">Org:</span> Project X</div>
                <div><span className="font-medium">Owner:</span> Namnagiri</div>
                <div><span className="font-medium">Total Scans:</span> 100</div>
                <div><span className="font-medium">Scheduled:</span> 1000</div>
                <div><span className="font-medium">Rescans:</span> 100</div>
                <div><span className="font-medium">Failed Scans:</span> 100</div>
                <div className="text-teal-500">10 mins ago</div>
            </div>

            {/* Severity Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <SeverityCard title="Critical Severity" value="86" type="critical" />
                <SeverityCard title="High Severity" value="16" type="high" />
                <SeverityCard title="Medium Severity" value="26" type="medium" />
                <SeverityCard title="Low Severity" value="16" type="low" />
            </div>

            {/* Search + Toolbar */}
            <SearchToolbar />

            {/* Table */}
            <ScanTable />

        </div>
    )
}