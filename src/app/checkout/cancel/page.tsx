"use client";

import { useRouter } from "next/navigation";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CheckoutCancel() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
            <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center border border-gray-700">
                <div className="flex justify-center mb-6">
                    <XCircle className="w-20 h-20 text-yellow-500" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Payment Cancelled
                </h1>

                <p className="text-gray-300 mb-6">
                    Your payment was cancelled. No charges were made to your account.
                </p>

                <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 mb-6">
                    <p className="text-sm text-yellow-200">
                        Your cart items have been preserved. You can continue shopping or try checking out again.
                    </p>
                </div>

                <div className="space-y-3">
                    <Button
                        onClick={() => router.push("/")}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 rounded-lg transition-all shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                    >
                        Return to Cart
                    </Button>

                    <Button
                        onClick={() => router.push("/Menu")}
                        variant="outline"
                        className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white py-3 rounded-lg transition-all"
                    >
                        Continue Shopping
                    </Button>

                    <Button
                        onClick={() => router.push("/")}
                        variant="ghost"
                        className="w-full text-gray-400 hover:text-white py-3 rounded-lg transition-all"
                    >
                        Go to Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
