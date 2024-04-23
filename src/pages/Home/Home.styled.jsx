import styled from "styled-components";
import heroImg from "@/assets/heroBg.jpg";
import { interFont, primaryFont } from "../../components/fonts";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  min-height: calc(100vh - 6rem);
  height: 100%;
  margin: 0 auto;
`;

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 6rem);
  background: url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 1;
  padding: 1.2rem;
  overflow: hidden;

  display: flex;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5) 0);
    opacity: 0.7;
    z-index: -5;
  }

  @media (min-width: 375px) {
    padding: 1.2rem;
  }

  @media (min-width: 768px) {
    padding: 3.2rem;
    overflow: visible;
  }

  @media (min-width: 1440px) {
    padding: 3.2rem;

    align-items: start;
    justify-content: center;
  }
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 2.4rem;
  margin-top: 4.8rem;
  max-width: 60rem;
  width: 100%;

  background-color: ${(p) => p.theme.colors.heroBgLowOp};
  border-radius: 1.2rem;
  backdrop-filter: blur(5px);

  @media (min-width: 768px) {
    margin-top: 0;
  }

  @media (min-width: 1220px) {
    max-width: 82.6rem;
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  color: ${(p) => p.theme.colors.lightWhiteColor};

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1440px) {
    font-size: 48px;
  }
`;

export const HeroTitleSpan = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.accentColor};

  position: relative;
  z-index: 200;

  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 1440px) {
    font-size: 54px;
  }
`;

export const HeroText = styled.p`
  color: ${(p) => p.theme.colors.lightWhiteColor};
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33333;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const CatalogBtn = styled(Link)`
  background: none;
  outline: none;
  border: none;
  padding: 1.2rem 3.2rem;
  border-radius: 1.2rem;
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.accentColor};
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.accentColorHover};
  }
`;

export const AnimatedText = styled.div`
  position: absolute;
  bottom: 2.4rem;
  width: 130%;
  font-family: ${interFont};
  font-weight: 600;
  font-size: 22.4rem;
  white-space: nowrap;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.mainTextColorLowOp};

  @media (min-width: 620px) {
    font-size: 32.4rem;
    width: 120%;
  }

  @media (min-width: 1220px) {
    font-size: 26.4rem;
    width: 50%;
    bottom: 0;
  }
`;
