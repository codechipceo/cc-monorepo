import React, { createContext, useContext } from 'react';
import { TabContextType, TabItem } from './Tabs.types';
import classNames from 'classnames';

const TabContext = createContext<TabContextType | undefined>(undefined);

export const Tabs = ({
  tabs,
  activeTab,
  setActiveTab,
  className = '',
}: {
  tabs: TabItem[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  className?: string;
  }) => {





  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs__wrapper">
        <div className={``} role="tablist">
          {tabs.map(({ tabId, tabName, badge }) => (
            <button
              key={tabId}
              role="tab"
              aria-selected={activeTab === tabId}
              className={
                activeTab === tabId
                  ? `tabs__btn--active tabs__btn`
                  : `tabs__title--text tabs__btn`
              }
              onClick={() => setActiveTab(tabId)}
            >
              {tabName}
              {badge !== undefined && badge > 0 && (
                <span className="tabs__badge">
                  {badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </TabContext.Provider>
  );
};
