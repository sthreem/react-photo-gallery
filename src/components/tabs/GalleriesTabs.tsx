import React, { useState } from 'react';

import TabContent from '@/components/tabs/TabContent';
import {
  StyledNavigationButton,
  StyledTabsContainer,
  StyledTabsNavigation,
} from '@/styles/tabs';

const GalleriesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs: string[] = ['Recently Added', 'Favorited'];

  return (
    <StyledTabsContainer data-testid="galleries-tabs">
      {/* Tabs navigation */}
      <StyledTabsNavigation role="navigation" aria-label="Photo gallery navigation">
        {tabs.map((tab, index) => (
          <StyledNavigationButton
            key={`navigation-button-${index}`}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`tab-content-${index}`}
            id={`navigation-button-${index}`}
            data-testid={`navigation-button-${index}`}
          >
            {tabs[index]}
          </StyledNavigationButton>
        ))}
      </StyledTabsNavigation>

      {/* Tabs content */}
      {tabs.map((tab, index) => (
        <TabContent
          key={`tab-content-${index}`}
          index={index}
          isHidden={activeTab !== index}
          isFavorites={activeTab === 1}
          data-testid={`tab-content-${index}`}
        />
      ))}
    </StyledTabsContainer>
  );
};

export default GalleriesTabs;
