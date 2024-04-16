import {
  AboutContainer,
  AboutMenu,
  AboutItem,
  AboutTitle,
  AboutText,
  IconTime,
  IconWrapper,
  IconLocation,
  IconTrust,
  IconKey,
} from "./About.styled";

function About() {
  return (
    <AboutContainer>
      <AboutMenu>
        <AboutItem>
          <IconWrapper>
            <IconTime />
          </IconWrapper>
          <AboutTitle>Explore Nature</AboutTitle>
          <AboutText>
            Discover the great outdoors with our wide range of campers. Perfect
            for adventurous souls seeking a unique getaway.
          </AboutText>
        </AboutItem>
        <AboutItem>
          <IconWrapper>
            <IconLocation />
          </IconWrapper>
          <AboutTitle>Comfort on Wheels</AboutTitle>
          <AboutText>
            Experience the convenience of a home away from home. Our campers are
            equipped with all the amenities you need for a comfortable trip.
          </AboutText>
        </AboutItem>
        <AboutItem>
          <IconWrapper>
            <IconTrust />
          </IconWrapper>
          <AboutTitle>Flexible Rentals</AboutTitle>
          <AboutText>
            Whether you're planning a weekend escape or a month-long adventure,
            we offer flexible rental options to suit your needs.
          </AboutText>
        </AboutItem>
        <AboutItem>
          <IconWrapper>
            <IconKey />
          </IconWrapper>
          <AboutTitle>Expert Support</AboutTitle>
          <AboutText>
            Our team is dedicated to ensuring you have a seamless and enjoyable
            camping experience. From booking to drop-off, we're here to assist
            you every step of the way.
          </AboutText>
        </AboutItem>
      </AboutMenu>
    </AboutContainer>
  );
}

export default About;
