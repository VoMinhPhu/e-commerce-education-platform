import Cookies from "js-cookie";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

// Add product to cart
export const useAddProductToCart = () => {
  const queryClient = useQueryClient();
  return useMutation<
    { message: string },
    AxiosError<ErrorResponse>,
    PayloadAddCart
  >({
    mutationFn: async ({ id, count }: PayloadAddCart) => {
      const token = Cookies.get("token");
      const res = await api.post(
        "/api/products/cart",
        { id, count },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Add product !", {
        description: data.message,
      });
    },
    onError: (err) => {
      toast.error("Add product !", {
        description: err.response?.data.error,
      });
    },
  });
};

// Get product in cart
export const useGetCart = () => {
  return useQuery<GetCartResponse[] | []>({
    queryKey: ["cart"],
    queryFn: async () => {
      try {
        const token = Cookies.get("token");
        const res = await api.get<GetCartResponse[]>("/api/products/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res.data;
        return data || [];
      } catch (error) {
        console.error("Error fetching data cart:", error);
        return [];
      }
    },

    //10 minutes
    staleTime: 1000 * 60 * 10,
  });
};
