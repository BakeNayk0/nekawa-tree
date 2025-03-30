import { AnimatedSection } from "@/components/animated-section";
import { LinkCard } from "@/components/link-card";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

const links = [
  {
    imageUrl: "/nekawa_hero.png",
    buttonLabel: "Webdesign",
  },
  {
    imageUrl: "/nekawa_hero.png",
    buttonLabel: "Nayko.dev",
  },
  {
    imageUrl: "/nekawa_hero.png",
    buttonLabel: "Shop",
  },
  {
    imageUrl: "/nekawa_hero.png",
    buttonLabel: "Aquarelle",
  },
];

export default function Home() {
  return (
    <div className={cn("flex flex-col gap-12 font-sans min-h-screen pt-28")}>
      <Navbar />
      <div className="flex flex-col gap-12 w-full">
        <AnimatedSection>
          <div className="flex items-center justify-center bg-blue-950 w-full h-96 rounded-3xl">
            <div className="z-10 items-center w-fit text-white text-[120px] mb-12">
              Nekawa Tree
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-8 max-w-sm max-h-[150px]">
              <p className="text-blue-900 text-4xl font-bold">
                Découvre notre univers
              </p>
              <p className="text-blue-900 font-normal text-sm font-mono leading-8">
                Un chat et une loutre un peu geek. Tous les deux passionnées par
                l&apos;univers celtique et Japonais. Il n&apos;en fallait pas
                plus pour partir à l&apos;aventure.
              </p>
              <Button size={"xl"}>Nous découvrir</Button>
            </div>
            {links.map(({ imageUrl, buttonLabel }, index) => (
              <LinkCard
                key={index}
                imageUrl={imageUrl}
                buttonLabel={buttonLabel}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection className="mt-12">
        <Carousel>
          <CarouselContent>
            {links.map(({ imageUrl, buttonLabel }, index) => (
              <CarouselItem key={index}>
                <div className="flex w-full bg-teal-200/20">
                  <Card className="relative bg-emerald-200 w-1/4 h-72">
                    <CardContent className="flex justify-center items-center h-full">
                      <Image alt="" src={imageUrl} width={120} height={120} />
                    </CardContent>
                  </Card>
                  <p>{buttonLabel}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </AnimatedSection>
    </div>
  );
}
