"use client"

import {
    Search,
    GitBranch,
    FlaskConical,
    ShieldCheck,
    FileText
} from "lucide-react"

export default function ScanDetailPage() {

    const steps = [
        { label: "Spidering", icon: <Search size={16} /> },
        { label: "Mapping", icon: <GitBranch size={16} /> },
        { label: "Testing", icon: <FlaskConical size={16} /> },
        { label: "Validating", icon: <ShieldCheck size={16} /> },
        { label: "Reporting", icon: <FileText size={16} /> },
    ]

    return (
        <div className="space-y-6">

            {/* Breadcrumb + Actions */}
            <div className="flex items-center justify-between">
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    Scan &nbsp;›&nbsp; Private Assets &nbsp;›&nbsp;
                    <span className="text-teal-500 font-medium">
                        New Scan
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 text-sm border rounded-lg border-neutral-300 dark:border-white/8">
                        Export Report
                    </button>
                    <button className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg">
                        Stop Scan
                    </button>
                </div>
            </div>

            {/* Progress Card */}
            <div className="rounded-xl bg-white dark:bg-[#111E2C] border border-neutral-200 dark:border-white/8">

                <div className="flex items-center gap-12">

                    {/* Progress Circle */}
                    <div className="relative w-24 h-24 flex items-center justify-center rounded-full 
                        bg-gradient-to-br from-teal-400 to-cyan-500 
                        text-white text-xl font-semibold shadow-lg">

                        0%

                        <span className="absolute bottom-3 text-[10px] font-normal opacity-90">
                            In Progress
                        </span>
                    </div>

                    {/* Steps */}
                    <div className="flex-1 flex items-center justify-between">

                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center gap-2">

                                <div
                                    className={`w-10 h-10 flex items-center justify-center rounded-full transition
                                        ${
                                            i === 0
                                                ? "bg-teal-500 text-white shadow-md"
                                                : "bg-neutral-200 dark:bg-white/10 text-neutral-500 dark:text-neutral-400"
                                        }`}
                                >
                                    {step.icon}
                                </div>

                                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                    {step.label}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

                {/* Meta Info */}
                <div className="mt-6 grid grid-cols-6 gap-6 text-xs text-neutral-500 dark:text-neutral-400">
                    <div>
                        <span className="font-medium text-neutral-900 dark:text-neutral-100">
                            Scan Type
                        </span>
                        <br />
                        Grey Box
                    </div>
                    <div>
                        <span className="font-medium text-neutral-900 dark:text-neutral-100">
                            Targets
                        </span>
                        <br />
                        google.com
                    </div>
                    <div>
                        <span className="font-medium text-neutral-900 dark:text-neutral-100">
                            Started At
                        </span>
                        <br />
                        Nov 22, 09:00AM
                    </div>
                    <div>
                        <span className="font-medium text-neutral-900 dark:text-neutral-100">
                            Credentials
                        </span>
                        <br />
                        2 Active
                    </div>
                    <div>
                        <span className="font-medium text-neutral-900 dark:text-neutral-100">
                            Files
                        </span>
                        <br />
                        Control.pdf
                    </div>
                    <div>
                        <span className="font-medium text-neutral-900 dark:text-neutral-100">
                            Checklists
                        </span>
                        <br />
                        40/350
                    </div>
                </div>

            </div>

            {/* Console + Findings */}
            <div className="grid grid-cols-3 gap-6">

                {/* Live Console */}
                <div className="col-span-2 rounded-xl bg-white dark:bg-[#111E2C] border border-neutral-200 dark:border-white/8 overflow-hidden">

                    <div className="px-4 py-3 border-b border-neutral-200 dark:border-white/8 text-sm font-medium">
                        Live Scan Console
                    </div>

                    <div className="p-4 text-xs font-mono text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-2">
                        <p>[09:08:08] Starting reconnaissance...</p>
                        <p>[09:08:10] Target is online.</p>
                        <p>[09:08:15] Port scan initiated.</p>
                        <p>[09:08:30] Testing authentication endpoint.</p>
                        <p>[09:08:45] Rate limiting detected.</p>
                    </div>

                </div>

                {/* Finding Log */}
                <div className="space-y-4">

                    <div className="p-4 rounded-xl bg-white dark:bg-[#111E2C] border border-neutral-200 dark:border-white/8 hover:bg-neutral-50 dark:hover:bg-white/5 transition">
                        <span className="px-2 py-0.5 text-[10px] rounded-full bg-red-500 text-white">
                            Critical
                        </span>
                        <p className="mt-2 text-sm font-medium">
                            SQL Injection in Authentication Endpoint
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                            Time-based blind SQL injection confirmed.
                        </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white dark:bg-[#111E2C] border border-neutral-200 dark:border-white/8 hover:bg-neutral-50 dark:hover:bg-white/5 transition">
                        <span className="px-2 py-0.5 text-[10px] rounded-full bg-orange-500 text-white">
                            High
                        </span>
                        <p className="mt-2 text-sm font-medium">
                            Unauthorized Access to User Metadata
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                            Privilege escalation possible.
                        </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white dark:bg-[#111E2C] border border-neutral-200 dark:border-white/8 hover:bg-neutral-50 dark:hover:bg-white/5 transition">
                        <span className="px-2 py-0.5 text-[10px] rounded-full bg-yellow-500 text-white">
                            Medium
                        </span>
                        <p className="mt-2 text-sm font-medium">
                            Broken Authentication Rate Limiting
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                            Brute force attempts possible.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}