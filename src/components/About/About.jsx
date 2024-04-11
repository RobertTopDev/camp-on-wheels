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
          <AboutTitle>24/7 Customer Service</AboutTitle>
          <AboutText>
            Our customer service team is available around the clock to assist
            you with your rental car needs.
          </AboutText>
        </AboutItem>
        <AboutItem>
          <IconWrapper>
            <IconLocation />
          </IconWrapper>
          <AboutTitle>Convenient Locations</AboutTitle>
          <AboutText>
            We have rental car locations conveniently situated all around the US
            for easy access.
          </AboutText>
        </AboutItem>
        <AboutItem>
          <IconWrapper>
            <IconTrust />
          </IconWrapper>
          <AboutTitle>Trusted Since 1980</AboutTitle>
          <AboutText>
            With a rich history dating back to 1980, we take pride in being a
            trusted name in the rental car industry.
          </AboutText>
        </AboutItem>
        <AboutItem>
          <IconWrapper>
            <IconKey />
          </IconWrapper>
          <AboutTitle>Flexible Rental Options</AboutTitle>
          <AboutText>
            Choose from a variety of rental options to fit your needs, whether
            it's a short trip or a long-term rental.
          </AboutText>
        </AboutItem>
      </AboutMenu>
    </AboutContainer>
  );
}

export default About;
