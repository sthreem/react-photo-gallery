import styled from 'styled-components';
import { StyledImageProps } from '@/types'

export const GridPictureWrapper = styled.article`
  display: flex;
  flex-direction: column;
  text-overflow: ellipsis;
`;

export const StyledImageWrapper = styled.button`
  position: relative;
  width: 100%;
  display: block;
  height: 0;
  background-color: #f3f3f3;
  padding-bottom: 75%;
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: .4rem;

  &:focus,
  &:hover,
  &:focus-visible {
      outline: none;
  }

  &:focus-visible:before {
		content: "";
		position: absolute;
		inset: -5px;
		border: 2px solid #4F45E4;
		border-radius: 1rem;
	}
`;

export const StyledImage = styled.img<StyledImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  border-radius: 1rem;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    transform: scale(1.05);
  }
`;