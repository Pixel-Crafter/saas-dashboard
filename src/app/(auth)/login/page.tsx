import { ThemeToggle } from "@/components/theme-toggle";

export default function LoginPage() {
    return (
        <main className="min-h-screen flex items-center justify-center relative">
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>

            <div className="w-[350px] p-6 border rounded-xl shadow-sm bg-white dark:bg-neutral-900">
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