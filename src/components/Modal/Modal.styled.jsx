import styled from "styled-components";
import { interFont, primaryFont } from "../fonts";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

export const ModalDiv = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  border-radius: 2rem;
  padding: 4rem;
  max-width: 982px;
  width: 100%;
  max-height: 720px;
  height: 100%;
  background-color: ${(p) => p.theme.colors.mainBgColor};

  overflow-y: scroll;
  scroll-behavior: smooth;

  @media (min-width: 365px) {
    padding: 2.4rem;
  }

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
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
  gap: 1.6rem;
`;

export const ModalImg = styled.img`
  /* max-width: 46rem; */
  width: 100%;
  height: auto;
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: contain;
  object-position: 75%;
  object-fit: cover;
`;

export const ModalTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-top: 1.4rem;
`;

export const ModalTitleDescrContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const ModalTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ModalTitle = styled.h3`
  display: inline-block;
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.33333;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const ModalTitleModel = styled.span`
  color: ${(p) => p.theme.colors.accentColor};
`;

export const ModalTitleText = styled.span`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.33333;
  color: #121417;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const ModalDescr = styled.span`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
`;

export const ModalDescrText = styled.p`
  font-family: ${interFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.secondaryTextColor};
`;

export const ModalConditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  position: relative;
`;

export const ModalConditionWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

export const ModalCondition = styled.div`
  border-radius: 35px;
  padding: 7px 14px;
  background-color: ${(p) => p.theme.colors.headerBgColor};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42857;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const ModalConditionAddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.8rem;

  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ModalConditionAdd = styled.span`
  border-radius: 35px;
  padding: 7px 14px;
  background-color: ${(p) => p.theme.colors.headerBgColor};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42857;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const ModalConditionAccentColor = styled.span`
  color: ${(p) => p.theme.colors.accentColor};
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

  /* @media (min-width: 365px) {
    right: 0rem;
  }

  @media (min-width: 768px) {
    right: 1rem;
    top: 4rem;
  } */
`;

export const ModalBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  position: relative;
`;

export const ModalFeaturesBtn = styled.button`
  font-family: ${interFont};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.mainTextColor};

  border: none;
  outline: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

export const ModalFeaturesBtnLine = styled.div`
  position: absolute;
  bottom: -2.4rem;
  left: ${(p) => (p?.$content === "Features" ? "0" : "12.2rem")};
  height: 5px;
  width: 8.6rem;
  background-color: #e44848;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;
`;

export const ModalForm = styled.form`
  background-color: ${(p) => p.theme.colors.headerBgColor};
  border-radius: 10px;
  padding: 24px;
  width: 448px;
  height: 532px;

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
  width: 400px;
  height: 56px;
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
  width: 400px;

  height: 114px;
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
  width: 400px;
  height: 56px;

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

export const ModalCalendarText = styled.span`
  font-family: ${interFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.inputTextColor};
`;

export const ModalFormBtn = styled.button`
  background: none;
  outline: none;
  border: none;
  margin-top: 1rem;
  background-color: ${(p) => p.theme.colors.accentColor};
  border-radius: 200px;
  padding: 16px 60px;
  width: 160px;
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
`;
