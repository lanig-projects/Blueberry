import { SharedContext } from "@shared/context/Shared.context";
import { CoreLayout } from "@core/layouts/Core.layout";
import { Colors } from "@core/constants/Colors";
import { ConfigRoutes } from "@core/constants/ConfigRoutes";

export const App = () => {
  return (
    <SharedContext
      baseLayout={CoreLayout}
      configRoutes={ConfigRoutes}
      colorPrimary={Colors.primary}
    />
  );
};
