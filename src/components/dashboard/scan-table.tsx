export function ScanTable() {
    return (
        <div className="rounded-xl bg-white dark:bg-[#111F2E] border border-neutral-200 dark:border-white/5 overflow-hidden">

            <table className="w-full text-sm">
                <thead className="text-left text-neutral-500 dark:text-neutral-400 border-b dark:border-neutral-800">
                    <tr>
                        <th className="p-4">Scan Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Progress</th>
                        <th>Vulnerability</th>
                        <th>Last Scan</th>
                    </tr>
                </thead>

                <tbody>
                    {Array.from({ length: 8 }).map((_, i) => (
                        <tr key={i} className="border-b dark:border-neutral-800">
                            <td className="p-4 font-medium">Web App Servers</td>
                            <td>Greybox</td>
                            <td>
                                <span className="px-2 py-1 text-xs bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 rounded-md">
                                    Completed
                                </span>
                            </td>
                            <td>
                                <div className="flex items-center gap-2">
                                    <div className="w-24 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full">
                                        <div className="w-full h-2 bg-teal-500 rounded-full" />
                                    </div>
                                    100%
                                </div>
                            </td>
                            <td>
                                <div className="flex gap-1">
                                    <span className="px-2 py-1 text-xs bg-red-500 text-white rounded">5</span>
                                    <span className="px-2 py-1 text-xs bg-orange-500 text-white rounded">12</span>
                                    <span className="px-2 py-1 text-xs bg-yellow-500 text-white rounded">23</span>
                                    <span className="px-2 py-1 text-xs bg-green-500 text-white rounded">18</span>
                                </div>
                            </td>
                            <td>4d ago</td>
                        </tr>
                    ))}
                </tbody>

            </table>

            <div className="p-4 text-xs text-neutral-500 dark:text-neutral-400">
                Showing 15 of 100 Scans
            </div>

        </div>
    )
}