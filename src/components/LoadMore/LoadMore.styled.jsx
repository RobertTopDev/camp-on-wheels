import styled from "styled-components";
import { primaryFont } from "../fonts";

export const LoadMoreBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  border: 1px solid ${(p) => p.theme.colors.inputBgColor};
  border-radius: 20rem;
  padding: 1.6rem 3.2rem;
  width: 145px;
  height: 56px;

  font-family: ${primaryFont};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: ${(p) => p.theme.colors.mainTextColor};
  background-color: ${(p) => p.theme.colors.headerBgColor};

  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    border: 1px solid ${(p) => p.theme.colors.accentColorHover};
  }
`;
