import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface LinkCardProps {
  imageUrl: string;
  buttonLabel: string;
  href: string;
}

export const LinkCard = ({ imageUrl, buttonLabel, href }: LinkCardProps) => {
  return (
    <Link href={href} prefetch={false} target="_blank">
      <Card className="relative bg-emerald-200 h-72">
        <Image fill className="object-cover rounded-lg" alt="" src={imageUrl} />

        <Button
          className="text-xl absolute bottom-[-10] left-1/2 transform -translate-x-1/2 rounded-xl"
          size="lg"
        >
          {buttonLabel}
        </Button>
      </Card>
    </Link>
  );
};
