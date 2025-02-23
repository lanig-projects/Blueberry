import { Outlet } from "react-router-dom";
import { DrawerContainer } from "@shared/components/Drawer/components/DrawerContainer";
import { ModalContainer } from "@shared/components/Modal/components/ModalContainer";
import { AlertContainer } from "@shared/components/Alert/components/AlertContainer";
import { LoaderContainer } from "@shared/components/Loader/components/LoaderContainer";

export const CoreLayout = () => {
  return (
    <div>
      <div>
        <Outlet/>
      </div>

      <DrawerContainer/>
      <ModalContainer/>
      <AlertContainer/>
      <LoaderContainer/>
    </div>
  );
};
