import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

//Get all products
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

// Get detail product
export const useGetDetailProduct = (id: string) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: async ({ queryKey }) => {
      const [_key, productId] = queryKey;
      const res = await api.get<Product>(`/api/products/${productId}`);
      return res.data;
    },

    //15 minutes
    staleTime: 1000 * 60 * 15,
  });
};

// Get data top search
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
