import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  PrivacyContainer,
  PrivacyRulesWrapper,
  PrivacySubText,
  PrivacySubTitle,
  PrivacyText,
  PrivacyTextWrapper,
  PrivacyTitle,
  PrivacyTitleWrapper,
  PrivacyWrapper,
} from "./Privacy.styled";

// eslint-disable-next-line react/prop-types
function Privacy({ scrollToTop }) {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Camp On Wheels - Explore the Catalog</title>
          <meta
            name="description"
            content="Browse through our diverse catalog of stylish and comfortable camping cars at Camp On Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."
          />
          <meta
            name="keywords"
            content="camping car catalog, camping car rental, stylish cars, comfortable journeys, Camp On Wheels, premium rental services"
          />
        </Helmet>
      </HelmetProvider>
      <PrivacyContainer>
        <PrivacyWrapper>
          <PrivacyTextWrapper>
            <PrivacyTitleWrapper>
              <PrivacyTitle>Privacy Policy</PrivacyTitle>
              <PrivacyText>
                This Privacy Policy describes how Camp On Wheels website
                collects, uses, and shares information when you use our website.
              </PrivacyText>
            </PrivacyTitleWrapper>
            <PrivacyRulesWrapper>
              <PrivacySubTitle>1. Introduction:</PrivacySubTitle>
              <PrivacySubText>
                Thank you for visiting our website. This Privacy Policy outlines
                how we collect, use, disclose, and safeguard your personal
                information.
              </PrivacySubText>
              <PrivacySubTitle>Information We Collect:</PrivacySubTitle>
              <PrivacySubText>
                Personal Information: We may collect your name, contact
                information, and any other information you provide voluntarily.
              </PrivacySubText>
              <PrivacySubText>
                Usage Information: We collect information about how you interact
                with our website, including pages visited and actions taken.
              </PrivacySubText>
              <PrivacySubTitle>3. How We Use Your Information:</PrivacySubTitle>
              <PrivacySubText>
                We use the collected information to provide and improve our
                services, personalize your experience, and communicate with you.
              </PrivacySubText>
              <PrivacySubTitle>4. Information Sharing:</PrivacySubTitle>
              <PrivacySubText>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties. Your privacy is important to us.
              </PrivacySubText>
              <PrivacySubTitle>
                5. Cookies and Tracking Technologies:
              </PrivacySubTitle>
              <PrivacySubText>
                We may use cookies and similar technologies to enhance your
                experience on our website.
              </PrivacySubText>
              <PrivacySubTitle>6. Your Rights:</PrivacySubTitle>
              <PrivacySubText>
                You have the right to access, correct, or delete your personal
                information. Contact us if you have any concerns.
              </PrivacySubText>
              <PrivacySubTitle>
                7. Changes to this Privacy Policy:
              </PrivacySubTitle>
              <PrivacySubText>
                We may update our Privacy Policy. Please review it periodically.
              </PrivacySubText>
              <PrivacySubTitle
                style={{
                  textAlign: "center",
                  fontSize: "2.4rem",
                  marginBottom: "1.2rem",
                  marginTop: "1.2rem",
                }}
              >
                Contact Us:
              </PrivacySubTitle>
              <PrivacySubText>
                If you have any questions or concerns about this Privacy Policy,
                please contact us at{" "}
                <PrivacyText style={{ display: "inline-block" }}>
                  <a
                    href="mailto:roberttanelriegler@gmail.com"
                    aria-label="Send us an email"
                    title="Send us an email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    roberttanelriegler@gmail.com
                  </a>
                </PrivacyText>
              </PrivacySubText>
            </PrivacyRulesWrapper>
          </PrivacyTextWrapper>
        </PrivacyWrapper>
      </PrivacyContainer>
    </>
  );
}

export default Privacy;
