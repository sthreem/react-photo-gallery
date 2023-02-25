import { Photo, PhotoMetrics, SharedUser } from '@/types'
import { INFO_TO_DISPLAY } from '@/utilities/constants'

// Date string values need parsing before formatting
const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const month = date.toLocaleString('default', { month: 'long' })
  const day = date.getDate()
  const year = date.getFullYear()

  return `${month} ${day}, ${year}`
}

// Some values need adequate formatting before display
const formatInfo = (key: string, value: string | number | boolean | PhotoMetrics | SharedUser[]): string => {
  switch (key) {
    case 'createdAt':
    case 'updatedAt':
      return formatDate(value as string)
    case 'dimensions':
    case 'resolution': {
      const { height, width } = value as PhotoMetrics
      return `${height} x ${width}`
    }
    default:
      return value.toString()
  }
}

const helpers = {
  // Sort photos by their createdAt property
  sortByCreatedAt: (photos: Photo[]) => {
    return photos.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  },
  // Size in B needs to be converted to MB and returned in a hash map with photo.id as key
  convertPhotoSize: (photos: Photo[]) => {
    return photos.reduce<{ [key: string]: string }>((result, photo) => {
      result[photo.id.toString()] = `${(photo.sizeInBytes / (1024 * 1024)).toFixed(1)} MB`
      return result
    }, {})
  },
  // Return an array of all the info we want to display about the photo
  extractInfoToDisplay: (photo: Photo | null) => {
    if (!photo) {
      return []
    }

    return Object.entries(photo)
      .filter(([key]) => Object.keys(INFO_TO_DISPLAY).includes(key as keyof Photo))
      .map(([key, value]) => ({ key: INFO_TO_DISPLAY[key as keyof Photo], value: formatInfo(key, value as string) }))
  }
}

export default helpers
