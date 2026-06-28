import { create } from "zustand";

type MenuStore = {
  menuItem: string;
  setMenuItem: (item: string) => void;
};

export const useMenuStore = create<MenuStore>((set) => ({
  menuItem: "",
  setMenuItem: (item: string) => set({ menuItem: item }),
}));
