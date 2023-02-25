import React from 'react'

import { GalleriesContainer } from '@/styles/layout'
import { GalleriesHeading } from '@/styles/texts'
import GalleriesTabs from '@/components/GalleriesTabs'

const Galleries: React.FC = () => {
  return (
    <GalleriesContainer>
      <GalleriesHeading className='dark'>
        Photos
      </GalleriesHeading>
      <GalleriesTabs />
    </GalleriesContainer>
  )
}

export default Galleries