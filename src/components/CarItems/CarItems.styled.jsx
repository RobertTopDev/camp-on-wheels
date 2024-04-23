import styled from "styled-components";
import { interFont } from "../fonts";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export const CarItem = styled.li`
  border-radius: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  overflow: hidden;
  background-color: ${(p) => p.theme.colors.headerBgColor};
  margin: 0 auto;
  border-radius: 20px;
  padding: 2.4rem;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 920px) {
    flex-direction: column;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const CarImgWrapper = styled.div`
  position: relative;
  border-radius: 10px;

  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    height: 310px;
    width: 290px;
  }

  @media (min-width: 920px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1200px) {
    height: 310px;
    width: 290px;
  }
`;

export const CarImgDotsWrapper = styled.div`
  position: absolute;
  bottom: 2.4rem;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const CarImgDots = styled.div`
  border-radius: 20rem;
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${(p) =>
    p?.$active ? p.theme.colors.accentColor : p.theme.colors.headerBgColor};
  padding: 0.4rem;
  cursor: pointer;
  transition: var(--primary-transition);

  transform: scale(${(p) => (p?.$active ? 1 : 0.8)});

  &:hover {
    background-color: ${(p) => p.theme.colors.accentColorHover};
    transform: scale(1);
  }
`;

export const CarImgDotsSecond = styled.div`
  border-radius: 20rem;
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${(p) =>
    p?.$active ? p.theme.colors.accentColor : p.theme.colors.headerBgColor};
  padding: 0.4rem;
  /* border: 1px solid ${(p) => p.theme.colors.accentColor}; */
  cursor: pointer;
  transition: var(--primary-transition);

  transform: scale(${(p) => (p?.$active ? 1 : 0.8)});

  &:hover {
    background-color: ${(p) => p.theme.colors.accentColorHover};
    transform: scale(1);
  }
`;

export const CarImgDotsThird = styled.div`
  border-radius: 20rem;
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${(p) =>
    p?.$active ? p.theme.colors.accentColor : p.theme.colors.headerBgColor};
  padding: 0.4rem;
  cursor: pointer;
  transition: var(--primary-transition);

  transform: scale(${(p) => (p?.$active ? 1 : 0.8)});

  &:hover {
    background-color: ${(p) => p.theme.colors.accentColorHover};
    transform: scale(1);
  }
`;

export const CarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-position: 65%;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 310px;
    width: 290px;
  }

  @media (min-width: 920px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1200px) {
    height: 310px;
    width: 290px;
  }
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: space-between;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const CartItemTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 620px) {
    flex-direction: row;
  }

  @media (min-width: 920px) {
    flex-direction: column;
  }

  @media (min-width: 1320px) {
    flex-direction: row;
  }
`;

export const CartItemTitle = styled.h2`
  display: inline-block;
  font-family: ${interFont};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const CartItemPrice = styled.span`
  font-family: ${interFont};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const CardItemRatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (min-width: 360px) {
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;
  }
`;

export const CardItemRatingWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const CardItemStarRatingWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const CardItemStarIcon = styled.span`
  font-size: 1.6rem;
  color: #ffc531;
`;

export const CardItemRating = styled.span`
  font-family: ${interFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const CardItemLocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const CardItemLocationIcon = styled.span`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const CardItemLocation = styled.span`
  font-family: ${interFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.mainTextColor};
  padding: 0;
  margin: 0;
`;

export const ReadMoreWrapper = styled.div`
  max-height: 8rem;
  height: 100%;
  width: 100%;
`;

export const CardItemFeaturesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const CardItemFeatures = styled.div`
  border-radius: 100px;
  padding: 12px 18px;
  background-color: ${(p) => p.theme.colors.featuresBgColor};
  background-color: ${(p) => p.theme.colors.mainBgColor};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

export const CardItemFeaturesIcon = styled.span`
  font-size: 2rem;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const CardItemFeaturesText = styled.span`
  font-family: ${interFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const CardItemTextDescr = styled.p`
  color: ${(p) => p.theme.colors.mainTextColorLowOp};

  font-family: ${interFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.secondaryTextColor};

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    -webkit-line-clamp: 2;
  }
`;

export const CardBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  border-radius: 20rem;
  padding: 16px 40px;
  width: 100%;
  height: 56px;
  margin: 0 auto;

  font-family: ${interFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
  transition: var(--primary-transition);

  background-color: ${(p) => p.theme.colors.accentColor};

  &:hover {
    background-color: ${(p) => p.theme.colors.accentColorHover};
    cursor: pointer;
  }

  @media (min-width: 360px) {
    width: 166px;
  }

  @media (min-width: 768px) {
    margin: 0;
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
