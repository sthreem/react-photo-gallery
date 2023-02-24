import styled from 'styled-components'
import { PhotoProps } from '@/types'

export const PhotoFigure = styled.figure`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  max-height: 100%;

  &.photo-in-grid {
    max-height: auto;
  }

  @media (min-width: 768px) {
    &:not(.photo-in-grid) {
      width: 50%;
    }
  }

  @media (min-width: 1024px) {
    &:not(.photo-in-grid) {
      width: 100%;
    }
  }
`

export const PhotoWrapper = styled.span<{ loaded: boolean }>`
  position: relative;
  background-color: ${(props) => (props.loaded ? 'transparent' : '#f3f3f3')};
  margin-bottom: .4rem;
  border-radius: 1rem;
  max-height: 450px;
  display: flex;
  justify-content: center;

  &.photo-in-grid {
    display: block;
    cursor: pointer;
    padding-bottom: 75%;

    &.is-active-photo:before {
      content: "";
      position: absolute;
      inset: -5px;
      border: 2px solid #4F45E4;
      border-radius: 1rem;
    }
  }

  @media (min-width: 1024px) {
    max-height: inherit;
  }
`

export const PhotoImage = styled.img<PhotoProps>`
  width: ${(props) => (props.isVertical ? 'auto' : '100%')};
  height: ${(props) => (props.isVertical ? '100%' : 'auto')};

  border-radius: 1rem;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  display: none;

  &.photo-in-grid {
    display: inherit;
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;

    &:hover {
      opacity: .5;
    }
  }

  @media (min-width: 768px) {
    &:not(.photo-in-grid) {
      display: inherit;
    }
  }
`

export const PhotoCaption = styled.figcaption`
  padding: .4rem 0;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(.photo-in-grid) {
    font-size: 1rem;
  }
`

export const DetailsWrapper = styled.section`
  width: 450px;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 100%;

    &.selected-photo {
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  @media (min-width: 1024px) {
    max-height: inherit;
    max-width: 450px;
    justify-content: center;
    align-items: center;

    &.selected-photo {
      justify-content: flex-start;
    }
  }
`