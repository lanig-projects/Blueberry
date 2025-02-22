import { SharedContext } from "@shared/context/SharedContext";
import { BaseLayout } from "@core/layouts/Base.layout";
import { ConfigRoutes } from "@core/constants/ConfigRoutes";
import { Colors } from "@core/constants/Colors";

export const App = () => {
  return (
    <SharedContext
      baseLayout={BaseLayout}
      configRoutes={ConfigRoutes}
      colorPrimary={Colors.primary}
    />
  );
};
