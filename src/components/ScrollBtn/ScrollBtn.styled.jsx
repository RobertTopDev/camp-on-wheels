import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

export const ScrollBtnIcon = styled(FaArrowUp)`
  font-size: 3.6rem;
  padding: 1rem;
  color: ${(p) => p.theme.colors.mainBgColor};
  transition: all 0.3s linear;
  cursor: pointer;

  @media (min-width: 1440px) {
    font-size: 4.4rem;
    padding: 1rem;
  }
`;

export const ScrollButton = styled.button`
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  border-radius: 2rem;
  background-color: ${(p) => p.theme.colors.accentColor};
  font-size: 0px;
  border: 1px solid ${(p) => p.theme.colors.mainTextColorVeryLowOp};
  transition: all var(--primary-transition);
  opacity: ${(p) => (p?.$visible ? 1 : 0)};
  pointer-events: ${(p) => (p?.$visible ? "auto" : "none")};
  z-index: 250;

  @media (min-width: 1440px) {
    bottom: 2.4rem;
    right: 3.2rem;
    border-radius: 2.5rem;
  }

  &:hover {
    border-color: ${(p) => p.theme.colors.lightWhiteColor};
    background-color: ${(p) => p.theme.colors.accentColorHover};
  }

  &:hover {
    ${ScrollBtnIcon} {
      color: ${(p) => p.theme.colors.lightWhiteColor};
    }
  }
`;
