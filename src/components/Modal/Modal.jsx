/* eslint-disable react/prop-types */
import {
  CardBtn,
  CardItemLocation,
  CardItemLocationIcon,
  CardItemLocationWrapper,
  CardItemRating,
  CardItemRatingWrap,
  CardItemRatingWrapper,
  CardItemStarIcon,
  CardItemStarRatingWrap,
  CartItemPrice,
  CartItemTitle,
  CartItemTitleWrap,
} from "../CarItems/CarItems.styled";
import { useState } from "react";
import defaultCar from "../../../public/images/default-car.jpg";
import { FaStar } from "react-icons/fa6";
import {
  ModalImg,
  ModalTitle,
  ModalTitleText,
  ModalWrapper,
  ModalTitleWrapper,
  ModalTitleContainer,
  ModalTitleDescrContainer,
  ModalTextContainer,
  ModalDescr,
  ModalDiv,
  ModalDescrText,
  ModalCondition,
  ModalConditionWrapper,
  ModalConditionContainer,
  ModalConditionAdd,
  ModalConditionAccentColor,
  CloseModal,
  ModalTitleModel,
  ModalImgContainer,
  ModalBtnWrapper,
  ModalFeaturesBtn,
  ModalFormWrapper,
  ModalForm,
  ModalFormTitle,
  ModalFormSubTitle,
  ModalFormInput,
  ModalTextArea,
  ModalCalendar,
  ModalCalendarText,
  ModalFormBtn,
} from "./Modal.styled";
import { IoLocationOutline } from "react-icons/io5";
import ReadMoreText from "../ReadMore/ReadMore";
import { ModalBottomline } from "../ReadMore/ReadMore.styled";

function ModalPopUp({ items }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <CardBtn type="button" onClick={openModal}>
        Show more
      </CardBtn>
      <ModalDiv
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
        contentLabel="Example Modal"
      >
        <ModalWrapper>
          <CloseModal onClick={closeModal} />
          <ModalTitleWrapper>
            <CartItemTitleWrap>
              <CartItemTitle>{items.name}</CartItemTitle>
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
            <CartItemPrice>${items.price}</CartItemPrice>
          </ModalTitleWrapper>
          <ModalImgContainer>
            {items.gallery.map((img) => (
              <ModalImg
                key={items.name}
                src={img ? img : defaultCar}
                alt={items.name}
              />
            ))}
          </ModalImgContainer>
          <ReadMoreText collapsedNumWords={60}>
            {items.description}
          </ReadMoreText>
          <ModalBtnWrapper>
            <ModalFeaturesBtn>Features</ModalFeaturesBtn>
            <ModalFeaturesBtn>Reviews</ModalFeaturesBtn>
          </ModalBtnWrapper>
          <ModalBottomline />

          <ModalFormWrapper>
            <div></div>
            <ModalForm>
              <ModalFormTitle>Book your campervan now</ModalFormTitle>
              <ModalFormSubTitle>
                Stay connected! We are always ready to help you.
              </ModalFormSubTitle>
              <ModalFormInput type="text" name="name" placeholder="Name" />
              <ModalFormInput type="text" name="email" placeholder="Email" />
              <ModalCalendar>
                <ModalCalendarText>Booking date</ModalCalendarText>
              </ModalCalendar>
              <ModalTextArea
                name="Message"
                cols="30"
                rows="10"
                placeholder="Comment"
              ></ModalTextArea>
              <ModalFormBtn>Send</ModalFormBtn>
            </ModalForm>
          </ModalFormWrapper>
        </ModalWrapper>
      </ModalDiv>
    </>
  );
}

export default ModalPopUp;
