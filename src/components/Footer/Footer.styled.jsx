import styled from "styled-components";
import { primaryFont } from "../fonts";
import { FaPhone } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4.8rem 2.4rem 2.4rem;
  gap: 4.8rem;
  margin: 0 auto;
  background-color: ${(p) => p.theme.colors.headerBgColor};
`;

export const FooterMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: 1020px) {
    display: grid;
    align-items: start;
    grid-template-columns: 1fr 2fr;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FooterContactAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const FooterContactLinkText = styled.p`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${primaryFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  transition: 0.3s ease-in-out;
  border-bottom: 1px solid transparent;
`;

export const FooterContactIconLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  &:hover {
    ${FooterContactLinkText} {
      cursor: pointer;
      border-bottom: 1px solid ${(p) => p.theme.colors.mainTextColor};
    }
  }
`;

export const FooterContactBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: 402px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 540px) {
    align-items: start;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterContactIcons = styled.div`
  font-size: 1.8rem;
`;

export const FooterContactBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (min-width: 540px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const FooterSloganText = styled.p`
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 1.07143;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const FooterSloganTextAccent = styled.span`
  font-weight: 500;
  color: ${(p) => p.theme.colors.accentColor};
`;

export const FooterCallBtn = styled.a`
  background: none;
  outline: none;
  border: none;
  border-radius: 1.4rem;
  padding: 1.2rem 2.4rem;
  background-color: ${(p) => p.theme.colors.green};
  max-width: 32rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.white};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    background-color: #5fc171;
  }
`;

export const FooterEmailBtn = styled.a`
  background: none;
  outline: none;
  border: none;
  border-radius: 1.4rem;
  padding: 1.2rem 2.4rem;
  background-color: ${(p) => p.theme.colors.mail};
  max-width: 32rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.white};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    background-color: #de5353;
  }
`;

export const FooterCallIcon = styled(FaPhone)`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.white};
`;

export const FooterEmailIcon = styled(IoMailOutline)`
  font-size: 2rem;
  color: ${(p) => p.theme.colors.white};
`;

export const FooterInfoWrapper = styled.div`
  border-top: 1px solid ${(p) => p.theme.colors.mainTextColorLowOp};
  padding: 1.2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (min-width: 540px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterInfoText = styled.p`
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;

  order: 2;

  @media (min-width: 540px) {
    order: 1;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;

  order: 1;

  @media (min-width: 540px) {
    order: 2;
  }
`;

export const FooterInfoLink = styled(Link)`
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  transition: all var(--primary-transition);

  &:hover {
    color: ${(p) => p.theme.colors.mainTextColor};
  }
`;
