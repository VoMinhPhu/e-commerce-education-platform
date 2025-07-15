import { create } from "zustand";

type UserState = TokenPayload & {
  setUserData: (data: TokenPayload) => void;
};

export const useUser = create<UserState>((set) => ({
  id: 0,
  username: "",
  name: "",
  phone: "",
  address: "",
  gender: "",
  dateOfBirth: "",
  admin: false,
  setUserData: (data) => set({ ...data }),
}));
