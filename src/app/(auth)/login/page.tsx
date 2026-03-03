"use client"

import { ThemeToggle } from "@/components/theme-toggle";
import { useAuthStore } from "@/store/use-auth-store";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter()
    const { login } = useAuthStore()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        login()
        router.push("/dashboard")
    }
    
    return (
        <main className="min-h-screen flex items-center justify-center relative">

            <h1 className="text-red-500 text-4xl absolute top-20">
                Tailwind Test
            </h1>

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
                        className="border p-2 rounded-md bg-transparent"
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        className="border p-2 rounded-md bg-transparent"
                    />
                    <button
                        type="submit"
                        className="bg-black text-white dark:bg-white dark:text-black py-2 rounded-md"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </main>
    )
}