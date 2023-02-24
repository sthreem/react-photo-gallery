import styled from 'styled-components'
import { TabHeaderProps } from '@/types'

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TabsNavigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #CDD8E3;
`

export const NavigationButton = styled.button<TabHeaderProps>`
  margin-right: 1.5rem;
  padding: 10px 0;
  position: relative;
  background: none;
  color: ${({ isActive }) => (isActive ? '#4F45E4' : '#64748B')};
  font-size: 1rem;
  font-weight: 600;
  border: none;
  box-shadow: ${({ isActive }) => isActive ? '0 2px 0 0 #4F45E4' : 'none'};
  transition: box-shadow 0.1s ease-in-out;
  cursor: pointer;
`

export const TabGrid = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
`