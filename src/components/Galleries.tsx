import React from 'react'
import GalleriesTabs from '@/components/GalleriesTabs'
import { GalleriesContainer } from '@/styles/layout'
import { GalleriesHeading } from '@/styles/texts'

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