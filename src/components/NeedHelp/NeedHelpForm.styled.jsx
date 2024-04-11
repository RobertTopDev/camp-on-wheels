import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { primaryFont } from "../fonts";

export const NeedHelpFormWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem;
`;

export const NeedHelpTitle = styled.h3`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.33333;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const NeedHelpInput = styled.input`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  border-radius: 0.6rem;
  background-color: ${(p) => p.theme.colors.headerBgColor};
  padding: 1.2rem;

  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.11111;
  color: ${(p) => p.theme.colors.mainTextColor};

  transition: all var(--primary-transition);

  &:hover {
    /* background-color: ${(p) => p.theme.colors.inputBgColorHover}; */
  }

  &::placeholder {
    font-family: ${primaryFont};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.11111;
    color: ${(p) => p.theme.colors.mainTextColor};
  }

  &:focus {
    outline: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export const NeedHelpText = styled.textarea`
  border: none;
  outline: none;
  background: none;
  resize: none;
  width: 100%;
  border-radius: 0.6rem;
  background-color: ${(p) => p.theme.colors.headerBgColor};
  padding: 1.2rem;

  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.11111;
  color: ${(p) => p.theme.colors.mainTextColor};

  transition: all var(--primary-transition);

  &:hover {
    /* background-color: ${(p) => p.theme.colors.inputBgColorHover}; */
  }

  &::placeholder {
    font-family: ${primaryFont};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.11111;
    color: ${(p) => p.theme.colors.mainTextColor};
  }

  &:focus {
    outline: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export const NeedHelpBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  border-radius: 1.2rem;
  padding: 1.4rem 4.4rem;
  background-color: ${(p) => p.theme.colors.accentColor};
  color: ${(p) => p.theme.colors.white};
  transition: all var(--primary-transition);
  font-size: 1.4rem;

  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.accentColorHover};
  }

  @media (min-width: 768px) {
    padding: 1.4rem 3.2rem;
  }

  @media (min-width: 840px) {
    padding: 1.4rem 4.4rem;
  }
`;

export const NeedHelpCloseModal = styled(IoClose)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.mainTextColor};
  position: absolute;
  right: 1.4rem;
  top: 1.4rem;

  transition: all var(--primary-transition);

  &:hover {
    transform: rotate(90deg);
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }
`;
