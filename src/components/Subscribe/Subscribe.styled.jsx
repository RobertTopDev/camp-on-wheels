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
  max-width: 94rem;
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.theme.colors.headerBgColor};
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  padding: 2.4rem;
  border-radius: 1.6rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
  }
`;

export const SubscribeTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  z-index: 5;

  @media (min-width: 720px) {
    gap: 4.2rem;
  }
`;

export const SubscribeTitle = styled.h3`
  font-family: ${interFont};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const SubscribeText = styled.p`
  width: 100%;
  font-family: ${interFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.secondaryTextColor};

  @media (min-width: 600px) {
    width: 75%;
    color: ${(p) => p.theme.colors.mainTextColor};
  }
  @media (min-width: 720px) {
    width: 100%;
    color: ${(p) => p.theme.colors.secondaryTextColor};
  }
`;

export const SubscribeInputWrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 20;

  gap: 1.2rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const SubscribeInput = styled.input`
  width: 100%;
  background: none;
  outline: none;
  border: none;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  border-radius: 1rem;
  padding: 18px;
  height: 56px;
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${interFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  @media (min-width: 480px) {
    width: 100%;
    border-radius: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &::placeholder {
    font-family: ${interFont};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${(p) => p.theme.colors.inputTextColor};
  }
`;

export const SubscribeButton = styled.button`
  align-self: flex-end;
  background: none;
  outline: none;
  border: none;
  background-color: ${(p) => p.theme.colors.accentColor};
  border-radius: 1rem;
  width: 100%;
  height: 56px;
  font-family: ${interFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
  transition: var(--primary-transition);

  @media (min-width: 326px) {
    width: 160px;
  }

  @media (min-width: 480px) {
    border-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:hover {
    background-color: ${(p) => p.theme.colors.accentColorHover};
    cursor: pointer;
  }
`;

export const RoadImg = styled.div`
  position: absolute;
  bottom: -55%;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: url(${roadImg});
  background-size: cover;
  background-position: bottom 15rem center;
  background-repeat: no-repeat;

  @media (min-width: 480px) {
    bottom: -60%;
    background-position: bottom 12rem center;
  }

  @media (min-width: 600px) {
    top: 0;
    left: 33%;
    background-position: bottom 20% center;
    background-size: cover;
  }
`;
