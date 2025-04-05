import Link from "next/link";
import { InstagramIcon } from "./instagram-icon";
import { TwitchIcon } from "./twitch-icon";
import { Button } from "./ui/button";

export const MobileNavSocials = () => {
  return (
    <div className="flex items-center gap-2">
      <Link href="https://instagram.com/nekawashop" target="_blank">
        <Button size={"icon"} variant="link">
          <InstagramIcon fill="#FF0069" width={32} height={32} />
        </Button>
      </Link>
      <Link href="https://twitch.tv/nayk0_x" target="_blank">
        <Button size={"icon"} variant="link">
          <TwitchIcon fill="#9146FF" width={32} height={32} />
        </Button>
      </Link>
    </div>
  );
};
