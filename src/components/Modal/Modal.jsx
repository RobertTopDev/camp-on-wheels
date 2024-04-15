/* eslint-disable react/prop-types */
import {
  CardBtn,
  CardItemFeaturesIcon,
  CardItemFeaturesText,
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
  ModalFeaturesBtnLine,
  ModalCalendarIcon,
  ModalItemFeaturesContainer,
  ModalItemFeaturesWrapper,
  ModalFeatures,
  ModalDetailsWrapper,
  ModalDetailsTitle,
  ModalDetailsLine,
  ModalDetailsFeatures,
  ModalDetailsFeaturesText,
} from "./Modal.styled";
import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import ReadMoreText from "../ReadMore/ReadMore";
import { ModalBottomline } from "../ReadMore/ReadMore.styled";
import { FcCalendar } from "react-icons/fc";
import {
  TbAutomaticGearbox,
  TbGasStation,
  TbToolsKitchen2,
} from "react-icons/tb";
import { MdOutlineAir } from "react-icons/md";
import { LiaBedSolid } from "react-icons/lia";
import { LuDisc3 } from "react-icons/lu";
import { BiRadio } from "react-icons/bi";
import { MdOutlineMicrowave } from "react-icons/md";

function ModalPopUp({ items }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  console.log(items);

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
            <ModalFeaturesBtnLine />
          </ModalBtnWrapper>
          <ModalBottomline />

          <ModalFormWrapper>
            <ModalItemFeaturesContainer>
              <ModalItemFeaturesWrapper>
                <ModalFeatures>
                  <CardItemFeaturesIcon>
                    <IoPeopleOutline />
                  </CardItemFeaturesIcon>
                  <CardItemFeaturesText>
                    {items.adults} adults
                  </CardItemFeaturesText>
                </ModalFeatures>
                <ModalFeatures>
                  <CardItemFeaturesIcon>
                    <TbAutomaticGearbox />
                  </CardItemFeaturesIcon>
                  <CardItemFeaturesText>
                    {items.transmission}
                  </CardItemFeaturesText>
                </ModalFeatures>
                <ModalFeatures>
                  <CardItemFeaturesIcon>
                    <MdOutlineAir />
                  </CardItemFeaturesIcon>
                  <CardItemFeaturesText>AC</CardItemFeaturesText>
                </ModalFeatures>
                <ModalFeatures>
                  <CardItemFeaturesIcon>
                    <TbGasStation />
                  </CardItemFeaturesIcon>
                  <CardItemFeaturesText>{items.engine}</CardItemFeaturesText>
                </ModalFeatures>
                <ModalFeatures>
                  <CardItemFeaturesIcon>
                    <TbToolsKitchen2 />
                  </CardItemFeaturesIcon>
                  <CardItemFeaturesText>Kitchen</CardItemFeaturesText>
                </ModalFeatures>
                <ModalFeatures>
                  <CardItemFeaturesText>
                    <CardItemFeaturesIcon>
                      <LiaBedSolid />
                    </CardItemFeaturesIcon>{" "}
                    {items?.details?.beds} beds
                  </CardItemFeaturesText>
                </ModalFeatures>
                <ModalFeatures>
                  <CardItemFeaturesText>
                    <CardItemFeaturesIcon>
                      <LuDisc3 />
                    </CardItemFeaturesIcon>{" "}
                    {items?.details?.cd} CD
                  </CardItemFeaturesText>
                </ModalFeatures>
                <ModalFeatures>
                  <CardItemFeaturesText>
                    <CardItemFeaturesIcon>
                      <BiRadio />
                    </CardItemFeaturesIcon>{" "}
                    {items?.details?.radio} Radio
                  </CardItemFeaturesText>
                </ModalFeatures>
                <ModalFeatures>
                  <CardItemFeaturesText>
                    <CardItemFeaturesIcon>
                      <MdOutlineMicrowave />
                    </CardItemFeaturesIcon>{" "}
                    {items?.details?.hob} hob
                  </CardItemFeaturesText>
                </ModalFeatures>
              </ModalItemFeaturesWrapper>
              <ModalDetailsWrapper>
                <ModalDetailsTitle>Vehicle details</ModalDetailsTitle>
                <ModalDetailsLine />
                <ModalDetailsFeatures>
                  <ModalDetailsFeaturesText>Form</ModalDetailsFeaturesText>
                  <ModalDetailsFeaturesText>
                    {items?.form}
                  </ModalDetailsFeaturesText>
                </ModalDetailsFeatures>
                <ModalDetailsFeatures>
                  <ModalDetailsFeaturesText>Length</ModalDetailsFeaturesText>
                  <ModalDetailsFeaturesText>
                    {items?.length}
                  </ModalDetailsFeaturesText>
                </ModalDetailsFeatures>
                <ModalDetailsFeatures>
                  <ModalDetailsFeaturesText>Width</ModalDetailsFeaturesText>
                  <ModalDetailsFeaturesText>
                    {items?.width}
                  </ModalDetailsFeaturesText>
                </ModalDetailsFeatures>
                <ModalDetailsFeatures>
                  <ModalDetailsFeaturesText>Height</ModalDetailsFeaturesText>
                  <ModalDetailsFeaturesText>
                    {items?.height}
                  </ModalDetailsFeaturesText>
                </ModalDetailsFeatures>
                <ModalDetailsFeatures>
                  <ModalDetailsFeaturesText>Tank</ModalDetailsFeaturesText>
                  <ModalDetailsFeaturesText>
                    {items?.tank}
                  </ModalDetailsFeaturesText>
                </ModalDetailsFeatures>
                <ModalDetailsFeatures>
                  <ModalDetailsFeaturesText>
                    Consumption
                  </ModalDetailsFeaturesText>
                  <ModalDetailsFeaturesText>
                    {items?.consumption}
                  </ModalDetailsFeaturesText>
                </ModalDetailsFeatures>
              </ModalDetailsWrapper>
            </ModalItemFeaturesContainer>
            <ModalForm>
              <div>
                <ModalFormTitle>Book your campervan now</ModalFormTitle>
                <ModalFormSubTitle>
                  Stay connected! We are always ready to help you.
                </ModalFormSubTitle>
              </div>
              <ModalFormInput type="text" name="name" placeholder="Name" />
              <ModalFormInput type="text" name="email" placeholder="Email" />
              <ModalCalendar>
                <ModalCalendarText>Booking date</ModalCalendarText>
                <ModalCalendarIcon>
                  <FcCalendar />
                </ModalCalendarIcon>
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
