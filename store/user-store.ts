import { User } from "better-auth";
import { create } from "zustand/react";
import { currentUser } from "../server/users";

type UserState = {
  user: User | null;
  getCurrentUser: () => Promise<void>;
};

export const userStore = create<UserState>((set, get) => ({
  user: null,
  getCurrentUser: async () => {
    try {
      const user: User | null = await currentUser();
      set({ user });
    } catch (e) {
      console.log(e);
    }
  },
}));
