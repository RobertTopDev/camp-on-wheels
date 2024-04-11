import { Link } from "react-router-dom";
import styled from "styled-components";
import { primaryFont } from "../fonts";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  padding: 1.2rem 2.4rem;
  margin: 0 auto;
  background-color: ${(p) => p.theme.colors.headerBgColor};
`;

export const HeaderTextWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const HeaderLink = styled(Link)`
  color: ${(p) =>
    p?.$active
      ? p.theme.colors.mainTextColor
      : p.theme.colors.mainTextColorLowOp};
  font-family: ${primaryFont};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
  transition: 0.3s linear;

  position: relative;
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    background-color: ${(p) => p.theme.colors.mainTextColor};
    height: 1px;
    width: 0;
    left: 0;
    bottom: 0;
    transition: 0.3s linear;
  }

  &:before {
    content: "";
    position: absolute;
    background-color: ${(p) => p.theme.colors.mainTextColor};
    height: 1px;
    width: 0;
    right: 0;
    bottom: 0;
    transition: 0.3s linear;
  }

  &:hover {
    color: ${(p) => p.theme.colors.mainTextColor};
  }

  &:hover:after {
    width: 50%;
  }

  &:hover:before {
    width: 50%;
  }
`;
