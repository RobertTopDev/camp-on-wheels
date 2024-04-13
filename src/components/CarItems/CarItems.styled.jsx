import styled from "styled-components";
import { interFont, primaryFont } from "../fonts";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export const CarItem = styled.li`
  border-radius: 1.4rem;
  display: flex;
  gap: 2.4rem;
  overflow: hidden;
  height: 100%;

  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  height: 358px;
  width: 100%;
`;

export const CarImgWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  /* width: 290px; */
  /* height: 310px; */
  overflow: hidden;
`;

export const CarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: 75%;
  object-fit: cover;
`;

// export const CarImgWrapper = styled.div`
//   position: relative;
//   border-radius: 10px;
//   width: 290px;
//   height: 310px;
//   overflow: hidden;
// `;

// export const CarImg = styled.img`
//   width: 100%;
//   width: 290px;
//   height: 310px;
//   height: 100%;
//   object-fit: contain;
//   object-position: right;
// `;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: space-between;
  width: 100%;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const CartItemTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartItemTitle = styled.h2`
  display: inline-block;
  font-family: ${interFont};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const CartItemTitleModel = styled.span`
  color: ${(p) => p.theme.colors.accentColor};
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
  gap: 1.6rem;
  align-items: center;
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
  width: 560px;
`;

export const CardItemFeaturesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const CardItemFeatures = styled.div`
  border-radius: 100px;
  padding: 12px 18px;
  width: 126px;
  height: 44px;
  background-color: ${(p) => p.theme.colors.featuresBgColor};

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
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.mainTextColorLowOp};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  border-radius: 20rem;
  padding: 16px 40px;
  width: 166px;
  height: 56px;

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
