import { IoIosQuote } from "react-icons/io";
import StarRating from "../StarRating/StarRating";
import {
  ClientsContainer,
  ClientsTopWrapper,
  ClientsText,
  ClientsImgWrapper,
  ClientsName,
  QuoteIcon,
} from "./Clients.styled";

const ClientSlider = (props) => {
  // eslint-disable-next-line react/prop-types
  const { name, position, img_url, stars, rentalExperience } = props.item;
  return (
    <ClientsContainer>
      <ClientsTopWrapper>
        <ClientsText>{rentalExperience}</ClientsText>
        <QuoteIcon>
          <IoIosQuote />
        </QuoteIcon>
      </ClientsTopWrapper>
      <StarRating stars={stars} />
      <ClientsImgWrapper>
        <img src={img_url} alt={name} />
        <div>
          <ClientsName>{name}</ClientsName>
          <ClientsText>{position}</ClientsText>
        </div>
      </ClientsImgWrapper>
    </ClientsContainer>
  );
};

export default ClientSlider;
