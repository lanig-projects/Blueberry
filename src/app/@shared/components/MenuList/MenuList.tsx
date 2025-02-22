import React, { useMemo } from "react";
import { Button, Dropdown, Menu } from "antd";
import { MoreOutlined } from "@ant-design/icons";

interface Props {
  elements: React.ReactNode[];
}

export const MenuList = ({ elements }: Props) => {
  const items = useMemo(() => elements.map((element, index) => ({
    key: index,
    label: element
  })), [elements]);

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Button icon={<MoreOutlined/>}/>
    </Dropdown>
  );
};
