import {
  SubscribeButton,
  SubscribeContainer,
  SubscribeInput,
  SubscribeInputWrapper,
  SubscribeText,
  SubscribeTitle,
  SubscribeTitleWrapper,
  SubscribeWrapper,
} from "./Subscribe.styled";

function Subscribe() {
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
        <SubscribeInputWrapper>
          <SubscribeInput
            type="text"
            name="email"
            placeholder="Enter your Email"
          />
          <SubscribeButton>Subscribe</SubscribeButton>
        </SubscribeInputWrapper>
      </SubscribeWrapper>
    </SubscribeContainer>
  );
}

export default Subscribe;
