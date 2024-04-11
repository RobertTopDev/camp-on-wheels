import styled from "styled-components";
import { primaryFont } from "../fonts";

export const ClientsContainer = styled.div`
  background-color: ${(p) => p.theme.colors.headerBgColor};
  padding: 2.4rem;
  border-radius: 1.4rem;
  margin: 0 1rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const ClientsTopWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1.2rem;
`;

export const QuoteIcon = styled.span`
  font-size: 3rem;
  color: #01be96;
  opacity: 0.7;
`;

export const ClientsText = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
`;

export const ClientsImgWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50px;
    object-fit: cover;
  }
`;

export const ClientsName = styled.h3`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.mainTextColor};
`;
