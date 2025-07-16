import { ShoppingCartIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAddProductToCart } from "@/utils/api/cart";

type Props = {
  productId: string;
  count?: number;
};

const AddToCartBtn = ({ count, productId }: Props) => {
  const { mutate } = useAddProductToCart();

  const handleAddProductToCart = (id: string) => {
    const countPayload = count ? count : 1;
    mutate({ id, count: countPayload });
  };

  return (
    <Button
      onClick={() => handleAddProductToCart(productId)}
      className="w-full cursor-pointer rounded-sm text-primary hover:text-primary"
      size={"lg"}
      variant={"outline"}
    >
      Add to Cart <ShoppingCartIcon />
    </Button>
  );
};

export default AddToCartBtn;
