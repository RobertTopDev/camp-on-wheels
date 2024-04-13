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
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    // Fetch all cars
    fetch("https://65d7f3bd27d9a3bc1d7bed08.mockapi.io/api/cars")
      .then((response) => response.json())
      .then((data) => {
        // Find the car by ID
        const carIdToFind = 911582;
        const foundCar = data.find((car) => car.id === carIdToFind);

        if (foundCar) {
          // Handle the retrieved car data here
          console.log(foundCar);
        } else {
          console.log(`Car with ID ${carIdToFind} not found.`);
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch request
        console.error(error);
      });
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Camp On Wheels - Home Page</title>
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
              Discover the Freedom of Mobile Exploration with{" "}
              <HeroTitleSpan>Camp On Wheels</HeroTitleSpan>
            </HeroTitle>
            <HeroText>
              Embark on unforgettable journeys with CampOnWheels, where every
              road leads to new adventures. With our fleet of comfortable and
              fully-equipped camping cars, you can roam wherever your wanderlust
              takes you, and unwind amidst nature's embrace. Start your journey
              today and experience the thrill of the open road, without
              sacrificing the comforts of home.
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
