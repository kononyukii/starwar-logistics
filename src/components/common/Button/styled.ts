import styled from 'styled-components'

import { ButtonType } from '../../../types/common'

export const Button = styled.button.attrs(({ type }: ButtonType) => ({
  type: type || 'button'
}))`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  user-select: none;

  &:hover {
    transform: scale(1.01);
    transition: all 0.5s;
  }
`
