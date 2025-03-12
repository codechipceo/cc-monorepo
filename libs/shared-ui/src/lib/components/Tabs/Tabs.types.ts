export type TabItem = {
  tabId: string;
  tabName: string;
  badge?: number;
};

export type TabContextType = {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
};