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
import { Instagram, Twitch } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className={cn("flex flex-col gap-12 font-sans")}>
      <div className="flex items-center">
        <div className="rounded-full p-2 w-fit">
          <Image alt="" src="/nekawa_hero.png" width={60} height={60} />
        </div>
        <h1 className="text-4xl">Nekawa</h1>
        <div className="flex items-center justify-between gap-8 ml-auto">
          <Instagram size={60} />
          <Twitch size={60} />
          <Button size={"xl"}>Contact us</Button>
        </div>
      </div>
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-center justify-center bg-blue-950 w-full h-96 rounded-3xl">
          <div className="z-10 items-center w-fit text-white text-[120px] mb-12">
            Nekawa Tree
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex flex-col gap-8 max-w-sm max-h-[150px]">
            <p className="text-blue-900 text-4xl font-bold">
              Découvre notre univers
            </p>
            <p className="text-blue-900 font-normal text-sm font-mono leading-8">
              Un chat et une loutre un peu geek. Tous les deux passionnées par
              l&apos;univers celtique et Japonais. Il n&apos;en fallait pas plus
              pour partir à l&apos;aventure.
            </p>
            <Button size={"xl"}>Nous découvrir</Button>
          </div>
          <Card className="relative bg-emerald-200 w-1/4 h-72">
            <CardContent className="my-auto mx-auto">
              <Image alt="" src="/nekawa_hero.png" width={120} height={120} />
            </CardContent>
            <Button
              className="text-xl absolute top-64 left-[15%] rounded-xl"
              size={"lg"}
            >
              Webdesign
            </Button>
          </Card>
          <Card className="relative bg-emerald-200 w-1/4 h-72">
            <CardContent className="my-auto mx-auto">
              <Image alt="" src="/nekawa_hero.png" width={120} height={120} />
            </CardContent>
            <Button
              className="text-xl absolute top-64 left-[15%] rounded-xl"
              size={"lg"}
            >
              Nayko.dev
            </Button>
          </Card>
          <Card className="relative bg-emerald-200 w-1/4 h-72">
            <CardContent className="my-auto mx-auto">
              <Image alt="" src="/nekawa_hero.png" width={120} height={120} />
            </CardContent>
            <Button
              className="text-xl absolute top-64 left-[15%] rounded-xl"
              size={"lg"}
            >
              Shop
            </Button>
          </Card>
          <Card className="relative bg-emerald-200 w-1/4 h-72">
            <CardContent className="my-auto mx-auto">
              <Image alt="" src="/nekawa_hero.png" width={120} height={120} />
            </CardContent>
            <Button
              className="text-xl absolute top-64 left-[15%] rounded-xl"
              size={"lg"}
            >
              Aquarelle
            </Button>
          </Card>
        </div>
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="flex w-full bg-teal-200/20">
            <Card className="bg-emerald-200 w-1/4 h-72">
              <CardContent className="my-auto mx-auto">
                <Image alt="" src="/nekawa_hero.png" width={120} height={120} />
              </CardContent>
            </Card>
            <p>Une description</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex w-full bg-teal-200/20">
            <Card className="bg-emerald-200 w-1/4 h-72">
              <CardContent className="my-auto mx-auto">
                <Image alt="" src="/nekawa_hero.png" width={120} height={120} />
              </CardContent>
            </Card>
            <p>Une description</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex w-full bg-teal-200/20">
            <Card className="bg-emerald-200 w-1/4 h-72">
              <CardContent className="my-auto mx-auto">
                <Image alt="" src="/nekawa_hero.png" width={120} height={120} />
              </CardContent>
            </Card>
            <p>Une description</p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
