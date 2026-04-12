"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function CheckoutSuccessContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { clearCart } = useCart();
    const sessionId = searchParams.get("session_id");

    useEffect(() => {
        // Clear the cart after successful payment
        clearCart();
    }, [clearCart]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
            <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center border border-gray-700">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="w-20 h-20 text-green-500 animate-pulse" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Payment Successful! 🎉
                </h1>

                <p className="text-gray-300 mb-6">
                    Thank you for your order! Your payment has been processed successfully.
                </p>

                {sessionId && (
                    <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
                        <p className="text-sm text-gray-400 mb-1">Order Reference</p>
                        <p className="text-xs text-gray-300 font-mono break-all">
                            {sessionId}
                        </p>
                    </div>
                )}

                <div className="space-y-3">
                    <Button
                        onClick={() => router.push("/")}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 rounded-lg transition-all shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                    >
                        Return to Home
                    </Button>

                    <Button
                        onClick={() => router.push("/Menu")}
                        variant="outline"
                        className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white py-3 rounded-lg transition-all"
                    >
                        Continue Shopping
                    </Button>
                </div>

                <p className="text-sm text-gray-500 mt-6">
                    A confirmation email will be sent to you shortly.
                </p>
            </div>
        </div>
    );
}

export default function CheckoutSuccess() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-black text-white">Loading...</div>}>
            <CheckoutSuccessContent />
        </Suspense>
    );
}
