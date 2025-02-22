import Button, { IButtonProps } from "@shared/libs/fyr/components/ui/Button";
import { useEffect } from "react";
import { ITab } from "@shared/components/Tabs/interfaces/ITab";

interface Props {
  tabs: ITab[];
  setActiveTabId: (tabId: ITab['id']) => void;
  activeTab: ITab;
  enabledTabs: ITab['id'][];
}

export const TabSelector: React.FC<Props> = ({ setActiveTabId, tabs, activeTab, enabledTabs = [] }) => {
  const defaultProps: IButtonProps = {
    size: 'sm',
    color: 'zinc',
    rounded: 'rounded-full'
  };
  const activeProps: IButtonProps = {
    ...defaultProps,
    isActive: true,
    color: 'blue',
    colorIntensity: '500',
    variant: 'solid'
  };

  useEffect(() => {
    if (!activeTab && tabs.length) {
      setActiveTabId(tabs[0]?.id);
    }
  }, [tabs, activeTab]);

  return (
    <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide max-sm:rounded-lg">
      <div className="flex w-fit gap-x-3 gap-y-3 rounded-full border-2 border-zinc-500/20 p-1 max-sm:p-3 drop-shadow-xl dark:border-zinc-800">
        {tabs.map((item) => (
          <Button
            key={item.id}
            {...(activeTab?.id === item.id ? { ...activeProps } : { ...defaultProps })}
            onClick={
              item.isEnable || enabledTabs.includes(item.id)
                ? () => setActiveTabId(item.id)
                : undefined
            }
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
