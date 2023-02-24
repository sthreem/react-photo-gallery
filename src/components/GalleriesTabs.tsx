import React, { useState } from 'react'
import { TabsContainer, TabsNavigation, NavigationButton } from '@/styles/tabs'
import TabContent from '@/components/TabContent'

const GalleriesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tabs: string[] = ['Recently Added', 'Favorited']

  return (
    <TabsContainer
      id="tabs-container">
      <TabsNavigation
        role="tablist"
        id="tabs-navigation" >
        {tabs.map((tab, index) => (
          <NavigationButton
            key={`navigation-button-${index}`}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`tab-content-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
            id={`navigation-button-${index}`} >
            {tabs[index]}
          </NavigationButton>
        ))}
      </TabsNavigation>
      {tabs.map((tab, index) => (
        <TabContent
          aria-labelledby={`navigation-button-${index}`}
          key={`tab-content-${index}`}
          index={index}
          isHidden={activeTab !== index}
          isFavorites={activeTab === 1} />
      ))}
    </TabsContainer>
  )
}

export default GalleriesTabs
