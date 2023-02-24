import styled from 'styled-components'

// Main app view
export const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const MainContent = styled.main`
  background-color: #f7fafc;
  flex: 2;
  border-top: 1px solid #CDD8E3;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1.5rem;
  overflow-x: auto;

  @media (min-width: 1024px) {
    border-top: none;
    border-right: 1px solid #CDD8E3;
    padding: 2.5rem;
  }
`

export const SideContent = styled.aside`
  background-color: #fff;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1.5rem;
  border-top: 1px solid #CDD8E3;
  transition: flex 0.2s ease-in-out;
  max-height: 427px;

  &.no-selected-photo {
    justify-content: center;
    flex: 0;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  @media (min-width: 1024px) {
    border-top: none;
    padding: 2.5rem;
    height: 100%;
    max-height: 100%;
    align-items: center;
    justify-content: center;

    &.no-selected-photo {
      display: flex;
      flex: 1;
    }
  }
`

// Inner galleries view
export const GalleriesContainer = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 950px
  }
`