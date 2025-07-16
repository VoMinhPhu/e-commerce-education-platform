import Link from "next/link";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import NotFoundAnimation from "@/public/not-found.json";

const NotFound = () => {
  return (
    <div className="mt-16 py-15">
      <Lottie
        animationData={NotFoundAnimation}
        loop={true}
        size={100}
        className="w-full h-70"
      />
      <div className="flex items-center justify-center">
        <Link href={"/product"}>
          <Button size={"lg"} className="cursor-pointer">
            See another product
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
