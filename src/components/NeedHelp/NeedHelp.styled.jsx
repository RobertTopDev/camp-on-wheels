import styled from "styled-components";
import { BsQuestionLg } from "react-icons/bs";

export const NeedHelpBtnIcon = styled(BsQuestionLg)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.accentColor};
  transition: all 0.3s linear;
  cursor: pointer;

  @media (min-width: 1440px) {
    font-size: 2.4rem;
  }
`;

export const NeedHelpModal = styled.div`
  position: fixed;
  bottom: 3.2rem;
  left: 2.4rem;
  border-radius: ${(p) => (p.$needHelp ? "1.2rem" : "2rem")};
  background-color: ${(p) =>
    p.$needHelp ? p.theme.colors.mainBgColor : "transparent"};
  border: 1px solid ${(p) => p.theme.colors.accentColor};
  border: ${(p) => (p.$needHelp ? "0.1px" : "1px")} solid
    ${(p) => p.theme.colors.accentColor};
  font-size: 0px;
  transition: all var(--primary-transition);
  overflow: hidden;
  z-index: 250;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: ${(p) => (p.$needHelp ? "28rem" : "3.6rem")};
  height: ${(p) => (p.$needHelp ? "32rem" : "3.6rem")};

  @media (min-width: 320px) {
    max-width: ${(p) => (p.$needHelp ? "30rem" : "3.6rem")};
  }

  @media (min-width: 1440px) {
    bottom: 2.4rem;
    left: 3.2rem;
    border-radius: 2.5rem;
  }

  &:hover {
    border-color: ${(p) => (p.$needHelp ? "" : p.theme.colors.lightWhiteColor)};
    background-color: ${(p) =>
      p.$needHelp ? "" : p.theme.colors.accentColorHover};
    cursor: pointer;
  }

  &:hover {
    ${NeedHelpBtnIcon} {
      color: ${(p) => p.theme.colors.lightWhiteColor};
    }
  }
`;
