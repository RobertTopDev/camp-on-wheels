/* eslint-disable react/prop-types */
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import defaultCar from "../../../public/images/default-car.jpg";
import defaultUser from "../../../public/images/default_user.jpg";
import ReadMoreText from "../ReadMore/ReadMore";
import { ModalBottomline } from "../ReadMore/ReadMore.styled";
import StarRating from "../StarRating/StarRating";
import CustomDatePicker from "../Calendar/Calendar";
import emailRegex from "../../regex/emailRegex";
import { commonToastOptions } from "../../helpers/toastOptions";
import { formatPrice } from "../../helpers/formatPrice";
import { fetchEmailDB } from "../../services/emailPost";
import emailjs from "@emailjs/browser";
import capitalizeText from "../../helpers/capitalize";
import { FcCalendar } from "react-icons/fc";
import { LiaBedSolid } from "react-icons/lia";
import { LuDisc3 } from "react-icons/lu";
import { BiRadio } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import { MdOutlineMicrowave, MdOutlineAir } from "react-icons/md";
import {
  TbAutomaticGearbox,
  TbGasStation,
  TbToolsKitchen2,
} from "react-icons/tb";
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
import {
  ModalImg,
  ModalWrapper,
  ModalTitleWrapper,
  ModalDiv,
  CloseModal,
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
  ModalFormTitleWrapper,
  ModalItemReviewsWrapper,
  ModalItemReviewsTitle,
  ModalItemReviewsText,
  ModalItemReviewsItems,
  ModalItemReviewsImg,
  ModalItemReviewsImgWrapper,
  ModalReviewsBtn,
  ModalReviewsBtnLine,
  ModalFeaturesBtnIconUp,
  ModalFeaturesBtnIconDown,
} from "./Modal.styled";

const { VITE_EMAIL_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_API_KEY } =
  import.meta.env;

function ModalPopUp({ items }) {
  const form = useRef();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [featuresIsOpen, setFeaturesIsOpen] = useState(false);
  const [reviewsIsOpen, setReviewsIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const datePickerRef = useRef(null);
  const [startDate, setStartDate] = useState(new Date());

  const getDateFormat = (date) => {
    const options = {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString(undefined, options);

    const [weekday, month, day, year] = formattedDate.split(" ");

    return `${weekday} ${month} ${day} ${year}`;
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      date: getDateFormat(selectedDate),
      message: e.target.message.value,
    };

    const validName = data.name.length > 0;
    const validEmail = emailRegex.test(data.email);
    const validMessage = data.message.length > 0;

    if (!(validEmail && validMessage && validName)) {
      if (!validMessage && data.email.length === 0) {
        toast.warning(
          "Please fill in all required fields!",
          commonToastOptions
        );
      } else if (!validEmail) {
        toast.warning(
          "Please enter a valid email address!",
          commonToastOptions
        );
      } else if (!validName) {
        toast.warning("Please provide your name.", commonToastOptions);
      } else {
        toast.warning("Please enter a message!", commonToastOptions);
      }
      return;
    }

    try {
      await fetchEmailDB(data);
      await emailjs.sendForm(
        VITE_EMAIL_ID,
        VITE_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: VITE_EMAIL_API_KEY,
        }
      );

      toast.success(
        `Thank you for booking with us! Your reservation for ${data.date} has been received. Our team will be in touch with you shortly to confirm the details.`,
        commonToastOptions
      );
      e.target.name.value = "";
      e.target.email.value = "";
      e.target.message.value = "";
      setSelectedDate(null);
      setStartDate(new Date());
    } catch (error) {
      toast.error(
        "Error submitting request. Please try again later.",
        commonToastOptions
      );
    }
  };

  const openDatePicker = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setFeaturesIsOpen(false);
    setReviewsIsOpen(false);
  }
  function featuresOpen() {
    setFeaturesIsOpen((prevState) => !prevState);
    setReviewsIsOpen(false);
  }

  function reviewsOpen() {
    setReviewsIsOpen((prevState) => !prevState);
    setFeaturesIsOpen(false);
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
            <CartItemPrice>${formatPrice(items.price)}</CartItemPrice>
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
            <ModalFeaturesBtn onClick={featuresOpen}>
              Features
              {featuresIsOpen ? (
                <ModalFeaturesBtnIconUp />
              ) : (
                <ModalFeaturesBtnIconDown />
              )}
              <ModalFeaturesBtnLine $active={featuresIsOpen} />
            </ModalFeaturesBtn>
            <ModalReviewsBtn onClick={reviewsOpen}>
              Reviews
              {reviewsIsOpen ? (
                <ModalFeaturesBtnIconUp />
              ) : (
                <ModalFeaturesBtnIconDown />
              )}
              <ModalReviewsBtnLine $active={reviewsIsOpen} />
            </ModalReviewsBtn>
          </ModalBtnWrapper>
          <ModalBottomline />
          {featuresIsOpen && (
            <ModalFormWrapper>
              <ModalItemFeaturesContainer>
                <ModalItemFeaturesWrapper>
                  <ModalFeatures>
                    <CardItemFeaturesIcon>
                      <IoPeopleOutline />
                    </CardItemFeaturesIcon>
                    <CardItemFeaturesText>
                      {items.adults} Adults
                    </CardItemFeaturesText>
                  </ModalFeatures>
                  <ModalFeatures>
                    <CardItemFeaturesIcon>
                      <TbAutomaticGearbox />
                    </CardItemFeaturesIcon>
                    <CardItemFeaturesText>
                      {capitalizeText(items.transmission)}
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
                    <CardItemFeaturesText>
                      {capitalizeText(items.engine)}
                    </CardItemFeaturesText>
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
                      {items?.details?.beds} Beds
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
                      {items?.details?.hob} Hob
                    </CardItemFeaturesText>
                  </ModalFeatures>
                </ModalItemFeaturesWrapper>
                <ModalDetailsWrapper>
                  <ModalDetailsTitle>Vehicle details</ModalDetailsTitle>
                  <ModalDetailsLine />
                  <ModalDetailsFeatures>
                    <ModalDetailsFeaturesText>Form</ModalDetailsFeaturesText>
                    <ModalDetailsFeaturesText>
                      {capitalizeText(items?.form)}
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
              <ModalForm ref={form} onSubmit={handleSubmitForm}>
                <ModalFormTitleWrapper>
                  <ModalFormTitle>Book your campervan now</ModalFormTitle>
                  <ModalFormSubTitle>
                    Stay connected! We are always ready to help you.
                  </ModalFormSubTitle>
                </ModalFormTitleWrapper>
                <ModalFormInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <ModalFormInput
                  type="text"
                  name="email"
                  placeholder="Email"
                  required
                />
                <ModalCalendar>
                  <CustomDatePicker
                    setSelectedDate={setSelectedDate}
                    openDatePicker={openDatePicker}
                    datePickerRef={datePickerRef}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    name="date"
                  />
                  <ModalCalendarIcon onClick={openDatePicker}>
                    <FcCalendar />
                  </ModalCalendarIcon>
                </ModalCalendar>
                <ModalTextArea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Comment"
                  required
                ></ModalTextArea>
                <ModalFormBtn type="submit">Send</ModalFormBtn>
              </ModalForm>
            </ModalFormWrapper>
          )}
          {reviewsIsOpen && (
            <ModalFormWrapper>
              <ModalItemReviewsWrapper>
                {items?.reviews.map((item) => (
                  <ModalItemReviewsItems key={item?.reviewer_name}>
                    <ModalItemReviewsImgWrapper>
                      <ModalItemReviewsImg
                        src={defaultUser}
                        alt={item?.reviewer_name}
                      />
                      <div>
                        <ModalItemReviewsTitle>
                          {item?.reviewer_name}
                        </ModalItemReviewsTitle>
                        <StarRating stars={item?.reviewer_rating} />
                      </div>
                    </ModalItemReviewsImgWrapper>
                    <ModalItemReviewsText>{item?.comment}</ModalItemReviewsText>
                  </ModalItemReviewsItems>
                ))}
              </ModalItemReviewsWrapper>
              <ModalForm ref={form} onSubmit={handleSubmitForm}>
                <ModalFormTitleWrapper>
                  <ModalFormTitle>Book your campervan now</ModalFormTitle>
                  <ModalFormSubTitle>
                    Stay connected! We are always ready to help you.
                  </ModalFormSubTitle>
                </ModalFormTitleWrapper>
                <ModalFormInput type="text" name="name" placeholder="Name" />
                <ModalFormInput type="text" name="email" placeholder="Email" />
                <ModalCalendar>
                  <CustomDatePicker
                    setSelectedDate={setSelectedDate}
                    openDatePicker={openDatePicker}
                    datePickerRef={datePickerRef}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    name="date"
                  />
                  <ModalCalendarIcon onClick={openDatePicker}>
                    <FcCalendar />
                  </ModalCalendarIcon>
                </ModalCalendar>
                <ModalTextArea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Comment"
                ></ModalTextArea>
                <ModalFormBtn type="submit">Send</ModalFormBtn>
              </ModalForm>
            </ModalFormWrapper>
          )}
        </ModalWrapper>
      </ModalDiv>
    </>
  );
}

export default ModalPopUp;
