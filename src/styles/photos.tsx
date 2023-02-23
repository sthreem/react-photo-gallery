import styled from 'styled-components';
import { PhotoProps } from '@/types'

export const PhotoFigure = styled.figure`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const PhotoWrapper = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 0;
  background-color: #f3f3f3;
  margin-bottom: .4rem;
  padding-bottom: 75%;
  border-radius: 1rem;
  cursor: pointer;

  &.is-active-photo:before {
    content: "";
    position: absolute;
    inset: -5px;
    border: 2px solid #4F45E4;
    border-radius: 1rem;
  }
`;

export const Photo = styled.img<PhotoProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: .5;
  }
`;

export const PhotoCaption = styled.figcaption`
  padding: .4rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;