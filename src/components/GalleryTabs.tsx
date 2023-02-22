import React, { useState } from "react";
import { TabsContainer, TabHeadersContainer, TabHeader, TabContent } from "@/styles/tabs";
import { Tab } from '@/types'

const GalleryTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs: Tab[] = [
    { label: "Recently Added", children: <div>Recently added photos</div> },
    { label: "Favorited", children: <div>Favorited photos</div> }
  ];

  return (
    <TabsContainer>
      <TabHeadersContainer>
        {tabs.map((tab, index) => (
          <TabHeader
            key={index}
            isActive={index === activeTab}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </TabHeader>
        ))}
      </TabHeadersContainer>
      <TabContent>{tabs[activeTab].children}</TabContent>
    </TabsContainer>
  );
};

export default GalleryTabs;
