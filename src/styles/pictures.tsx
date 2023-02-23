import styled from 'styled-components';
import { StyledImageProps } from '@/types'

export const StyledImageWrapper = styled.button`
  position: relative;
  width: 100%;
  display: block;
  height: 0;
  background-color: #f3f3f3;
  padding-bottom: 75%;
  background: none;
  border: none;
`;

export const StyledImage = styled.img<StyledImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  border-radius: 1rem;
  cursor: pointer;
`;