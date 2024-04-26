import { useEffect, useState } from "react";
import defaultCar from "../../../public/images/default-car.jpg";
import ModalPopUp from "../Modal/Modal";
import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { TbGasStation } from "react-icons/tb";
import { LiaBedSolid } from "react-icons/lia";
import { MdOutlineAir } from "react-icons/md";
import { TbAutomaticGearbox, TbToolsKitchen2 } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";
import { formatPrice } from "../../helpers/formatPrice";
import capitalizeText from "../../helpers/capitalize";
import {
  CarImg,
  CarItem,
  CartItemTitle,
  CartItemTitleWrap,
  CardInfoWrapper,
  CardInfoContainer,
  CardItemTextDescr,
  EmptyHeartIcon,
  FavoriteHeartIcon,
  CarImgWrapper,
  HeartIconWrapper,
  CartItemPrice,
  CardItemRating,
  CardItemRatingWrapper,
  CardItemLocation,
  CardItemLocationIcon,
  CardItemLocationWrapper,
  ReadMoreWrapper,
  CardItemFeatures,
  CardItemFeaturesWrapper,
  CardItemFeaturesText,
  CardItemFeaturesIcon,
  CardItemStarIcon,
  CardItemStarRatingWrap,
  CardItemRatingWrap,
  CarImgDots,
  CarImgDotsWrapper,
  CarImgDotsSecond,
  CarImgDotsThird,
} from "./CarItems.styled";

/* eslint-disable react/prop-types */
function CarItems({ items }) {
  const [favorite, setFavorite] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const isFavorite = favoritesFromStorage.includes(items._id);

    setFavorite(isFavorite);
  }, [items._id]);

  function handleFavoriteBtn(id) {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const index = favoritesFromStorage.indexOf(id);

    if (index !== -1) {
      favoritesFromStorage.splice(index, 1);
    } else {
      favoritesFromStorage.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favoritesFromStorage));

    setFavorite((prevState) => !prevState);
  }

  return (
    <CarItem>
      <CarImgWrapper>
        <CarImgDotsWrapper>
          <CarImgDots
            onClick={() => setGalleryIndex(0)}
            $active={galleryIndex === 0 ? true : false}
          />
          <CarImgDotsSecond
            onClick={() => setGalleryIndex(1)}
            $active={galleryIndex === 1 ? true : false}
          />
          <CarImgDotsThird
            onClick={() => setGalleryIndex(2)}
            $active={galleryIndex === 2 ? true : false}
          />
        </CarImgDotsWrapper>
        <CarImg
          src={
            items.gallery[galleryIndex]
              ? items.gallery[galleryIndex]
              : defaultCar
          }
          alt={items.name}
          loading="lazy"
        />
        <HeartIconWrapper onClick={() => handleFavoriteBtn(items._id)}>
          {favorite ? <FavoriteHeartIcon /> : <EmptyHeartIcon />}
        </HeartIconWrapper>
      </CarImgWrapper>
      <CardInfoContainer>
        <CardInfoWrapper>
          <div>
            <CartItemTitleWrap>
              <CartItemTitle>{items?.name}</CartItemTitle>
              <CartItemPrice>${formatPrice(items?.price)}</CartItemPrice>
            </CartItemTitleWrap>
            <CardItemRatingWrapper>
              <CardItemRatingWrap>
                <CardItemStarRatingWrap>
                  <CardItemStarIcon>
                    <FaStar />
                  </CardItemStarIcon>
                  <CardItemRating>{items?.rating}</CardItemRating>
                </CardItemStarRatingWrap>
                <CardItemRating>
                  ({items?.reviews.length} Reviews)
                </CardItemRating>
              </CardItemRatingWrap>
              <CardItemLocationWrapper>
                <CardItemLocationIcon>
                  <IoLocationOutline />
                </CardItemLocationIcon>
                <CardItemLocation>{items?.location}</CardItemLocation>
              </CardItemLocationWrapper>
            </CardItemRatingWrapper>
          </div>
          <ReadMoreWrapper>
            <CardItemTextDescr>{items?.description}</CardItemTextDescr>
          </ReadMoreWrapper>
          <CardItemFeaturesWrapper>
            <CardItemFeatures>
              <CardItemFeaturesIcon>
                <IoPeopleOutline />
              </CardItemFeaturesIcon>
              <CardItemFeaturesText>
                {items?.adults} Adults
              </CardItemFeaturesText>
            </CardItemFeatures>
            <CardItemFeatures>
              <CardItemFeaturesIcon>
                <TbAutomaticGearbox />
              </CardItemFeaturesIcon>
              <CardItemFeaturesText>
                {capitalizeText(items?.transmission)}
              </CardItemFeaturesText>
            </CardItemFeatures>
            <CardItemFeatures>
              <CardItemFeaturesIcon>
                <TbGasStation />
              </CardItemFeaturesIcon>
              <CardItemFeaturesText>
                {capitalizeText(items?.engine)}
              </CardItemFeaturesText>
            </CardItemFeatures>
            <CardItemFeatures>
              <CardItemFeaturesIcon>
                <TbToolsKitchen2 />
              </CardItemFeaturesIcon>
              <CardItemFeaturesText>Kitchen</CardItemFeaturesText>
            </CardItemFeatures>
            <CardItemFeatures>
              <CardItemFeaturesIcon>
                <LiaBedSolid />
              </CardItemFeaturesIcon>
              <CardItemFeaturesText>
                {items?.details?.beds} Beds
              </CardItemFeaturesText>
            </CardItemFeatures>
            <CardItemFeatures>
              <CardItemFeaturesIcon>
                <MdOutlineAir />
              </CardItemFeaturesIcon>
              <CardItemFeaturesText>AC</CardItemFeaturesText>
            </CardItemFeatures>
          </CardItemFeaturesWrapper>
        </CardInfoWrapper>
        <ModalPopUp items={items} />
      </CardInfoContainer>
    </CarItem>
  );
}

export default CarItems;
