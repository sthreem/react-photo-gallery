import styled from 'styled-components';

import { PhotoProps, StyledPhotoWrapperProps } from '@/types';

export const StyledPhotoFigure = styled.figure<{ isInGrid: boolean }>`
  width: 100%;
  max-height: ${(props) => (props.isInGrid ? 'auto' : '100%')};
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const StyledImageWrapper = styled.span<StyledPhotoWrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.loaded ? 'transparent' : '#f3f3f3')};
  margin-bottom: 0.4rem;
  max-height: 450px;
  border-radius: 1rem;

  ${(props) => {
    if (props.isInGrid) {
      return `
        display: block;
        cursor: pointer;
        padding-bottom: 75%;
      `;
    }
  }}

  ${(props) => {
    if (props.isInGrid && props.isActive) {
      return `
       &::before {
        content: '';
        position: absolute;
        inset: -5px;
        border-radius: 1rem;
        border: 2px solid #4f45e4;
       }
      `;
    }
  }}

  @media (min-width: 1024px) {
    max-height: inherit;
  }
`;

export const StyledImage = styled.img<PhotoProps>`
  width: ${(props) => (props.isVertical ? 'auto' : '100%')};
  height: ${(props) => (props.isVertical ? '100%' : 'auto')};
  border-radius: 1rem;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: all 0.3s ease-in-out;

  ${(props) => {
    if (props.isInGrid) {
      return `
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;

        &:hover {
          opacity: 0.5;
        }
      `;
    }
  }}
`;

export const StyledInfoActionWrapper = styled.span<{ isInGrid: boolean }>`
  ${(props) => {
    if (!props.isInGrid) {
      return `
        display: flex;
        justify-content: space-between;
      `;
    }
  }}
`;

export const StyledInfoWrapper = styled.span`
  flex-direction: column;
`;

export const StyledFavoritePhotoButtonWrapper = styled.span<{ isInGrid: boolean }>`
  display: ${(props) => (props.isInGrid ? 'none' : 'flex')};

  ${(props) => {
    if (!props.isInGrid) {
      return `
        align-items: center;
        justify-content: center;
        cursor: pointer;
      `;
    }
  }}
`;

export const StyledPhotoCaption = styled.figcaption<{ isInGrid: boolean }>`
  padding: 0.4rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #161d30;
  font-weight: 600;

  ${(props) => {
    if (!props.isInGrid) {
      return `
        font-size: 1rem;
      `;
    }
  }}
`;

export const StyledPhotoInfos = styled.article`
  display: flex;
  width: 100%;
  padding-top: 1rem;
  flex-direction: column;

  @media (min-width: 768px) {
    justify-content: flex-start;
    padding-top: 0;
  }

  @media (min-width: 1024px) {
    padding-top: 2rem;
  }
`;

export const StyledDetailsWrapper = styled.section<{ isSelected: boolean }>`
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.isSelected ? 'flex-start' : 'center')};
  align-items: center;
  width: 100%;
  max-width: 450px;
  overflow-x: auto;
`;

export const StyledDeleteButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  cursor: pointer;
  background: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 2px solid #cdd8e3;
  transition: all 0.3s ease-in-out;
  font-weight: 600;

  &:hover {
    background-color: #cdd8e3;
  }

  @media (min-width: 1024px) {
    margin-top: 2rem;
  }
`;

export const StyledCloseMenuButtonWrapper = styled.span`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const StyledSvg = styled.svg`
  fill: #64748b;
  transition: fill 0.2s;

  ${StyledButton}:hover & {
    fill: #4f45e4;
  }
`;
