import { Photo } from '@/types'

export const PHOTOS_ENDPOINT = 'https://agencyanalytics-api.vercel.app/images.json'

export const INFO_TO_DISPLAY = {
  uploadedBy: 'Uploaded by',
  createdAt: 'Created',
  updatedAt: 'Last modified',
  dimensions: 'Dimensions',
  resolution: 'Resolution'
} as { [key in keyof Photo]: string }