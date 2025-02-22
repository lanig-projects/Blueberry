import React from "react";

export interface IDrawer {
  title: string;
  content?: string | React.ReactNode;
  hideCloseButton?: boolean;
}
