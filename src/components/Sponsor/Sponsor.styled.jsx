import styled from "styled-components";

export const SponsorWrapper = styled.section`
  margin: 4.8rem auto;
  padding: 2.4rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;

  @media (min-width: 385px) {
    flex-direction: row;
    gap: 1.2rem;
    flex-wrap: wrap;
  }

  @media (min-width: 802px) {
    flex-direction: row;
    gap: 4.8rem;
    flex-wrap: wrap;
  }

  @media (min-width: 910px) {
    flex-direction: row;
    gap: 0;
    flex-wrap: nowrap;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 4.8rem;
  }
`;

export const SponsorImg = styled.img`
  width: 18rem;
  height: auto;
  object-fit: cover;

  @media (min-width: 1440px) {
    width: 22rem;
  }
`;
