import { Photo } from '@/types';

const PHOTOS_ENDPOINT = 'https://agencyanalytics-api.vercel.app/images.json';

const INFO_TO_DISPLAY = {
  uploadedBy: 'Uploaded by',
  createdAt: 'Created',
  updatedAt: 'Last modified',
  dimensions: 'Dimensions',
  resolution: 'Resolution',
} as { [key in keyof Photo]: string };

export default {
  PHOTOS_ENDPOINT,
  INFO_TO_DISPLAY,
};
