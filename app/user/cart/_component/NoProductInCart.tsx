import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";

const NoProductInCart = () => {
  return (
    <div className="w-full py-5 h-100 grid justify-center">
      <div className="mb-2">
        <Image
          src={"/empty-cart.jpg"}
          alt="empty cart"
          width={200}
          height={150}
          className="w-auto h-70"
          priority
        />
        <CardDescription className="text-center">
          Your cart is empty
        </CardDescription>
      </div>
      <Link href={"/product"} className="w-full">
        <Button className="w-full cursor-pointer" size={"lg"}>
          Add some product
        </Button>
      </Link>
    </div>
  );
};

export default NoProductInCart;
