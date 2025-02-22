interface RenderProps {
  setActiveTabId: (id: ITab['id']) => void;
  nextTab: () => void;
  previousTab: () => void;
}

export interface ITab {
  id: string;
  label: string;
  render: (props: RenderProps) => JSX.Element;
  isEnable?: boolean;
}
