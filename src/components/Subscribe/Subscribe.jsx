import emailjs from "@emailjs/browser";
import { fetchEmailDB } from "../../services/emailPost";
import { toast } from "react-toastify";
import { commonToastOptions } from "../../helpers/toastOptions";
import {
  RoadImg,
  SubscribeButton,
  SubscribeContainer,
  SubscribeInput,
  SubscribeInputWrapper,
  SubscribeText,
  SubscribeTitle,
  SubscribeTitleWrapper,
  SubscribeWrapper,
} from "./Subscribe.styled";
import { useRef } from "react";
import emailRegex from "../../regex/emailRegex";

const { VITE_EMAIL_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_API_KEY } =
  import.meta.env;

function Subscribe() {
  const form = useRef();

  const handleSubmitEmail = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();

    const validEmail = emailRegex.test(email);

    if (email.length === 0) {
      toast.warning(
        "Email field cannot be empty. Please enter your email address.",
        commonToastOptions
      );
      return;
    }

    if (!validEmail) {
      toast.warning(
        "The email address you entered is not valid. Please check and try again.",
        commonToastOptions
      );
      return;
    }

    try {
      await fetchEmailDB(email);
      await emailjs.sendForm(
        VITE_EMAIL_ID,
        VITE_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: VITE_EMAIL_API_KEY,
        }
      );

      toast.success(
        "Successfully subscribed! We'll keep you updated with regular deals and fresh trip ideas. Thank you!",
        commonToastOptions
      );
      e.target.email.value = "";
    } catch (error) {
      toast.error(
        "Error subscribing. Please try again later.",
        commonToastOptions
      );
    }
  };

  return (
    <SubscribeContainer>
      <SubscribeWrapper>
        <SubscribeTitleWrapper>
          <SubscribeTitle>
            MORE TRIPS.
            <br /> EXCLUSIVE DEALS.
          </SubscribeTitle>
          <SubscribeText>
            Receive fresh trip ideas, curated itineraries, and exclusive deals
            delivered to your inbox every month.
          </SubscribeText>
        </SubscribeTitleWrapper>
        <SubscribeInputWrapper ref={form} onSubmit={handleSubmitEmail}>
          <SubscribeInput
            type="text"
            name="email"
            placeholder="Enter your Email"
          />
          <SubscribeButton type="submit">Subscribe</SubscribeButton>
        </SubscribeInputWrapper>
        <RoadImg />
      </SubscribeWrapper>
    </SubscribeContainer>
  );
}

export default Subscribe;
