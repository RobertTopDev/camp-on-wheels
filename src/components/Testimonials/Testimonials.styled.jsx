import styled from "styled-components";
import { primaryFont } from "../fonts";

export const TestimonialsContainer = styled.div`
  max-width: 128rem;
  margin: 4.8rem auto;
  padding: 2.4rem;
  width: 100%;

  @media (min-width: 840px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 100%;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: ${(p) => p.theme.colors.accentColor};
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

export const TestimonialsSubTitle = styled.span`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.28571;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const TestimonialsTitle = styled.h2`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 4.4rem;
  line-height: 1.09091;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const TestimonialsAll = styled.div`
  margin-top: 2rem;
  position: relative;
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2.4rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
    font-size: 1.4rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
