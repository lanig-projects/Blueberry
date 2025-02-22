import { ConfigProvider, theme } from "antd";
import esES from "antd/locale/es_ES";
import { Router } from "@shared/components/Router";
import { useDarkMode } from "@shared/hooks/useDarkMode";
import { IRouterProps } from "@shared/components/Router/Router";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { Outlet } from "react-router-dom";

interface Props extends IRouterProps {
  colorPrimary?: string;
}

export const SharedContext = ({ configRoutes = [], baseLayout = Outlet, colorPrimary, notFoundElement }: Props) => {
  const { isDarkMode } = useDarkMode();

  dayjs.extend(localizedFormat);

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: colorPrimary || theme.defaultConfig.token.colorPrimary
          },
          algorithm: !isDarkMode ? theme.defaultAlgorithm : theme.darkAlgorithm
        }}
        locale={esES}
      >
        <Router
          baseLayout={baseLayout}
          configRoutes={configRoutes}
          notFoundElement={notFoundElement}
        />
      </ConfigProvider>
    </div>
  );
};
