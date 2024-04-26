import { SponsorImg, SponsorWrapper } from "./Sponsor.styled";

function Sponsor() {
  return (
    <SponsorWrapper>
      <SponsorImg
        src="images/sponsor2.png"
        alt="sponsor1"
        width="20rem"
        height="20rem"
        loading="lazy"
      />
      <SponsorImg
        src="images/sponsor.png"
        alt="sponsor2"
        width="20rem"
        height="20rem"
        loading="lazy"
      />
      <SponsorImg
        src="images/sponsor1.png"
        alt="sponsor3"
        width="20rem"
        height="20rem"
        loading="lazy"
      />
      <SponsorImg
        src="images/sponsor3.png"
        alt="sponsor4"
        width="20rem"
        height="20rem"
        loading="lazy"
      />
      <SponsorImg
        src="images/sponsor4.png"
        alt="sponsor5"
        width="20rem"
        height="20rem"
        loading="lazy"
      />
    </SponsorWrapper>
  );
}

export default Sponsor;
