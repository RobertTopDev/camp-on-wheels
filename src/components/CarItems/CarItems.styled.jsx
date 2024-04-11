import styled from "styled-components";
import { primaryFont } from "../fonts";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export const CarItem = styled.li`
  border-radius: 1.4rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  max-width: 36.5rem;
  width: 100%;
`;

export const CarImgWrapper = styled.div`
  position: relative;
`;

export const CarImg = styled.img`
  width: 100%;
  height: auto;
  border-top-right-radius: 1.4rem;
  border-top-left-radius: 1.4rem;
  object-fit: cover;
  aspect-ratio: 3/2;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: space-between;
  height: 100%;
  padding: 1.2rem;
  background-color: ${(p) => p.theme.colors.headerBgColor};
`;

export const CardInfoWrapper = styled.div`
  /* padding: 1.2rem; */
`;

export const CartItemTitleWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
`;

export const CartItemTitleWrap = styled.div`
  display: flex;
  align-items: center;
  /*  */
  flex-wrap: wrap;
`;

export const CartItemTitle = styled.h2`
  display: inline-block;
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const CartItemTitleModel = styled.span`
  color: ${(p) => p.theme.colors.accentColor};
`;

export const CartItemYear = styled.span`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const CardItemTextDescr = styled.span`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
`;

export const CardBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  border-radius: 1.4rem;
  width: 100%;
  padding: 1.2rem;

  font-family: ${primaryFont};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: ${(p) => p.theme.colors.white};
  transition: var(--primary-transition);

  background-color: ${(p) => p.theme.colors.accentColor};

  &:hover {
    background-color: ${(p) => p.theme.colors.accentColorHover};
    cursor: pointer;
  }
`;

export const HeartIconWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`;

export const EmptyHeartIcon = styled(FaRegHeart)`
  font-size: 2rem;
  color: ${(p) => p.theme.colors.emptyHeart};

  transition: all var(--primary-transition);

  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }
`;

export const FavoriteHeartIcon = styled(FaHeart)`
  font-size: 2rem;
  color: ${(p) => p.theme.colors.accentColor};

  transition: all var(--primary-transition);

  &:hover {
    color: ${(p) => p.theme.colors.accentColorHover};
    cursor: pointer;
  }
`;
