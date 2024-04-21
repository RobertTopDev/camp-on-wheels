import styled from "styled-components";
import { primaryFont } from "../../components/fonts";

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  align-items: start;
  padding: 6.4rem 2.4rem;

  @media (min-width: 920px) {
    flex-direction: row;
    gap: 3.2rem;
  }
`;

export const CarsMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
`;

export const CarsMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  height: 100%;
  width: 100%;

  position: relative;
`;

export const NoMatchCar = styled.li`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.mainTextColor};
`;
