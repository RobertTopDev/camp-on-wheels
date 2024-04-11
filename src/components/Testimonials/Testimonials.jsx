import { useRef } from "react";
import Slider from "react-slick";
import Clients from "./Clients";
import clientsData from "../../../clients.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  TestimonialsContainer,
  TestimonialsAll,
  TestimonialsSubTitle,
  TestimonialsTitle,
  ButtonsWrapper,
} from "./Testimonials.styled";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  const arrowRef = useRef(null);

  return (
    <TestimonialsContainer>
      <Slide direction="left">
        <TestimonialsSubTitle>TESTIMONIALS</TestimonialsSubTitle>
        <TestimonialsTitle>WHAT CLIENTS SAY</TestimonialsTitle>
      </Slide>
      <TestimonialsAll>
        <Slider ref={arrowRef} {...settings}>
          {clientsData.map((item, i) => (
            <Clients item={item} key={i} />
          ))}
        </Slider>
        <ButtonsWrapper>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </ButtonsWrapper>
      </TestimonialsAll>
    </TestimonialsContainer>
  );
};

export default Testimonials;
