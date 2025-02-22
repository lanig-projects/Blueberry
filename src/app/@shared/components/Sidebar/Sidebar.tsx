import { ConfigProvider, MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useEffect, useMemo, useState } from "react";
import { ISidebarItem } from "@shared/components/Sidebar/interfaces/ISidebarItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useSidebarStore } from "@shared/components/Sidebar/stores/Sidebar.store";
import { useDeviceScreen } from "@shared/hooks/useDeviceScreen";
import { SidebarToggleButton } from "@shared/components/Sidebar/components/SidebarToggleButton";
import { ComponentToken } from "antd/es/menu/style";
import { usePermissionsStore } from "@shared/stores/Permissions.store";

export type MenuItem = Required<MenuProps>['items'][number];

export interface ISidebarProps {
  items: ISidebarItem[];
  logo?: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  config?: ComponentToken;
  className?: string;
  style?: React.CSSProperties;
  disableCollapse?: boolean;
}

export const Sidebar = ({ items, logo, header, footer, config, className, style, disableCollapse }: ISidebarProps) => {
  const permissions = usePermissionsStore((state) => state.permissions);
  const collapsed = useSidebarStore((state) => state.collapsed);
  const setCollapsed = useSidebarStore((state) => state.setCollapsed);
  const { width } = useDeviceScreen();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const transformItems = (items: ISidebarItem[]): MenuItem[] => {
    return items
      .filter(({ permissions: itemPermissions }) =>
        !itemPermissions || itemPermissions.length === 0 ||
        itemPermissions.some((perm) => permissions.includes(perm))
      )
      .map((item) => {
        if (item.children) {
          const filteredChildren = transformItems(item.children);

          if (filteredChildren.length === 0) {
            return null;
          }

          return {
            key: item.path,
            label: item.label,
            icon: item.icon,
            children: filteredChildren
          };
        }

        return {
          key: item.path,
          label: item.label,
          icon: item.icon
        };
      })
      .filter(Boolean) as MenuItem[];
  };

  const menuItems = useMemo<MenuItem[]>(() => transformItems(items), [items, permissions]);

  useEffect(() => {
    const paths = pathname.split('/').filter(Boolean);
    const openKeys = paths.map((_, index) =>
      `/${paths.slice(0, index + 1).join('/')}`
    );
    setOpenKeys(openKeys);
  }, [pathname]);

  useEffect(() => {
    setCollapsed(width < 768);
  }, [width]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: config
        }
      }}
    >
      <div
        className={`z-[101] transition-transform max-md:fixed top-0 left-0 flex flex-col justify-between relative h-screen  overflow-y-auto bg-white dark:bg-[#141414] ${collapsed ? 'max-md:-translate-x-full' : 'w-[256px]'} ${className}`}
        style={style}
      >
        <div>
          <div className={`p-5 flex items-center ${collapsed ? 'justify-center' : 'justify-between'}`}>
            <div className={`${collapsed ? 'hidden' : ''}`}>{logo}</div>

            {!disableCollapse && (
              <div>
                <SidebarToggleButton/>
              </div>
            )}
          </div>

          <div className={`${collapsed ? 'hidden' : ''}`}>
            {header}
          </div>

          <Menu
            style={{ border: 'none' }}
            selectedKeys={[`${pathname}${search}`]}
            triggerSubMenuAction={'click'}
            openKeys={openKeys}
            onOpenChange={(keys) => setOpenKeys(keys)}
            onClick={({ key }) => {
              if (width < 768) {
                setCollapsed(true);
              }

              navigate(key);
            }}
            items={menuItems}
            inlineCollapsed={(width > 768 && !disableCollapse) ? collapsed : false}
            mode={'inline'}
          />
        </div>

        <div className={'p-4 w-full'}>
          {footer}
        </div>
      </div>

      <div
        className={`md:hidden w-screen h-screen bg-black fixed top-0 left-0 z-[100] ${!collapsed ? 'opacity-50' : 'hidden'}`}
        onClick={() => setCollapsed(true)}
      ></div>
    </ConfigProvider>
  );
};
