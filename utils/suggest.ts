import { api } from "@/lib/axios";
import { Product } from "@/types/products";
import { useQuery } from "@tanstack/react-query";

export const useGetSuggest = () => {
  return useQuery<Product[] | []>({
    queryKey: ["suggest"],
    queryFn: async () => {
      try {
        const res = await api.get<Product[]>("/api/suggest");
        const data = res.data;
        return data || [];
      } catch (error) {
        console.error("Error fetching suggest:", error);
        return [];
      }
    },

    //3 minutes
    staleTime: 1000 * 60 * 3,
  });
};
