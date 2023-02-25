import styled from 'styled-components';

export const GalleriesHeading = styled.h1`
  margin-bottom: 2.5rem;
`;

export const PhotoInfoHeading = styled.h2`
  width: 100%;
  line-height: 3rem;

  &:first-child {
    border-bottom: 1px solid #cdd8e3;
  }

  &:not(:first-child) {
    padding-top: 1rem;

    @media (min-width: 1024px) {
      padding-top: 2rem;
    }
  }
`;

export const PhotoInfoRow = styled.span`
  display: flex;
  width: 100%;
  line-height: 3rem;
  border-bottom: 1px solid #cdd8e3;
  justify-content: space-between;
`;
