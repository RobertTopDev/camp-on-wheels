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
          Savor the Journey, Sleep Under the Stars with{" "}
          <FooterSloganTextAccent>Camp On Wheels</FooterSloganTextAccent>
        </FooterSloganText>
      </FooterMainWrapper>
      <FooterContactBtnsWrapper>
        <FooterContactAddressContainer>
          <Tooltip title="Call Me" arrow placement="right">
            <FooterContactIconLink
              href="tel:+3727120593"
              aria-label="Call +372 7120593"
              rel="noopener noreferrer"
            >
              <FooterContactIcons>
                <FaPhone color="#28a745" />
              </FooterContactIcons>
              <FooterContactLinkText>+372 7120593</FooterContactLinkText>
            </FooterContactIconLink>
          </Tooltip>
          <Tooltip title="Email Me" arrow placement="right">
            <FooterContactIconLink
              href="mailto:roberttanelriegler@gmail.com"
              aria-label="Email address roberttanelriegler@gmail.com"
            >
              <FooterContactIcons>
                <GrMailOption color="#007bff" />
              </FooterContactIcons>
              <FooterContactLinkText>
                roberttanelriegler@gmail.com
              </FooterContactLinkText>
            </FooterContactIconLink>
          </Tooltip>
          <Tooltip title="My Location" arrow placement="right">
            <FooterContactIconLink
              href="https://www.google.com/maps?q=Tallinn,Estonia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Google Maps for the location in Tallinn, Estonia"
            >
              <FooterContactIcons>
                <IoLocationOutline color="#dc3545" />
              </FooterContactIcons>
              <FooterContactLinkText>Tallinn, Estonia</FooterContactLinkText>
            </FooterContactIconLink>
          </Tooltip>
        </FooterContactAddressContainer>
        <FooterContactBtnWrapper>
          <FooterCallBtn
            href="tel:+3727120593"
            aria-label="Call our customer support"
            title="Call our customer support"
          >
            Call Us
            <FooterCallIcon />
          </FooterCallBtn>
          <FooterEmailBtn
            href="mailto:roberttanelriegler@gmail.com"
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
          Robert Tanel Riegler &copy;Camp On Wheels{" "}
          <span>{new Date().getFullYear()}</span>. All rights reserved.
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
