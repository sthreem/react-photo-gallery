// Interfaces
interface PictureMetrics {
  height: number;
  width: number;
}

interface SharedUser {
  id: string;
  name: string;
  avatar: string;
}

export interface Picture {
  id: string;
  url: string;
  filename: string;
  description: string
  uploadedBy: string;
  createdAt: string;
  updatedAt: string;
  dimensions: PictureMetrics;
  resolution: PictureMetrics;
  sizeInBytes: string;
  sharedWith: SharedUser[];
  favorited: boolean;
}

export interface PicturesState {
  status: 'idle' | 'loading' | 'failed';
  pictures: Picture[];
  error: string | null;
  selectedPicture: Picture | null;
  favorites: Picture[];
}

export interface Tab {
  label: string;
  children: React.ReactNode;
}

export interface TabHeaderProps {
  isActive: boolean;
}

export interface PicturesGridProps {
  pictures: Picture[];
}

export interface GridPictureProps {
  picture: Picture;
  key: number;
}

export interface StyledImageProps {
  loaded: boolean;
}