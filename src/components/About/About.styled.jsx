import styled from "styled-components";
import { LuMountainSnow } from "react-icons/lu";
import { LiaCampgroundSolid } from "react-icons/lia";
import { GiFlexibleStar } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { interFont, primaryFont } from "../fonts";

export const AboutContainer = styled.section`
  margin: 4.8rem auto;
  padding: 2.4rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;

  @media (min-width: 840px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 100%;
  }
`;

export const AboutHeadingTitle = styled.h2`
  position: relative;
  text-align: center;
  font-family: ${interFont};
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 1.33333;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const AboutIcon = styled.span`
  position: absolute;
  top: -3.6rem;
  right: 0;
  font-size: 3.2rem;
  color: ${(p) => p.theme.colors.mainTextColor};

  @media (min-width: 640px) {
    top: 0;
    right: -4.4rem;
  }
`;

export const AboutHeadingTitleAccent = styled.strong`
  color: ${(p) => p.theme.colors.accentColor};
`;

export const AboutMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    gap: 2.4rem;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const AboutItem = styled.li`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 4.8rem 2.4rem;
  border-radius: 1.4rem;
  position: relative;
  background-color: ${(p) => p.theme.colors.headerBgColor};
  max-width: 36.5rem;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  border-bottom: 1px solid ${(p) => p.theme.colors.mainBgColorReverse};

  @media (min-width: 1440px) {
    padding: 4.8rem 2.4rem 2.4rem;
  }
`;

export const AboutTitle = styled.h3`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 22px;
  line-height: 1.33333;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const AboutText = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33333;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  border-radius: 20rem;
  background-color: ${(p) => p.theme.colors.mainBgColor};

  position: absolute;
  top: -3.2rem;
  left: 50%;

  border-bottom: 1px solid ${(p) => p.theme.colors.mainBgColorReverse};

  transform: translateX(-50%);
`;

export const IconTime = styled(LuMountainSnow)`
  font-size: 3.2rem;
  color: ${(p) => p.theme.colors.accentColor};
`;

export const IconLocation = styled(LiaCampgroundSolid)`
  font-size: 3.2rem;
  color: ${(p) => p.theme.colors.accentColor};
`;

export const IconTrust = styled(GiFlexibleStar)`
  font-size: 3.2rem;
  color: ${(p) => p.theme.colors.accentColor};
`;

export const IconKey = styled(BiSupport)`
  font-size: 3.2rem;
  color: ${(p) => p.theme.colors.accentColor};
`;
