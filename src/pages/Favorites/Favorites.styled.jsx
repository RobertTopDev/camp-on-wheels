import styled from "styled-components";
import heroImg from "@/assets/heroBg.jpg";
import { primaryFont } from "../../components/fonts";

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;

  padding: 2.4rem;

  @media (min-width: 1440px) {
    padding: 9.6rem 12.8rem;
  }
`;

export const FavoritesMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  height: 100%;
  width: 100%;

  position: relative;
`;

export const FavoritesEmptyContainer = styled.div`
  min-height: calc(100vh - 6rem);
  height: 100%;
  margin: 0 auto;
`;

export const FavoritesEmptyWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 6rem);
  background: url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 1;
  padding: 1.2rem 0 1.2rem 1.2rem;
  overflow: hidden;

  display: flex;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5) 0);
    opacity: 0.7;
    z-index: -5;
  }

  @media (min-width: 375px) {
    padding: 1.2rem;
  }

  @media (min-width: 768px) {
    padding: 3.2rem;
    overflow: visible;
  }
`;

export const FavoritesEmptyTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  padding: 2.4rem;
  width: 60rem;
  background-color: ${(p) => p.theme.colors.heroBgLowOp};
  border-radius: 1.2rem;
  backdrop-filter: blur(5px);

  height: 100%;

  margin-top: 4.8rem;
`;

export const FavoritesEmptyTitle = styled.h2`
  color: ${(p) => p.theme.colors.lightWhiteColor};
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
`;

export const FavoritesEmptyText = styled.p`
  color: ${(p) => p.theme.colors.lightWhiteColor};
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
`;

//
//
//
//
//

// export const CarItem = styled.li`
//   border-radius: 1.4rem;
//   display: flex;
//   gap: 2.4rem;
//   overflow: hidden;
//   height: 100%;

//   background-color: ${(p) => p.theme.colors.headerBgColor};

//   /* border: 1px solid rgba(16, 24, 40, 0.2); */
//   border-radius: 20px;
//   padding: 24px;
//   height: 358px;
//   width: 100%;
// `;

// export const CarImgWrapper = styled.div`
//   position: relative;
//   border-radius: 10px;
//   width: 290px;
//   height: 310px;
// `;

// export const CarImgDotsWrapper = styled.div`
//   position: absolute;
//   bottom: 2.4rem;
//   left: 50%;
//   transform: translateX(-50%);

//   display: flex;
//   align-items: center;
//   gap: 1.2rem;
// `;

// export const CarImgDots = styled.div`
//   border-radius: 20rem;
//   width: 1.2rem;
//   height: 1.2rem;
//   background-color: ${(p) =>
//     p?.$active ? p.theme.colors.accentColor : p.theme.colors.headerBgColor};
//   padding: 0.4rem;
//   /* border: 1px solid ${(p) => p.theme.colors.accentColor}; */
//   cursor: pointer;
//   transition: var(--primary-transition);

//   transform: scale(${(p) => (p?.$active ? 1 : 0.8)});

//   &:hover {
//     background-color: ${(p) => p.theme.colors.accentColorHover};
//     transform: scale(1);
//   }
// `;

// export const CarImgDotsSecond = styled.div`
//   border-radius: 20rem;
//   width: 1.2rem;
//   height: 1.2rem;
//   background-color: ${(p) =>
//     p?.$active ? p.theme.colors.accentColor : p.theme.colors.headerBgColor};
//   padding: 0.4rem;
//   /* border: 1px solid ${(p) => p.theme.colors.accentColor}; */
//   cursor: pointer;
//   transition: var(--primary-transition);

//   transform: scale(${(p) => (p?.$active ? 1 : 0.8)});

//   &:hover {
//     background-color: ${(p) => p.theme.colors.accentColorHover};
//     transform: scale(1);
//   }
// `;

// export const CarImgDotsThird = styled.div`
//   border-radius: 20rem;
//   width: 1.2rem;
//   height: 1.2rem;
//   background-color: ${(p) =>
//     p?.$active ? p.theme.colors.accentColor : p.theme.colors.headerBgColor};
//   padding: 0.4rem;
//   /* border: 1px solid ${(p) => p.theme.colors.accentColor}; */
//   cursor: pointer;
//   transition: var(--primary-transition);

//   transform: scale(${(p) => (p?.$active ? 1 : 0.8)});

//   &:hover {
//     background-color: ${(p) => p.theme.colors.accentColorHover};
//     transform: scale(1);
//   }
// `;

// export const CarImg = styled.img`
//   width: 100%;
//   width: 290px;
//   height: 100%;
//   height: 310px;
//   border-radius: 10px;
//   object-position: 65%;
//   object-fit: cover;
// `;

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

// export const CardInfoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.2rem;
//   justify-content: space-between;
// `;

// export const CardInfoWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2.4rem;
// `;

// export const CartItemTitleWrap = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// export const CartItemTitle = styled.h2`
//   display: inline-block;
//   font-family: ${interFont};
//   font-weight: 600;
//   font-size: 24px;
//   line-height: 1.25;
//   color: ${(p) => p.theme.colors.mainTextColor};
// `;

// export const CartItemTitleModel = styled.span`
//   color: ${(p) => p.theme.colors.accentColor};
// `;

// export const CartItemPrice = styled.span`
//   font-family: ${interFont};
//   font-weight: 600;
//   font-size: 24px;
//   line-height: 1.25;
//   color: ${(p) => p.theme.colors.mainTextColor};
// `;

// export const CardItemRatingWrapper = styled.div`
//   display: flex;
//   gap: 1.6rem;
//   align-items: center;
// `;

// export const CardItemRatingWrap = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const CardItemStarRatingWrap = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.4rem;
// `;

// export const CardItemStarIcon = styled.span`
//   font-size: 1.6rem;
//   color: #ffc531;
// `;

// export const CardItemRating = styled.span`
//   font-family: ${interFont};
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 1.5;
//   text-decoration: underline;
//   text-decoration-skip-ink: none;
//   color: ${(p) => p.theme.colors.mainTextColor};
// `;

// export const CardItemLocationWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.4rem;
// `;

// export const CardItemLocationIcon = styled.span`
//   font-size: 1.8rem;
//   color: ${(p) => p.theme.colors.mainTextColor};
// `;

// export const CardItemLocation = styled.span`
//   font-family: ${interFont};
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 1.5;
//   color: ${(p) => p.theme.colors.mainTextColor};
//   padding: 0;
//   margin: 0;
// `;

// export const ReadMoreWrapper = styled.div`
//   max-height: 8rem;
//   height: 100%;
//   width: 526px;
// `;

// export const CardItemFeaturesWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.8rem;
// `;

// export const CardItemFeatures = styled.div`
//   border-radius: 100px;
//   padding: 12px 18px;
//   background-color: ${(p) => p.theme.colors.featuresBgColor};
//   background-color: ${(p) => p.theme.colors.mainBgColor};

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.8rem;
// `;

// export const CardItemFeaturesIcon = styled.span`
//   font-size: 2rem;
//   color: ${(p) => p.theme.colors.mainTextColor};
// `;

// export const CardItemFeaturesText = styled.span`
//   font-family: ${interFont};
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 1.25;
//   text-align: center;
//   color: ${(p) => p.theme.colors.mainTextColor};
// `;

// export const CardItemTextDescr = styled.p`
//   color: ${(p) => p.theme.colors.mainTextColorLowOp};

//   font-family: ${interFont};
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 1.5;
//   color: ${(p) => p.theme.colors.secondaryTextColor};

//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// export const CardBtn = styled.button`
//   border: none;
//   outline: none;
//   background: none;
//   border-radius: 20rem;
//   padding: 16px 40px;
//   width: 166px;
//   height: 56px;

//   font-family: ${interFont};
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 1.5;
//   letter-spacing: -0.01em;
//   color: ${(p) => p.theme.colors.white};
//   transition: var(--primary-transition);

//   background-color: ${(p) => p.theme.colors.accentColor};

//   &:hover {
//     background-color: ${(p) => p.theme.colors.accentColorHover};
//     cursor: pointer;
//   }
// `;

// export const HeartIconWrapper = styled.div`
//   position: absolute;
//   top: 1.2rem;
//   right: 1.2rem;
// `;

// export const EmptyHeartIcon = styled(FaRegHeart)`
//   font-size: 2rem;
//   color: ${(p) => p.theme.colors.emptyHeart};

//   transition: all var(--primary-transition);

//   &:hover {
//     color: ${(p) => p.theme.colors.accentColor};
//     cursor: pointer;
//   }
// `;

// export const FavoriteHeartIcon = styled(FaHeart)`
//   font-size: 2rem;
//   color: ${(p) => p.theme.colors.accentColor};

//   transition: all var(--primary-transition);

//   &:hover {
//     color: ${(p) => p.theme.colors.accentColorHover};
//     cursor: pointer;
//   }
// `;
