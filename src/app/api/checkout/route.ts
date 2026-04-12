import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';


export async function POST(req: NextRequest) {
    try {
        // Initialize Stripe with secret key
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

        const { items } = await req.json();

        // Validate cart items
        if (!items || !Array.isArray(items) || items.length === 0) {
            return NextResponse.json(
                { error: 'Cart is empty or invalid' },
                { status: 400 }
            );
        }

        // Transform cart items to Stripe line items
        const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map((item: { name: string; imageUrl?: string; price: number; quantity: number }) => ({
            price_data: {
                currency: 'pkr', // Pakistani Rupee
                product_data: {
                    name: item.name,
                    images: item.imageUrl ? [item.imageUrl] : [],
                },
                unit_amount: Math.round(item.price * 100), // Convert to cents/paisa
            },
            quantity: item.quantity,
        }));

        // Get the application URL from environment or use default
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${appUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${appUrl}/checkout/cancel`,
            metadata: {
                orderItems: JSON.stringify(items.map((item: { id: string; name: string; quantity: number; price: number }) => ({
                    id: item.id,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price,
                }))),
            },
        });

        // Return the checkout URL for redirect
        return NextResponse.json({
            url: session.url,
            sessionId: session.id
        });
    } catch (error: unknown) {
        console.error('Error creating checkout session:', error);
        const errorMessage = error instanceof Error ? error.message : 'Failed to create checkout session';
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
