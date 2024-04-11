import styled from "styled-components";
import { TbSunHigh, TbMoon } from "react-icons/tb";

export const SwitcherTheme = styled.button`
  border: none;
  outline: none;
  background: none;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: 0.3s;
`;

export const IconClickLight = styled(TbSunHigh)`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: 0.3s;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    background-color: ${(p) => p.theme.colors.switcherHoverBg};
  }
`;

export const IconClickDark = styled(TbMoon)`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: 0.3s;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    background-color: ${(p) => p.theme.colors.switcherHoverBg};
  }
`;
