import styled from "styled-components";
import { primaryFont } from "../fonts";
import { FaCar } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const LogoWrapper = styled(Link)`
  display: flex;
  gap: 0.8rem;

  &:hover {
    cursor: pointer;
  }
`;

export const LogoIcon = styled(FaCar)`
  font-size: 2rem;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const LogoText = styled.span`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${primaryFont};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
`;
