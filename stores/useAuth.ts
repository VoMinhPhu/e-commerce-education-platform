import { create } from "zustand";

type AuthState = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

export const useAuth = create<AuthState>((set) => ({
  isLogin: false,
  setIsLogin: (value) => set({ isLogin: value }),
}));
