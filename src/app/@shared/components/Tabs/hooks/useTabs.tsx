import { useEffect, useMemo, useState } from "react";
import { ITab } from "@shared/components/Tabs/interfaces/ITab";
import { useSearchParams } from "react-router-dom";

interface Props {
  id: string;
  tabs: ITab[];
  saveToUrl: boolean;
}

export const useTabs = ({ id, tabs, saveToUrl }: Props) => {
  const [activeTabId, setActiveTabId] = useState<ITab['id']>(tabs[0]?.id);
  const [enabledTabs, setEnabledTabs] = useState<ITab['id'][]>([]);
  const [params, setParams] = useSearchParams();
  const serializedTabs = params.get('tabsState');

  const getActiveTabFromUrl = () => {
    try {
      const decodedState = JSON.parse(atob(serializedTabs));
      const instanceState = decodedState[id];

      if (!instanceState?.tabId) return;

      setActiveTabId(instanceState.tabId);
    } catch (error) {
      console.error("Error decoding tabsState:", error);
    }
  };

  const nextTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTabId);
    const nextIndex = currentIndex + 1;

    if (nextIndex >= tabs.length) return;

    setActiveTabId(tabs[nextIndex].id);
  };

  const previousTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTabId);
    const previousIndex = currentIndex - 1;

    if (previousIndex < 0) return;

    setActiveTabId(tabs[previousIndex].id);
  };

  const activeTab = useMemo(() => tabs.find(tab => tab.id === activeTabId), [activeTabId, tabs]);

  useEffect(() => {
    if (!serializedTabs || !tabs.length || !saveToUrl) return;

    getActiveTabFromUrl();
  }, [id, tabs, serializedTabs, saveToUrl]);

  useEffect(() => {
    if (!activeTabId || !saveToUrl) return;

    setParams({ tabsState: btoa(JSON.stringify({ [id]: { tabId: activeTabId } })) });
  }, [activeTabId, setParams, saveToUrl]);

  useEffect(() => {
    if (!tabs.length) return;

    const enabledTabs = tabs.filter((tab: ITab) => tab.isEnable).map((tab: ITab) => tab.id);

    setEnabledTabs(enabledTabs);
  }, [tabs]);

  return {
    activeTab,
    setActiveTabId,
    nextTab,
    previousTab,
    enabledTabs
  };
};
