import React, { useState } from "react";
import { TabsContainer, TabHeadersContainer, TabHeader, TabContent } from "@/styles/tabs";
import { Tab } from '@/types'
import GalleryGrid from '@/components/GalleryGrid'
import { useAppSelector } from '@/store';
import { selectPictures, selectFavorites } from '@/store/picturesSlice';

const GalleryTabs: React.FC = () => {
  const pictures = useAppSelector(selectPictures);
  const favorites = useAppSelector(selectFavorites);

  const [activeTab, setActiveTab] = useState(0);
  const tabs: Tab[] = [
    { label: "Recently Added", children: <GalleryGrid pictures={pictures} /> },
    { label: "Favorited", children: <GalleryGrid pictures={favorites} /> }
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
