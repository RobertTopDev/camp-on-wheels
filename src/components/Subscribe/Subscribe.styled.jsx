import styled from "styled-components";
import { interFont } from "../fonts";
import roadImg from "../../../public/images/road.jpg";

export const SubscribeContainer = styled.section`
  margin: 4.8rem auto;
  padding: 2.4rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;
`;

export const SubscribeWrapper = styled.div`
  width: 94rem;
  background-color: ${(p) => p.theme.colors.headerBgColor};
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 4.8rem;
  padding: 2.4rem;
  border-radius: 1.6rem;
  position: relative;
  overflow: hidden;
`;

export const SubscribeTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

export const SubscribeTitle = styled.h3`
  font-family: ${interFont};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const SubscribeText = styled.p`
  font-family: ${interFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.secondaryTextColor};
`;

export const SubscribeInputWrapper = styled.form`
  display: flex;
  align-items: center;
  z-index: 20;
`;

export const SubscribeInput = styled.input`
  width: 100%;
  background: none;
  outline: none;
  border: none;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 18px;
  height: 56px;
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${interFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  &::placeholder {
    font-family: ${interFont};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${(p) => p.theme.colors.inputTextColor};
  }
`;

export const SubscribeButton = styled.button`
  background: none;
  outline: none;
  border: none;
  background-color: ${(p) => p.theme.colors.accentColor};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  /* padding: 16px 60px; */
  width: 160px;
  height: 56px;
  font-family: ${interFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
  transition: var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.accentColorHover};
    cursor: pointer;
  }
`;

export const RoadImg = styled.div`
  position: absolute;
  top: 0;
  left: 33%;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: url(${roadImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom 20% center;
`;
