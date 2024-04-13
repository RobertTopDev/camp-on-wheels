import styled from "styled-components";
import { interFont } from "../fonts";

export const ReadMore = styled.p`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${interFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`;

export const BtnExpander = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  color: ${(p) => p.theme.colors.readMoreBtn};
  margin-left: 0.4rem;
`;
