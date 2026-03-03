export function SkeletonChart() {
    return (
        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 animate-pulse">
            <div className="h-6 w-40 bg-neutral-300 dark:bg-neutral-700 rounded mb-6"></div>
            <div className="h-72 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
        </div>
    )
}