"use client"

import { ThemeToggle } from "@/components/theme-toggle";
import { useAuthStore } from "@/store/use-auth-store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const router = useRouter()
    const { login } = useAuthStore()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const validate = () => {
        if (!email) return "Email is required"
        if (!/\S+@\S+\.\S+/.test(email)) return "Invalid email format"
        if (!password) return "Password is required"
        if (password.length < 6) return "Password must be at least 6 characters"
        return ""
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const validationError = validate()
        if (validationError) {
            setError(validationError)
            return
        }

        setError("")
        setLoading(true)

        setTimeout(() => {
            login()
            router.replace("/dashboard")
        }, 1000)
    }
    
    return (
        <main className="min-h-screen flex items-center justify-center relative">
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>

            <div className="w-[350px] p-6 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-sm bg-white dark:bg-neutral-900">
                <h1 className="text-xl font-semibold mb-4">
                    Login
                </h1>

                <form className="flex flex-col gap-3">
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 rounded-md bg-transparent"
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 rounded-md bg-transparent"
                    />

                    {error && (
                        <p className="text-sm text-red-600">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-black text-white dark:bg-white dark:text-black py-2 rounded-md disabled:opacity-60 disabled:cursor-not-allowed transition"
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>
                </form>
            </div>
        </main>
    )
}