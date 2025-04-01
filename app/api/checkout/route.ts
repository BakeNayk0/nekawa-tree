import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia"
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { priceId, isSubscription } = body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: isSubscription ? "subscription" : "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        }
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}?status=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}?status=cancel`
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Stripe checkout failed"}, { status: 500 });
  }
}