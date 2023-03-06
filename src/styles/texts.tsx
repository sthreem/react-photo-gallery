import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;

const StyledH2 = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;

export const StyledGalleriesHeading = styled(StyledH1)`
  color: #161d30;
  margin-bottom: 2.5rem;
`;

export const StyledPhotoInfoHeading = styled(StyledH2)`
  color: #161d30;
  line-height: 3rem;
  width: 100%;

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

export const StyledPhotoInfoRow = styled.span`
  align-items: center;
  border-bottom: 1px solid #cdd8e3;
  display: flex;
  font-weight: 600;
  justify-content: space-between;
  line-height: 3rem;
  width: 100%;
`;

export const StyledNoPhotoSelectedHeading = styled(StyledH2)`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const StyledInfoKey = styled.span`
  color: #64748b;
  font-weight: 400;
`;

export const StyledDescription = styled.p`
  color: #64748b;
  font-weight: 400;
`;

export const StyledPhotoSize = styled.p`
  color: #64748b;
  font-weight: 400;
`;
