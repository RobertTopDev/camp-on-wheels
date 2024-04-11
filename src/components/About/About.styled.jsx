import styled from "styled-components";
import { Ri24HoursLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { SiTrustpilot } from "react-icons/si";
import { ImKey2 } from "react-icons/im";
import { primaryFont } from "../fonts";

export const AboutContainer = styled.div`
  margin: 4.8rem auto;
  padding: 2.4rem;
  width: 100%;

  @media (min-width: 840px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 100%;
  }
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

export const IconTime = styled(Ri24HoursLine)`
  font-size: 3.2rem;
  color: ${(p) => p.theme.colors.accentColor};
`;

export const IconLocation = styled(MdLocationOn)`
  font-size: 3.2rem;
  color: ${(p) => p.theme.colors.accentColor};
`;

export const IconTrust = styled(SiTrustpilot)`
  font-size: 3.2rem;
  color: ${(p) => p.theme.colors.accentColor};
`;

export const IconKey = styled(ImKey2)`
  font-size: 3.2rem;
  color: ${(p) => p.theme.colors.accentColor};
`;
