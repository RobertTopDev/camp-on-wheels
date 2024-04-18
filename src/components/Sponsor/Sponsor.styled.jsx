import styled from "styled-components";

export const SponsorWrapper = styled.section`
  margin: 4.8rem auto;
  padding: 2.4rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;
`;

export const SponsorWrap = styled.div`
  padding: 1.2rem;
  border-radius: 20rem;
  background-color: ${(p) => p.theme.colors.mainBgColorReverseVeryLowOp};
`;

export const SponsorImg = styled.img`
  width: 18rem;
  height: auto;
  object-fit: cover;
`;
