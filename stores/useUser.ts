import { create } from "zustand";

type UserState = TokenPayload & {
  setUserData: (data: TokenPayload) => void;
  resetUser: () => void;
};

const initialState: TokenPayload = {
  id: 0,
  username: "",
  name: "",
  phone: "",
  address: "",
  gender: "",
  dateOfBirth: "",
  admin: false,
};

export const useUser = create<UserState>((set) => ({
  ...initialState,
  setUserData: (data) => set({ ...data }),
  resetUser: () => {
    set(initialState);
  },
}));
