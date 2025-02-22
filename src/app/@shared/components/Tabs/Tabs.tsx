import { ITab } from "@shared/components/Tabs/interfaces/ITab";
import { useTabs } from "@shared/components/Tabs/hooks/useTabs";
import { TabSelector } from "@shared/components/Tabs/components/TabSelector";

interface Props {
  id?: string;
  tabs: ITab[];
  saveToUrl?: boolean;
}

export const Tabs = ({ id = 'default', tabs, saveToUrl = false }: Props) => {
  const { activeTab, setActiveTabId, nextTab, previousTab, enabledTabs } = useTabs({ id, tabs, saveToUrl });

  return (
    <div>
      <TabSelector
        tabs={tabs}
        activeTab={activeTab}
        setActiveTabId={setActiveTabId}
        enabledTabs={enabledTabs}
      />

      <div className={'mt-5'}>
        {activeTab?.render({
          setActiveTabId,
          nextTab,
          previousTab
        })}
      </div>
    </div>
  );
};
