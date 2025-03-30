import Image from "next/image";
import { InstagramIcon } from "./instagram-icon";
import { TwitchIcon } from "./twitch-icon";
import { Button } from "./ui/button";

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
          <h1 className="text-2xl font-bold text-gray-900">Nekawa</h1>
        </div>

        <nav className="flex items-center gap-4">
          <InstagramIcon fill="#FF0069" width={32} height={32} />
          <TwitchIcon fill="#9146FF" width={32} height={32} />
          <Button className="bg-gradient-to-r from-[#f64f59] via-[#c471ed] to-[#12c2e9]" size="lg">Contactez-nous</Button>
        </nav>
      </div>
    </header>
  );
};
