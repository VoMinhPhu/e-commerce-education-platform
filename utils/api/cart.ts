import Cookies from "js-cookie";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "@/stores/useAuth";
import { useUser } from "@/stores/useUser";

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
  const router = useRouter();

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
        return res.data || [];
      } catch (error: any) {
        if (error.response?.status === 401) {
          Cookies.remove("token");
          useAuth.getState().setIsLogin(false);
          useUser.getState().resetUser();
          router.replace("/login");
        }
        console.error("Error fetching data cart:", error);
        return [];
      }
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};
