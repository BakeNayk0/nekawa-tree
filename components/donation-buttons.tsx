"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const prices = [
  {
    title: "Buy us a coffee",
    description: "This donation is simply to show your support for us",
    amount: "2.50€",
    priceId: "price_1R8oRwB0h06uXVwPrRJ9355p",
    subscription: false,
  },
  {
    title: "Buy us a ramen",
    description: "Show your support with ramen, because ramen is love",
    amount: "10€",
    priceId: "price_1R8oSDB0h06uXVwPXrY9WK51",
    subscription: false,
  },
  {
    title: "God tier",
    description:
      "Your love will be remembered, stay tuned, watch your emails ;)",
    amount: "50€",
    priceId: "price_1R8oSPB0h06uXVwPlHlMqX7T",
    subscription: false,
  },
  {
    title: "Nekawa Club",
    amount: "5€",
    description:
      "Be part of the adventure and receive montly promo coupon aswell as exclusive content from our shop",
    priceId: "price_1R8oRPB0h06uXVwPqJDpyWOz",
    subscription: true,
  },
];

export const DonateButtons = () => {
  const [loading, setLoading] = useState<string | null>(null);

  const handleDonate = async (priceId: string, isSubscription: boolean) => {
    setLoading(priceId);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, isSubscription }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No redirect URL");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full font-sans">
      {prices.map(({ title, description, amount, priceId, subscription }) =>
        subscription ? (
          <Card
            key={priceId}
            className="rounded-2xl shadow-md bg-gradient-to-br from-emerald-100 via-white to-blue-100 border border-white/30 hover:scale-[1.01] hover:shadow-lg"
          >
            <CardHeader>
              <CardTitle className="text-zinc-800 text-lg font-semibold">
                Nekawa Club
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-zinc-600 text-sm">
                Be part of the adventure and receive monthly promo coupons and
                exclusive content
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleDonate(priceId, subscription)}
                className="bg-gradient-to-r from-emerald-400 to-blue-400 text-white font-bold shadow-md hover:opacity-90"
              >
                {loading && <Loader2 className="animate-spin" />}
                5€ / month
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card
            key={priceId}
            className="rounded-2xl shadow-md bg-gradient-to-br from-pink-100 via-white to-cyan-100 border border-white/30 transition-all duration-200 hover:scale-[1.01] hover:shadow-lg"
          >
            <CardHeader>
              <CardTitle className="text-zinc-800 text-lg font-semibold">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-zinc-600 text-sm">
                {description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleDonate(priceId, subscription)}
                className="bg-gradient-to-r from-pink-400 to-cyan-400 text-white font-bold shadow-md hover:opacity-90"
              >
                {loading && <Loader2 className="animate-spin" />}
                {amount}
              </Button>
            </CardFooter>
          </Card>
        )
      )}
    </div>
  );
};
