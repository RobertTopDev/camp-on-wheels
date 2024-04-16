import { useEffect, useState } from "react";
import defaultCar from "../../../public/images/default-car.jpg";
import ModalPopUp from "../Modal/Modal";
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
  CartItemTitleModel,
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
} from "./CarItems.styled";
import { IoLocationOutline } from "react-icons/io5";
import ReadMoreText from "../ReadMore/ReadMore";
import { IoPeopleOutline } from "react-icons/io5";
import { TbGasStation } from "react-icons/tb";
import { LiaBedSolid } from "react-icons/lia";
import { MdOutlineAir } from "react-icons/md";
import { TbAutomaticGearbox, TbToolsKitchen2 } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";

/* eslint-disable react/prop-types */
function CarItems({ items }) {
  const [favorite, setFavorite] = useState(false);

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
        <CarImg
          src={items.gallery[0] ? items.gallery[0] : defaultCar}
          alt={items.name}
        />
        <HeartIconWrapper onClick={() => handleFavoriteBtn(items._id)}>
          {favorite ? <FavoriteHeartIcon /> : <EmptyHeartIcon />}
        </HeartIconWrapper>
      </CarImgWrapper>
      <CardInfoContainer>
        <CardInfoWrapper>
          <div>
            <CartItemTitleWrap>
              <CartItemTitle>{items.name}</CartItemTitle>
              <CartItemPrice>${items.price}</CartItemPrice>
            </CartItemTitleWrap>
            <CardItemRatingWrapper>
              <CardItemRatingWrap>
                <CardItemStarRatingWrap>
                  <CardItemStarIcon>
                    <FaStar />
                  </CardItemStarIcon>
                  <CardItemRating>{items.rating}</CardItemRating>
                </CardItemStarRatingWrap>
                <CardItemRating>
                  ({items.reviews.length} Reviews)
                </CardItemRating>
              </CardItemRatingWrap>
              <CardItemLocationWrapper>
                <CardItemLocationIcon>
                  <IoLocationOutline />
                </CardItemLocationIcon>
                <CardItemLocation>{items.location}</CardItemLocation>
              </CardItemLocationWrapper>
            </CardItemRatingWrapper>
          </div>
          <ReadMoreWrapper>
            <CardItemTextDescr>{items.description}</CardItemTextDescr>
          </ReadMoreWrapper>
          <CardItemFeaturesWrapper>
            <CardItemFeatures>
              <CardItemFeaturesIcon>
                <IoPeopleOutline />
              </CardItemFeaturesIcon>
              <CardItemFeaturesText>{items.adults} adults</CardItemFeaturesText>
            </CardItemFeatures>
            <CardItemFeatures>
              <CardItemFeaturesIcon>
                <TbAutomaticGearbox />
              </CardItemFeaturesIcon>
              <CardItemFeaturesText>{items.transmission}</CardItemFeaturesText>
            </CardItemFeatures>
            <CardItemFeatures>
              <CardItemFeaturesIcon>
                <TbGasStation />
              </CardItemFeaturesIcon>
              <CardItemFeaturesText>{items.engine}</CardItemFeaturesText>
            </CardItemFeatures>
            <CardItemFeatures>
              <CardItemFeaturesIcon>
                <TbToolsKitchen2 />
              </CardItemFeaturesIcon>
              <CardItemFeaturesText>Kitchen</CardItemFeaturesText>
            </CardItemFeatures>
            <CardItemFeatures>
              <CardItemFeaturesText>
                <CardItemFeaturesIcon>
                  <LiaBedSolid />
                </CardItemFeaturesIcon>
                {items.details.beds} beds
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
