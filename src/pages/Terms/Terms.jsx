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
} from "../Privacy/Privacy.styled";

// eslint-disable-next-line react/prop-types
function Terms({ scrollToTop }) {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Camp On Wheels - Terms and Conditions</title>
          <meta
            name="description"
            content="Review Camp On Wheels' Terms and Conditions for a comprehensive understanding of our services and user agreements. Navigate confidently with clarity on our terms for camping car rentals and adventure experiences."
          />
          <meta
            name="keywords"
            content="terms and conditions, user agreements, Camp On Wheels, car rental terms, adventure experiences"
          />
        </Helmet>
      </HelmetProvider>

      <PrivacyContainer>
        <PrivacyWrapper>
          <PrivacyTextWrapper>
            <PrivacyTitleWrapper>
              <PrivacyTitle>Terms of Service</PrivacyTitle>
            </PrivacyTitleWrapper>
            <PrivacyRulesWrapper>
              <PrivacySubTitle>1. Acceptance of Terms:</PrivacySubTitle>
              <PrivacySubText>
                By using our website, you agree to these Terms of Service. If
                you do not agree, please do not use our site.
              </PrivacySubText>
              <PrivacySubTitle>2. Use of Content:</PrivacySubTitle>
              <PrivacySubText>
                You may use the content for personal, non-commercial purposes.
                Reproduction or distribution without permission is prohibited.
              </PrivacySubText>
              <PrivacySubTitle>3. User Conduct:</PrivacySubTitle>
              <PrivacySubText>
                You agree not to engage in any activity that may interfere with
                the operation of the website or violate applicable laws.
              </PrivacySubText>
              <PrivacySubTitle>4. Limitation of Liability:</PrivacySubTitle>
              <PrivacySubText>
                We are not liable for any direct, indirect, incidental, or
                consequential damages arising from your use of the website.
              </PrivacySubText>
              <PrivacySubTitle>5. Disclaimer of Warranties:</PrivacySubTitle>
              <PrivacySubText>
                The information, content, and materials on this website are
                provided "as is" and without warranties of any kind, either
                express or implied. We make no warranties, expressed or implied,
                regarding the accuracy, completeness, reliability, suitability,
                or availability of the website or the information, products,
                services, or related graphics contained on the website for any
                purpose. To the fullest extent permissible under applicable law,
                we disclaim all warranties, express or implied, including but
                not limited to implied warranties of merchantability, or other
                violation of rights. We do not warrant that the website will be
                uninterrupted or error-free, that defects will be corrected, or
                that the website or the server that makes it available are free
                of viruses or other harmful components. Any reliance you place
                on such information is strictly at your own risk. We shall not
                be liable for any direct, indirect, incidental, consequential,
                or punitive damages arising out of your access to or use of the
                website.
              </PrivacySubText>
              <PrivacySubTitle>6. Changes to Terms:</PrivacySubTitle>
              <PrivacySubText>
                We may modify these terms at any time. Continued use of the
                website constitutes acceptance of the modified terms.
              </PrivacySubText>
              <PrivacySubTitle>7. Governing Law:</PrivacySubTitle>
              <PrivacySubText>
                This agreement and any dispute arising out of or in connection
                with this agreement shall be governed by and construed in
                accordance with the laws of the State of Illinois, without
                regard to its conflict of law principles. Any legal action or
                proceeding arising under or in connection with this agreement
                shall be brought exclusively in the state or federal courts
                located within the State of Illinois, County of Cook, and both
                parties consent to the personal jurisdiction of such courts.
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
                If you have any questions or concerns about these Terms of
                Service, please contact us at{" "}
                <PrivacyText style={{ display: "inline-block" }}>
                  <a
                    href="mailto:alexsmagin1@gmail.com"
                    aria-label="Send us an email"
                    title="Send us an email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    alexsmagin1@gmail.com
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

export default Terms;
