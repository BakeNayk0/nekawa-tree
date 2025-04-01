import { AnimatedSection } from "@/components/animated-section";
import { DonateButtons } from "@/components/donation-buttons";
import { LinkCard } from "@/components/link-card";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    imageUrl: "/nekawa_brand.png",
    buttonLabel: "Webdesign",
    href: "https://nekawa.fr",
    title: "nekawa.fr",
    description:
      "nekawa.fr is a creative duo combining a freelance fullstack developer and a WordPress designer. They design elegant, functional websites and visual identities for small businesses, artists, and entrepreneurs seeking a unique digital presence.",
  },
  {
    imageUrl: "/nayko_dev_brand.png",
    buttonLabel: "Nayko.dev",
    href: "https://nayko.dev",
    title: "nayko.dev",
    description:
      "nayko.dev is the digital playground of Alexis (Nayko), a fullstack developer. It blends projects, experiments, and personal creations — all crafted with Next.js and Supabase in a sleek custom interface.",
  },
  {
    imageUrl: "/nekawa_shop_brand.png",
    buttonLabel: "Shop",
    href: "https://nekawashop.fr",
    title: "nekawashop.fr",
    description:
      "nekawashop is our cozy brand space — a mix of esoteric designs, japanese and nordic vibes. Powered by Shopify, it’s where we share our world through art, fashion, and stories.",
  },
  {
    imageUrl: "/awaken_otter_brand.png",
    buttonLabel: "Aquarelle",
    href: "https://la-loutre-eveillee.fr/",
    title: "la-loutre-eveillee.fr",
    description:
      "La Loutre Éveillée is a gentle invitation to slow living — offering illustrations, watercolors, and mindful creations rooted in nature, emotions, and spirituality. A peaceful artistic space by Lucile C.",
  },
];

export default function Home() {
  return (
    <div
      className={cn("flex flex-col gap-16 font-sans min-h-screen pt-28 pb-32")}
    >
      <AnimatedSection>
        <div className="flex items-center justify-center bg-gradient-to-br from-blue-950 to-blue-900 w-full h-72 sm:h-96 rounded-3xl shadow-lg">
          <div className="z-10 text-white text-4xl sm:text-6xl md:text-[120px] font-extrabold drop-shadow-lg">
            Nekawa Tree
          </div>
          <Image
            fill
            src="/nekawa_sword.png"
            alt=""
            className="object-cover md:mt-32 mt-14"
          />
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex lg:flex-row flex-col items-start gap-4">
          <div className="flex flex-col gap-8 lg:max-w-sm lg:max-h-[150px] w-full">
            <p className="text-blue-900 text-4xl font-bold">
              Découvre notre univers
            </p>
            <p className="text-blue-900 font-normal text-sm font-mono leading-8">
              Un chat et une loutre un peu geek. Tous les deux passionnées par
              l&apos;univers celtique et Japonais. Il n&apos;en fallait pas plus
              pour partir à l&apos;aventure.
            </p>
            <Button
              className="bg-gradient-to-r from-[#f64f59] via-[#c471ed] to-[#12c2e9]"
              size={"xl"}
            >
              Nous découvrir
            </Button>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 w-full visible lg:visible gap-3">
            {links.map(({ imageUrl, buttonLabel, href }, index) => (
              <div key={index}>
                <LinkCard
                  href={href}
                  imageUrl={imageUrl}
                  buttonLabel={buttonLabel}
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="mt-12">
        <Carousel>
          <CarouselContent>
            {links.map(({ imageUrl, title, description, href }, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col sm:flex-row w-full rounded-lg h-full overflow-hidden shadow-md bg-white/5 backdrop-blur-md border border-white/10">
                  <div className="relative w-full sm:w-1/2 h-56 sm:h-auto">
                    <Image
                      alt={title}
                      src={imageUrl}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-4 w-full sm:w-1/2">
                    <div>
                      <CardHeader className="p-0">
                        <CardTitle className="text-lg">{title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 pt-2 font-mono">
                        <CardDescription className="text-sm text-muted-foreground">
                          {description}
                        </CardDescription>
                      </CardContent>
                    </div>
                    <CardFooter className="p-0 pt-4">
                      <Link href={href} prefetch={false} target="_blank">
                        <Button size="sm">Take a look</Button>
                      </Link>
                    </CardFooter>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </AnimatedSection>
      <AnimatedSection>
        <DonateButtons />
      </AnimatedSection>
    </div>
  );
}
