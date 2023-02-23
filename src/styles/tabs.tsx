import styled from 'styled-components';
import { TabHeaderProps } from '@/types'

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabHeadersContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #CDD8E3;
`;

export const TabHeader = styled.button<TabHeaderProps>`
  box-sizing: border-box;
  margin-right: 2rem;
  padding: 10px 0;
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? "#4F45E4" : "#64748B")};
  font-weight: 600;
  border: none;
  box-shadow: ${({ isActive }) => isActive ? "0 2px 0 0 #4F45E4" : "none"};
  cursor: pointer;
  transition: box-shadow 0.1s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px blue;
    outline-offset: 1rem;
  }
`;

export const TabContent = styled.section`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
`;