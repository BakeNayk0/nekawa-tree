import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface LinkCardProps {
  imageUrl: string;
  buttonLabel: string;
}

export const LinkCard = ({ imageUrl, buttonLabel }: LinkCardProps) => {
  return (
    <Card className="relative bg-emerald-200 w-1/4 h-72">
      <CardContent className="flex justify-center items-center h-full">
        <Image alt="" src={imageUrl} width={120} height={120} />
      </CardContent>

      <Button
        className="text-xl absolute bottom-[-10] left-1/2 transform -translate-x-1/2 rounded-xl"
        size="lg"
      >
        {buttonLabel}
      </Button>
    </Card>
  );
};
