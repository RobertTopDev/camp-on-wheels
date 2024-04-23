import styled from "styled-components";
import { interFont, primaryFont } from "../fonts";
import { IoLocationOutline } from "react-icons/io5";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin: 0 auto;
  max-width: 362px;
  width: 100%;

  @media (min-width: 448px) {
    width: 362px;
  }

  @media (min-width: 1440px) {
    gap: 6.4rem;
  }
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const FiltersLine = styled.div`
  background-color: ${(p) => p.theme.colors.filtersLine};
  width: 100%;
  height: 2px;
  margin: 1rem 0 1rem;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
`;

export const ResetBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;

  font-family: ${interFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.mainTextColor};
  text-decoration: underline;
  transition: var(--primary-transition);
  border: 0.1px solid transparent;

  &:hover {
    cursor: pointer;
    border: 0.1px solid ${(p) => p.theme.colors.accentColorHover};
  }
`;

export const SelectInput = styled.div`
  position: relative;
  border: none;
  outline: none;
  background: none;
  border-radius: 14px;
  background-color: ${(p) => p.theme.colors.inputBgColor};
  padding: 1.4rem 1.8rem;
  height: 4.8rem;
  width: 100%;
  max-width: 360px;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${(p) => p.theme.colors.mainTextColor};
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.inputBgColorHover};
  }
`;

export const SelectedOption = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 27.2rem;
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: 0 4px 36px 0 rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 1.4rem;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.colors.mainTextColorVeryLowOp};
    border-radius: 8px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: transparent;
  }

  padding: 1.4rem 1.8rem;
  background-color: ${(p) => p.theme.colors.headerBgColor};

  z-index: 5;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const SelectedOptionText = styled.span`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.mainTextColorVeryLowOp};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.colors.mainTextColor};
  }
`;

export const SelectedFilterEquipmentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.8rem;
  max-width: 362px;
  width: 100%;
  justify-content: center;

  @media (min-width: 410px) {
    justify-content: start;
  }

  @media (min-width: 768px) {
    width: 362px;
  }
`;

export const SelectedFilterTypeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.8rem;
  max-width: 362px;
  width: 100%;
  justify-content: center;

  @media (min-width: 410px) {
    justify-content: start;
  }
`;

export const SelectedFilterEquipmentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const SelectedFilterEquipmentTitle = styled.h3`
  font-family: ${interFont};
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const SelectedFilterEquipmentSubTitle = styled.span`
  font-family: ${interFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.secondaryTextColor};
`;

export const SelectedFilterEquipmentText = styled.span`
  font-family: ${interFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const SelectedFilterEquipmentIcon = styled.span`
  font-size: 3.2rem;
  color: ${(p) => p.theme.colors.mainTextColor};
  pointer-events: none;
`;

export const SelectedFilterEquipment = styled.div`
  border: 1px solid
    ${(p) =>
      p?.$active
        ? p.theme.colors.accentColor
        : p.theme.colors.borderFilterItem};
  border-radius: 10px;
  padding: 17px 18px;
  width: 114px;
  height: 95px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  transition: all var(--primary-transition);

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }
`;

export const FormLabel = styled.label`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
`;

export const ErrorMessage = styled.p`
  font-size: 1.6rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const LocationIcon = styled(IoLocationOutline)`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.mainTextColor};

  @media (min-width: 768px) {
    right: 0;
  }

  @media (min-width: 1440px) {
    right: 1.2rem;
  }
`;

export const FormSearchBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;

  font-family: ${interFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
  transition: var(--primary-transition);

  background-color: ${(p) => p.theme.colors.accentColor};

  &:hover {
    background-color: ${(p) => p.theme.colors.accentColorHover};
    cursor: pointer;
  }
`;

export const FormButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 354px) {
    flex-direction: row;
  }
`;
