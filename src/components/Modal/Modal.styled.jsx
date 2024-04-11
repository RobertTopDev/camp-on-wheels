import styled from "styled-components";
import { primaryFont } from "../fonts";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

export const ModalDiv = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  border-radius: 14px;
  padding: 1.4rem;
  max-width: 54rem;
  width: 95%;
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

export const ModalWrapper = styled.div`
  margin: 0 auto;
`;

export const ModalImg = styled.img`
  /* max-width: 46rem; */
  width: 100%;
  height: auto;
  border-top-right-radius: 1.4rem;
  border-top-left-radius: 1.4rem;
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

export const ModalTitleWrapper = styled.div`
  display: flex;
  align-items: center;
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
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42857;
  color: ${(p) => p.theme.colors.mainTextColor};
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

export const ModalBtn = styled.a`
  display: inline-block;
  background-color: ${(p) => p.theme.colors.accentColor};
  color: ${(p) => p.theme.colors.white};
  padding: 1.2rem 5rem;
  border-radius: 1.4rem;
  min-width: 168px;

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.accentColorHover};
    cursor: pointer;
  }
`;

export const CloseModal = styled(IoClose)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.mainTextColor};
  position: absolute;
  right: 2.4rem;
  top: 2.4rem;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }

  @media (min-width: 365px) {
    right: 0rem;
  }

  @media (min-width: 768px) {
    right: 1rem;
    top: 4rem;
  }
`;
