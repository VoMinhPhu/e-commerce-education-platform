import { Button } from "@/components/ui/button";
import { useAddProductToCart } from "@/utils/products";
import { ShoppingCartIcon } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

type Props = {
  productId: string;
  count?: string;
};

const AddToCartBtn = ({ count, productId }: Props) => {
  const { mutate, isSuccess, isError } = useAddProductToCart();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Add product !", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
      });
    }
    if (isError) {
      console.log(isError);
    }
  }, [isSuccess, isError]);

  const handleAddProductToCart = (id: string) => {
    mutate(id);
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
