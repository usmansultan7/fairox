
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                    <Link href="/" className="inline-block">
                        <span className="text-3xl font-bold tracking-tight text-primary">FAIROX</span>
                    </Link>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-heading">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Or <Link href="/#contact" className="font-medium text-primary hover:text-primary/80">request access</Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="space-y-4 rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full rounded-lg border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full rounded-lg border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-primary hover:text-primary/80">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <Button className="w-full flex justify-center py-3">
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
