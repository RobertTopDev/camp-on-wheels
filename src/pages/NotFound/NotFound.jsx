import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  NotFoundContainer,
  NotFoundText,
  NotFoundTextWrapper,
  NotFoundTitle,
  NotFoundWrapper,
} from "./NotFound.styled";

// eslint-disable-next-line react/prop-types
function NotFound({ scrollToTop }) {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Camp On Wheels - 404 Not Found</title>
          <meta
            name="description"
            content="Oops! It looks like you've taken a wrong turn. Explore Camp On Wheels' official site and discover stylish and comfortable camping car rentals for your next adventure."
          />
          <meta
            name="keywords"
            content="404 not found, wrong turn, Camp On Wheels, car rentals, adventure"
          />
        </Helmet>
      </HelmetProvider>
      <NotFoundContainer>
        <NotFoundWrapper>
          <NotFoundTextWrapper>
            <NotFoundTitle>404 Oops! Page Not Found!</NotFoundTitle>
            <NotFoundText>
              Uh-oh! It seems like you've stumbled upon a road less traveled,
              and our GPS got a bit confused. Don't worry, getting lost is just
              part of the adventure! While we figure out the best route, why not
              explore Camp On Wheels main page? You're bound to find stylish and
              comfy rides for your next epic journey. Trust us: it's all part of
              the scenic route!
            </NotFoundText>
          </NotFoundTextWrapper>
        </NotFoundWrapper>
      </NotFoundContainer>
    </>
  );
}

export default NotFound;
