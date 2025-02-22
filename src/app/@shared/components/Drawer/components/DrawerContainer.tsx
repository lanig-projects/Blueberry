import { useDrawerStore } from "@shared/components/Drawer/stores/Drawer.store";
import { Drawer } from "antd";

export const DrawerContainer = () => {
  const drawers = useDrawerStore((state) => state.drawers);
  const setDrawers = useDrawerStore((state) => state.setDrawers);

  return (
    <>
      {drawers.map((drawer, i) => (
        <Drawer
          key={i}
          open
          title={drawer.title}
          onClose={() => {
            setDrawers(drawers.slice(0, -1));
          }}
          styles={{
            mask: {
              backdropFilter: 'blur(2px)'
            }
          }}
          closeIcon={drawer.hideCloseButton ? null : undefined}
        >
          <div className={'mt-6'}>
            {drawer.content}
          </div>
        </Drawer>
      ))}
    </>
  );
};
