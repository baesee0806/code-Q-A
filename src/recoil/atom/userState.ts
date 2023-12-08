import { Session } from "@supabase/supabase-js";
import { atom, selector } from "recoil";

export const userState = atom<Session | null>({
  key: "userState",
  default: null,
});

export const userEmail = selector({
  key: "userData",
  get: ({ get }) => {
    const user = get(userState);
    return user?.user.email;
  },
});
