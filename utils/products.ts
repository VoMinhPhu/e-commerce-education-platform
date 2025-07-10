import { api } from "@/lib/axios";
import { Product } from "@/types/products";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = () => {
  return useQuery<Product[] | []>({
    queryKey: ["products", "product"],
    queryFn: async () => {
      try {
        const res = await api.get<Product[]>("/api/products");
        const data = res.data;
        return data || [];
      } catch (error) {
        console.error("Error fetching products:", error);
        return [];
      }
    },

    //3 minutes
    staleTime: 1000 * 60 * 3,
  });
};

export const useGetTopSearch = () => {
  return useQuery<Product[] | []>({
    queryKey: ["topsearch"],
    queryFn: async () => {
      try {
        const res = await api.get<Product[]>("/api/topsearch");
        const data = res.data;
        return data || [];
      } catch (error) {
        console.error("Error fetching top search:", error);
        return [];
      }
    },

    //3 minutes
    staleTime: 1000 * 60 * 3,
  });
};
