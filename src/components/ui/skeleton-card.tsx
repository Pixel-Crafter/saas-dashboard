export function SkeletonCard() {
    return (
        <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 animate-pulse space-y-4">
            <div className="h-4 w-24 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
            <div className="h-6 w-32 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
            <div className="h-4 w-20 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
        </div>
    )
}