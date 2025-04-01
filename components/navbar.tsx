"use client";

import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "./instagram-icon";
import { TwitchIcon } from "./twitch-icon";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { MenuIcon } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 font-mono">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            alt="Nekawa Logo"
            src="/nekawa_hero.png"
            width={48}
            height={48}
            className="rounded-full"
          />
          <h1 className="text-md sm:text-2xl font-bold text-gray-900">
            Nekawa Tree
          </h1>
        </div>
        <nav className="hidden sm:flex items-center gap-4">
          <Link href="https://instagram.com/nekawashop" target="_blank">
            <InstagramIcon fill="#FF0069" width={32} height={32} />
          </Link>
          <Link href="https://twitch.tv/nayk0_x" target="_blank">
            <TwitchIcon fill="#9146FF" width={32} height={32} />
          </Link>
          <Link href="mailto:nekawa.info@gmail.com">
            <Button
              className="bg-gradient-to-r from-[#f64f59] via-[#c471ed] to-[#12c2e9]"
              size="lg"
            >
              Contactez-nous
            </Button>
          </Link>
        </nav>
        <div className="sm:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6 mr-4" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-lg font-bold">
                  Drop a follow
                </DrawerTitle>
                <DrawerDescription>
                  We also offer different digital services. Feel free to reach
                  out!
                </DrawerDescription>
              </DrawerHeader>
              <div className="flex justify-center gap-4 px-4 py-2">
                <Link href="https://instagram.com/nekawashop" target="_blank">
                  <InstagramIcon fill="#FF0069" width={32} height={32} />
                </Link>
                <Link href="https://twitch.tv/nayk0_x" target="_blank">
                  <TwitchIcon fill="#9146FF" width={32} height={32} />
                </Link>
              </div>
              <DrawerFooter className="mb-4">
                <Link href="mailto:nekawa.info@gmail.com">
                  <Button
                    className="w-full bg-gradient-to-r from-[#f64f59] via-[#c471ed] to-[#12c2e9]"
                    size="lg"
                  >
                    Contactez-nous
                  </Button>
                </Link>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};
