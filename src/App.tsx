import { SharedContext } from "@shared/context/SharedContext";
import { CoreLayout } from "@core/layouts/Core.layout";
import { Colors } from "@core/constants/Colors";

export const App = () => {
  return (
    <SharedContext
      baseLayout={CoreLayout}
      configRoutes={ConfigRoutes}
      colorPrimary={Colors.primary}
    />
  );
};
