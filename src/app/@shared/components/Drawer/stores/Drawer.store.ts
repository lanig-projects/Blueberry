import { create } from 'zustand';
import { IDrawer } from "@shared/components/Drawer/interfaces/IDrawer";

interface DrawerStore {
  drawers: IDrawer[],
  setDrawers: (drawers: IDrawer[]) => void;
}

export const useDrawerStore = create<DrawerStore>((set) => ({
  drawers: [],
  setDrawers: (drawers) => set({ drawers })
}));
