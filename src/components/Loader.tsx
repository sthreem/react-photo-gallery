import React from 'react'
import { LoaderOverlay, Spinner } from '@/styles/loader'

const Loader: React.FC = () => {
  return (
    <LoaderOverlay>
      <Spinner />
    </LoaderOverlay>
  )
}

export default Loader