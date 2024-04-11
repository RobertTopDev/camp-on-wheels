import { useEffect, useState } from "react";
import defaultCar from "../../../public/images/default-car.jpg";
import ModalPopUp from "../Modal/Modal";
import {
  CarImg,
  CarItem,
  CartItemTitleWrapper,
  CartItemTitle,
  CartItemYear,
  CartItemTitleWrap,
  CardInfoWrapper,
  CardInfoContainer,
  CardItemTextDescr,
  EmptyHeartIcon,
  FavoriteHeartIcon,
  CarImgWrapper,
  HeartIconWrapper,
  CartItemTitleModel,
} from "./CarItems.styled";

/* eslint-disable react/prop-types */
function CarItems({ items }) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const isFavorite = favoritesFromStorage.includes(items.id);

    setFavorite(isFavorite);
  }, [items.id]);

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
          src={
            items.img
              ? items.img
              : items.photoLink
              ? items.photoLink
              : defaultCar
          }
          alt={items.make}
        />
        <HeartIconWrapper onClick={() => handleFavoriteBtn(items.id)}>
          {favorite ? <FavoriteHeartIcon /> : <EmptyHeartIcon />}
        </HeartIconWrapper>
      </CarImgWrapper>
      <CardInfoContainer>
        <CardInfoWrapper>
          <CartItemTitleWrapper>
            <CartItemTitleWrap>
              <CartItemTitle>
                {items.make}{" "}
                <CartItemTitleModel>{items.model}</CartItemTitleModel>
                <CartItemYear>, {items.year}</CartItemYear>
              </CartItemTitle>
            </CartItemTitleWrap>
            <CartItemYear>{items.rentalPrice}</CartItemYear>
          </CartItemTitleWrapper>
          <div>
            <div>
              <CardItemTextDescr>{items.address}</CardItemTextDescr>
              <CardItemTextDescr> | {items.rentalCompany}</CardItemTextDescr>
            </div>
            <div>
              <CardItemTextDescr>{items.type}</CardItemTextDescr>
              <CardItemTextDescr> | {items.model}</CardItemTextDescr>
              <CardItemTextDescr>
                {" "}
                | miles: {parseInt(items.mileage).toLocaleString()}
              </CardItemTextDescr>
            </div>
          </div>
        </CardInfoWrapper>
        <ModalPopUp items={items} />
      </CardInfoContainer>
    </CarItem>
  );
}

export default CarItems;
