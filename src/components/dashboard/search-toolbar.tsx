export function SearchToolbar() {
    return (
        <div className="flex items-center justify-between gap-4">

            <input
                placeholder="Search scans by name or type..."
                className="flex-1 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#111827] text-sm focus:outline-none"
            />

            <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-sm border rounded-lg dark:border-neutral-700">
                    Filter
                </button>
                <button className="px-4 py-2 text-sm border rounded-lg dark:border-neutral-700">
                    Column
                </button>
                <button className="px-4 py-2 text-sm bg-teal-500 text-white rounded-lg">
                    + New scan
                </button>
            </div>

        </div>
    )
}