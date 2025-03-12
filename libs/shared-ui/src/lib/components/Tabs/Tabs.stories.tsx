import React, { useState } from 'react';
import { Tabs } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

const Template = (args) => {
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <>
      <Tabs {...args} activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === 'overview' && <div className="p-4">Overview content</div>}
          {activeTab === 'messages' && <div className="p-4">Messages content</div>}
            {activeTab === 'alerts' && <div className="p-4">Alerts content</div>}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { tabId: 'overview', tabName: 'Overview' },
    { tabId: 'messages', tabName: 'Messages', badge: 3 },
    { tabId: 'alerts', tabName: 'Alerts', badge: 7 },
  ],
  className: 'border-b',
};
