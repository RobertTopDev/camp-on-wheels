import styled from "styled-components";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa6";

export const SocialMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Link = styled.a`
  display: block;
  width: 3.6rem;
  height: 3.6rem;
`;

export const InstagramIcon = styled(FaInstagram)`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: 0.2s linear;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    color: #e1306c;
  }
`;

export const YoutubeIcon = styled(FaYoutube)`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: 0.2s linear;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    color: #ff0000;
  }
`;

export const FacebookIcon = styled(FaFacebook)`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-size: 3.6rem;
  transition: color 0.2s linear;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    color: #3b5998;
  }
`;
