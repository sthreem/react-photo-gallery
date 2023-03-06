import styled from 'styled-components';

export const StyledTabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTabsNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #cdd8e3;
`;

export const StyledNavigationButton = styled.button<{ isActive: boolean }>`
  position: relative;
  margin-right: 1.5rem;
  padding: 10px 0;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  background: none;
  color: ${({ isActive }) => (isActive ? '#4F45E4' : '#64748B')};
  box-shadow: ${({ isActive }) => (isActive ? '0 2px 0 0 #4F45E4' : 'none')};
  transition: box-shadow 0.1s ease-in-out;
  cursor: pointer;
`;

export const StyledTabGrid = styled.div<{ tabIndex: number }>`
  margin-top: 2.5rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;
