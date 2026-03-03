"use client"

import Link from "next/link"

export default function LoginPage() {
    return (
        <div
            className="relative min-h-screen text-white overflow-hidden"
            style={{
                background: `
                    radial-gradient(at 80% 20%, rgba(0, 255, 200, 0.35) 0px, transparent 50%),
                    radial-gradient(at 85% 85%, rgba(255, 120, 0, 0.45) 0px, transparent 55%),
                    linear-gradient(135deg, #08141a 0%, #0b1e24 40%, #091a1f 70%, #0a1318 100%)
                `
            }}
        >
            {/* CONTENT WRAPPER */}
            <div className="relative z-10 flex items-center justify-between px-24 min-h-screen">

                {/* LEFT SECTION */}
                <div className="max-w-xl space-y-10">

                    {/* Logo */}
                    <div className="flex items-center gap-2 text-lg font-semibold">
                        <div className="w-3 h-3 bg-teal-400 rounded-full" />
                        aps
                    </div>

                    {/* Hero */}
                    <h1 className="text-[52px] font-bold leading-[1.1]">
                        Expert level Cybersecurity
                        <br />
                        in <span className="text-teal-400">hours</span> not weeks.
                    </h1>

                    {/* What's Included */}
                    <div className="space-y-4 text-[15px] text-neutral-300">
                        <p className="text-white font-semibold">
                            What’s included
                        </p>

                        <ul className="space-y-3">
                            <li className="flex gap-2">
                                <span className="text-teal-400">✓</span>
                                Effortlessly spider and map targets to uncover hidden security flaws
                            </li>
                            <li className="flex gap-2">
                                <span className="text-teal-400">✓</span>
                                Deliver high-quality, validated findings in hours, not weeks.
                            </li>
                            <li className="flex gap-2">
                                <span className="text-teal-400">✓</span>
                                Generate professional, enterprise-grade security reports automatically.
                            </li>
                        </ul>
                    </div>

                    {/* Trustpilot */}
                    <div className="pt-6">
                        <p className="flex items-center gap-2 text-sm">
                            <span className="text-teal-400">★</span>
                            <span className="text-white font-semibold">Trustpilot</span>
                        </p>

                        <p className="text-neutral-300 text-sm">
                            Rated 4.5/5.0{" "}
                            <span className="text-neutral-400 text-xs">
                                (100k+ reviews)
                            </span>
                        </p>
                    </div>

                </div>

                {/* RIGHT CARD */}
                <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.45)] p-12 space-y-4 text-black">

                    {/* Heading */}
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-semibold">
                            Sign up
                        </h2>
                        <p className="text-sm text-neutral-500">
                            Already have an account?{" "}
                            <Link
                                href="#"
                                className="text-teal-500 font-medium hover:underline"
                            >
                                Log in
                            </Link>
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-4">

                        <input
                            type="text"
                            placeholder="First name*"
                            className="w-full border border-neutral-300 rounded-xl px-4 py-3 bg-neutral-50 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />

                        <input
                            type="text"
                            placeholder="Last name*"
                            className="w-full border border-neutral-300 rounded-xl px-4 py-3 bg-neutral-50 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />

                        <input
                            type="email"
                            placeholder="Email address*"
                            className="w-full border border-neutral-300 rounded-xl px-4 py-3 bg-neutral-50 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />

                        <input
                            type="password"
                            placeholder="Password (8+ characters)*"
                            className="w-full border border-neutral-300 rounded-xl px-4 py-3 bg-neutral-50 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />

                        {/* Checkbox */}
                        <label className="flex items-start gap-3 text-sm text-neutral-600 leading-relaxed">
                            <input
                                type="checkbox"
                                className="mt-1 w-4 h-4 accent-teal-500 border-neutral-400"
                            />
                            <span>
                                I agree to Aps's{" "}
                                <Link
                                    href="/terms"
                                    className="text-teal-500 font-medium hover:underline"
                                >
                                    Terms & Conditions
                                </Link>{" "}
                                and acknowledge the{" "}
                                <Link
                                    href="/privacy"
                                    className="text-teal-500 font-medium hover:underline"
                                >
                                    Privacy Policy
                                </Link>
                            </span>
                        </label>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3.5 rounded-full font-semibold text-sm transition"
                        >
                            Create Account
                        </button>

                    </form>

                    {/* Social Logos */}
                    <div className="flex justify-center gap-3">

                        <button className="w-30 h-14 flex items-center justify-center rounded-full bg-black shadow-md hover:scale-105 transition">
                            <img
                                src="/icons/apple.svg"
                                alt="Apple"
                                className="w-5 h-5"
                            />
                        </button>

                        <button className="w-30 h-14 flex items-center justify-center rounded-full bg-[#f2f2f2] shadow-md hover:scale-105 transition">
                            <img
                                src="/icons/google.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />
                        </button>

                        <button className="w-30 h-14 flex items-center justify-center rounded-full bg-[#2F80ED] shadow-md hover:scale-105 transition">
                            <img
                                src="/icons/meta.svg"
                                alt="Meta"
                                className="w-6 h-6"
                            />
                        </button>

                    </div>

                </div>

            </div>
        </div>
    )
}