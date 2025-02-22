import { useDrawerStore } from "@shared/components/Drawer/stores/Drawer.store";
import { IDrawer } from "@shared/components/Drawer/interfaces/IDrawer";

export const useDrawer = () => {
  const drawers = useDrawerStore((state) => state.drawers);
  const setDrawers = useDrawerStore((state) => state.setDrawers);

  const open = (drawer: IDrawer) => {
    setDrawers([...drawers, drawer]);
  };

  const close = () => {
    setDrawers(drawers.slice(0, -1));
  };

  return { open, close };
};
