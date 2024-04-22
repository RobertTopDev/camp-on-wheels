import styled from "styled-components";
import { interFont } from "../fonts";

export const CustomDatePickerWrapper = styled.div`
  .react-datepicker {
    display: flex;
    justify-content: center;
    border: 1px solid ${(p) => p.theme.colors.inputBgColor};
    background-color: ${(p) => p.theme.colors.calendarBgColor};
    border-radius: 8px;
    padding: 18px;
    transition: var(--primary-transition);

    position: absolute;
    top: -50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .react-datepicker-wrapper input {
    position: relative;
    background: none;
    outline: none;
    border: none;
    background-color: ${(p) => p.theme.colors.mainBgColor};
    color: ${(p) => p.theme.colors.inputTextColor};
    font-family: ${interFont};
    font-weight: 400;
    font-size: 14px;
    line-height: 1.25;
    transition: var(--primary-transition);
    caret-color: transparent;
    pointer-events: none;
    width: 18rem;

    &::placeholder {
      font-family: ${interFont};
      font-weight: 400;
      font-size: 14px;
      line-height: 1.25;
      color: ${(p) => p.theme.colors.inputTextColor};
    }

    @media (min-width: 400px) {
      font-size: 16px;
      width: 20.5rem;
    }
  }

  .react-datepicker-popper {
    position: absolute;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
    will-change: transform;
    transition: var(--primary-transition);
  }

  .react-datepicker__header {
    border-bottom: none;
    background-color: transparent;
  }

  .react-datepicker__month {
    margin: 0.4em 0;
  }

  .react-datepicker__day--outside-month {
    color: ${(p) => p.theme.colors.inputTextColor} !important;
    transition: var(--primary-transition);
  }

  .react-datepicker__month-container {
  }

  .react-datepicker__current-month {
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.02em;
    border-bottom: 1px solid ${(p) => p.theme.colors.inputTextColor};
    padding-bottom: 14px;
    color: ${(p) => p.theme.colors.mainTextColor};
    transition: var(--primary-transition);
  }

  .react-datepicker__week {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    column-gap: 10px;
  }

  .react-datepicker__day-names {
    font-weight: 600;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    transition: var(--primary-transition);
  }

  .react-datepicker__day-name {
    color: ${(p) => p.theme.colors.secondaryTextColor};
    transition: var(--primary-transition);
  }

  .react-datepicker__day {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.02em;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 0;
    transition: var(--primary-transition);
    color: ${(p) => p.theme.colors.mainTextColor};
  }

  .react-datepicker__day--today {
    border: 1px solid ${(p) => p.theme.colors.accentColor};
    border-radius: 50%;
    margin: 0;
    transition: var(--primary-transition);
  }

  .react-datepicker__day--selected {
    background-color: ${(p) => p.theme.colors.accentColor};
    color: ${(p) => p.theme.colors.white};
    transition: var(--primary-transition);
  }

  .react-datepicker__day:hover {
    background-color: grey;
    color: ${(p) => p.theme.colors.white};
    border-radius: 50%;
    transition: var(--primary-transition);
  }

  .react-datepicker__day--keyboard-selected {
    background-color: transparent;
  }

  .react-datepicker__navigation {
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 20px;
    padding: 0;
    border: none;
    z-index: 1;
    height: 32px;
    width: 32px;
    text-indent: -999em;
    overflow: hidden;
  }

  .react-datepicker__navigation-icon::before {
    border-color: ${(p) => p.theme.colors.secondaryTextColor};
    transition: var(--primary-transition);
  }
`;
