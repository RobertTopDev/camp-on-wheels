import styled from "styled-components";
import { interFont } from "../fonts";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export const ModalDiv = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  border-radius: 2rem;
  padding: 1.2rem;
  max-width: 982px;
  max-height: 720px;
  width: 90%;
  height: 90%;
  background-color: ${(p) => p.theme.colors.mainBgColor};

  overflow-y: scroll;
  scroll-behavior: smooth;

  @media (min-width: 365px) {
    padding: 2.4rem;
  }

  @media (min-width: 768px) {
    padding: 4rem;
    /* width: 100%; */
    /* height: 100%; */
  }
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-top: 2.4rem;

  @media (min-width: 768px) {
    padding-top: 0;
  }
`;

export const ModalWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  position: relative;
`;

export const ModalImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 1.6rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    /* flex-wrap: nowrap; */
  }
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: contain;
  object-position: 75%;
  object-fit: cover;

  @media (min-width: 768px) {
    max-width: 290px;
    max-height: 310px;
  }

  @media (min-width: 1092px) {
    width: 290px;
    height: 310px;
  }
`;

export const CloseModal = styled(IoClose)`
  font-size: 3.2rem;
  color: ${(p) => p.theme.colors.mainTextColor};
  position: absolute;
  right: 0;
  top: 0;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }

  @media (min-width: 768px) {
    top: 0;
  }
`;

export const ModalBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  position: relative;

  @media (min-width: 768px) {
    gap: 4rem;
  }
`;

export const ModalFeaturesBtnLine = styled.div`
  display: ${(p) => (p?.$active ? "block" : "none")};
  position: absolute;
  bottom: -2.4rem;
  left: 0;
  height: 5px;
  width: 100%;
  background-color: #e44848;
`;

export const ModalReviewsBtnLine = styled.div`
  display: ${(p) => (p?.$active ? "block" : "none")};
  position: absolute;
  bottom: -2.4rem;
  left: 0;
  height: 5px;
  width: 100%;
  background-color: #e44848;
`;

export const ModalFeaturesBtnIconUp = styled(MdOutlineKeyboardArrowUp)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const ModalFeaturesBtnIconDown = styled(MdOutlineKeyboardArrowDown)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const ModalFeaturesBtn = styled.button`
  position: relative;
  font-family: ${interFont};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.mainTextColor};
  transition: var(--primary-transition);
  border: none;
  outline: none;
  background: none;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:hover {
    cursor: pointer;
  }

  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export const ModalReviewsBtn = styled.button`
  position: relative;
  font-family: ${interFont};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.mainTextColor};
  transition: var(--primary-transition);
  border: none;
  outline: none;
  background: none;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:hover {
    cursor: pointer;
  }

  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export const ModalItemFeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.4rem;
`;

export const ModalItemReviewsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const ModalItemReviewsItems = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const ModalItemReviewsImg = styled.img`
  border-radius: 60rem;
  width: 60px;
  height: 60px;
`;

export const ModalItemReviewsImgWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const ModalItemReviewsTitle = styled.h4`
  font-family: ${interFont};
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33333;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const ModalItemReviewsText = styled.p`
  font-family: ${interFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.secondaryTextColor};
`;

export const ModalItemFeaturesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const ModalFeatures = styled.div`
  border-radius: 100px;
  padding: 12px 18px;
  height: 44px;
  background-color: ${(p) => p.theme.colors.headerBgColor};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

export const ModalDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const ModalDetailsTitle = styled.h3`
  font-family: ${interFont};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const ModalDetailsLine = styled.div`
  background-color: rgba(16, 24, 40, 0.1);
  width: 100%;
  height: 1px;
`;

export const ModalDetailsFeatures = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalDetailsFeaturesText = styled.span`
  font-family: ${interFont};
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  text-align: center;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const ModalFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: start;
  }
`;

export const ModalForm = styled.form`
  background-color: ${(p) => p.theme.colors.headerBgColor};
  border-radius: 10px;
  padding: 24px;
  max-width: 448px;
  max-height: 532px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const ModalFormTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

export const ModalFormTitle = styled.h3`
  font-family: ${interFont};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const ModalFormSubTitle = styled.p`
  font-family: ${interFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.secondaryTextColor};
`;

export const ModalFormInput = styled.input`
  background: none;
  outline: none;
  border: none;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  border-radius: 10px;
  padding: 18px;
  max-width: 400px;
  max-height: 56px;
  width: 100%;
  height: 100%;
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${interFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  &::placeholder {
    font-family: ${interFont};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${(p) => p.theme.colors.inputTextColor};
  }
`;

export const ModalTextArea = styled.textarea`
  background: none;
  outline: none;
  border: none;
  resize: none;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  border-radius: 10px;
  padding: 18px;
  max-width: 400px;
  max-height: 114px;
  width: 100%;
  height: 100%;
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${interFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  &::placeholder {
    font-family: ${interFont};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${(p) => p.theme.colors.inputTextColor};
  }
`;

export const ModalCalendar = styled.div`
  background: none;
  outline: none;
  border: none;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  border-radius: 10px;
  padding: 18px;
  max-width: 400px;
  max-height: 56px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

export const ModalCalendarIcon = styled.span`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.mainTextColor};

  &:hover {
    cursor: pointer;
  }
`;

export const ModalFormBtn = styled.button`
  background: none;
  outline: none;
  border: none;
  align-self: center;
  margin-top: 1rem;
  background-color: ${(p) => p.theme.colors.accentColor};
  border-radius: 200px;
  padding: 16px 60px;
  width: 100%;
  height: 56px;
  font-family: ${interFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
  transition: var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.accentColorHover};
    cursor: pointer;
  }

  @media (min-width: 380px) {
    width: 160px;
  }

  @media (min-width: 460px) {
    align-self: self-start;
  }
`;
