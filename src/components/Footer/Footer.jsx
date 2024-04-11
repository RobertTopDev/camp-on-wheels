import Tooltip from "@mui/material/Tooltip";
import Logo from "../Logo/Logo";
import { FaPhone } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import SocialIcons from "../SocialIcons/SocialIcons";
import {
  FooterContainer,
  FooterMainWrapper,
  FooterInfoWrapper,
  FooterInfoText,
  FooterContactBtnWrapper,
  FooterCallBtn,
  FooterEmailBtn,
  FooterCallIcon,
  FooterEmailIcon,
  FooterInfoLink,
  FooterLinkWrapper,
  FooterSloganText,
  FooterContactAddressContainer,
  FooterContactIconLink,
  FooterContactLinkText,
  FooterContactIcons,
  FooterContactBtnsWrapper,
  FooterSloganTextAccent,
  LogoWrapper,
} from "./Footer.styled";

function Footer() {
  return (
    <FooterContainer>
      <FooterMainWrapper>
        <LogoWrapper>
          <Logo />
          <SocialIcons />
        </LogoWrapper>
        <FooterSloganText>
          Explore with Confidence:{" "}
          <FooterSloganTextAccent>Cruise Wheels</FooterSloganTextAccent> – Your
          Gateway to Stylish and Comfortable Adventures.
        </FooterSloganText>
      </FooterMainWrapper>
      <FooterContactBtnsWrapper>
        <FooterContactAddressContainer>
          <Tooltip title="Call Me" arrow placement="right">
            <FooterContactIconLink
              href="tel:+17734141884"
              aria-label="Call +1 (773) 414-1884"
              rel="noopener noreferrer"
            >
              <FooterContactIcons>
                <FaPhone color="#28a745" />
              </FooterContactIcons>
              <FooterContactLinkText>+1 (773) 414-1884</FooterContactLinkText>
            </FooterContactIconLink>
          </Tooltip>
          <Tooltip title="Email Me" arrow placement="right">
            <FooterContactIconLink
              href="mailto:alexsmagin1@gmail.com"
              aria-label="Email address alexsmagin1@gmail.com"
            >
              <FooterContactIcons>
                <GrMailOption color="#007bff" />
              </FooterContactIcons>
              <FooterContactLinkText>
                alexsmagin1@gmail.com
              </FooterContactLinkText>
            </FooterContactIconLink>
          </Tooltip>
          <Tooltip title="My Location" arrow placement="right">
            <FooterContactIconLink
              href="https://www.google.com/maps?q=Chicago,IL,USA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Google Maps for the location in Chicago, IL, USA"
            >
              <FooterContactIcons>
                <IoLocationOutline color="#dc3545" />
              </FooterContactIcons>
              <FooterContactLinkText>Chicago, IL, USA</FooterContactLinkText>
            </FooterContactIconLink>
          </Tooltip>
        </FooterContactAddressContainer>
        <FooterContactBtnWrapper>
          <FooterCallBtn
            href="tel:+17734141884"
            aria-label="Call our customer support"
            title="Call our customer support"
          >
            Call Us
            <FooterCallIcon />
          </FooterCallBtn>
          <FooterEmailBtn
            href="mailto:alexsmagin1@gmail.com"
            aria-label="Send us an email"
            title="Send us an email"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Us
            <FooterEmailIcon />
          </FooterEmailBtn>
        </FooterContactBtnWrapper>
      </FooterContactBtnsWrapper>
      <FooterInfoWrapper>
        <FooterInfoText>
          Alex Smagin &copy;Rental Car <span>{new Date().getFullYear()}</span>.
          All rights reserved.
        </FooterInfoText>
        <FooterLinkWrapper>
          <FooterInfoLink to="privacy">Privacy Policy</FooterInfoLink>
          <span>/</span>
          <FooterInfoLink to="terms">Terms of Service</FooterInfoLink>
        </FooterLinkWrapper>
      </FooterInfoWrapper>
    </FooterContainer>
  );
}

export default Footer;
