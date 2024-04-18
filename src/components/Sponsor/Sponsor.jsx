import { SponsorImg, SponsorWrap, SponsorWrapper } from "./Sponsor.styled";

function Sponsor() {
  return (
    <SponsorWrapper>
      <SponsorWrap>
        <SponsorImg
          src="images/sponsor2.png"
          alt="sponsor1"
          width="20rem"
          height="20rem"
        />
      </SponsorWrap>
      <SponsorWrap>
        <SponsorImg
          src="images/sponsor.png"
          alt="sponsor1"
          width="20rem"
          height="20rem"
        />
      </SponsorWrap>
      <SponsorWrap>
        <SponsorImg
          src="images/sponsor1.png"
          alt="sponsor1"
          width="20rem"
          height="20rem"
        />
      </SponsorWrap>
      <SponsorWrap>
        <SponsorImg
          src="images/sponsor3.png"
          alt="sponsor1"
          width="20rem"
          height="20rem"
        />
      </SponsorWrap>
      <SponsorWrap>
        <SponsorImg
          src="images/sponsor4.png"
          alt="sponsor1"
          width="20rem"
          height="20rem"
        />
      </SponsorWrap>
    </SponsorWrapper>
  );
}

export default Sponsor;
