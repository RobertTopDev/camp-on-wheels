import { Helmet, HelmetProvider } from "react-helmet-async";
import About from "../../components/About/About";
import Testimonials from "../../components/Testimonials/Testimonials";
import {
  HeroWrapper,
  HomeContainer,
  HeroTextWrapper,
  CatalogBtn,
  HeroTitle,
  HeroText,
  HeroTitleSpan,
} from "./Home.styled";

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Cruise Wheels - Home Page</title>
          <meta
            name="description"
            content="Unlock boundless journeys with Cruise Wheels. Rent a car in style, comfort, and confidence. Explore extraordinary adventures with our premium car rental services."
          />
          <meta
            name="keywords"
            content="car rental, adventure travel, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"
          />
        </Helmet>
      </HelmetProvider>
      <HomeContainer>
        <HeroWrapper>
          <HeroTextWrapper>
            <HeroTitle>
              Drive Your Dreams: Explore the World with{" "}
              <HeroTitleSpan>Cruise Wheels</HeroTitleSpan> Rental Cars
            </HeroTitle>
            <HeroText>
              Welcome to Cruise Wheels, where every road leads to adventure.
              CruiseWheels is more than just a rental – it's a gateway to
              experiences beyond the ordinary. Cruise in style, comfort, and
              confidence, making every mile a story. Your unforgettable
              adventure begins with CruiseWheels – Your Drive, Your Experience.
            </HeroText>
            <div style={{ textAlign: "end" }}>
              <CatalogBtn to="catalog">View our Catalog</CatalogBtn>
            </div>
          </HeroTextWrapper>
        </HeroWrapper>
        <About />
        <Testimonials />
      </HomeContainer>
    </>
  );
}

export default Home;
