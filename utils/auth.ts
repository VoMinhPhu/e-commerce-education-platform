import { api } from "@/lib/axios";
import { AxiosError } from "axios";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

//Login
export const useLogin = () => {
  const router = useRouter();
  return useMutation<
    LoginResponse,
    AxiosError<ErrorResponse>,
    { username: string; password: string }
  >({
    mutationFn: async (payload: { username: string; password: string }) => {
      const res = await api.post("/api/auth/login", payload);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Login", {
        description: data.message,
      });
      localStorage.setItem("token", data.token);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
    onError: (err) => {
      toast.error("Login", {
        description: err.response?.data.error || "You can not login now!",
      });
    },
  });
};

//Register
export const useRegister = () => {
  const router = useRouter();

  return useMutation<
    { message: string },
    AxiosError<ErrorResponse>,
    { username: string; password: string }
  >({
    mutationFn: async (payload: { username: string; password: string }) => {
      const res = await api.post("/api/auth/register", payload);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Register", {
        description: data.message,
      });
      router.push("/login");
    },
    onError: (err) => {
      toast.error("Register", {
        description: err.response?.data.error || "You can not register now!",
        duration: 5000,
      });
    },
  });
};
