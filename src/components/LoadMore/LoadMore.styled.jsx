import styled from "styled-components";
import { primaryFont } from "../fonts";

export const LoadMoreBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 1.2rem 3.2rem;
  border-radius: 1.4rem;
  background-color: ${(p) => p.theme.colors.accentColor};

  font-family: ${primaryFont};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: ${(p) => p.theme.colors.white};

  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.accentColorHover};
  }
`;
