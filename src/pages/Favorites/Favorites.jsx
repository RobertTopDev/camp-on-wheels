import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllCars } from "../../redux/cars/operations";
import { v4 as uuid } from "uuid";
import CarItems from "../../components/CarItems/CarItems";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  FavoritesContainer,
  FavoritesEmptyContainer,
  FavoritesEmptyText,
  FavoritesEmptyTextWrapper,
  FavoritesEmptyTitle,
  FavoritesEmptyWrapper,
  FavoritesMenu,
} from "./Favorites.styled";

function Favorites() {
  const [favoriteCars, setFavoriteCars] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function getFavoriteCars() {
      try {
        const allCars = await dispatch(fetchAllCars());

        const favoritesFromStorage =
          JSON.parse(localStorage.getItem("favorites")) || [];

        const favoriteCarsList = allCars.payload.filter((car) =>
          favoritesFromStorage.includes(car.id)
        );

        if (favoriteCarsList.length === 0) {
          localStorage.removeItem("favorites");

          // navigate("/rental-car/");
        }

        setFavoriteCars(favoriteCarsList);
      } catch (err) {
        console.log(err.message);
      }
    }

    getFavoriteCars();
  }, [dispatch, navigate]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Cruise Wheels - Your Favorite Cars</title>
          <meta
            name="description"
            content="Discover and explore your favorite cars with Cruise Wheels. View and rent stylish and comfortable vehicles that make every journey unforgettable."
          />
          <meta
            name="keywords"
            content="favorite cars, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"
          />
        </Helmet>
      </HelmetProvider>
      {favoriteCars.length === 0 ? (
        <FavoritesEmptyContainer>
          <FavoritesEmptyWrapper>
            <FavoritesEmptyTextWrapper>
              <FavoritesEmptyTitle>No Favorite Cars Found!</FavoritesEmptyTitle>
              <FavoritesEmptyText>
                It looks like you haven't added any cars to your favorites yet.
                Explore Cruise Wheels' main page to find stylish and comfy rides
                for your next journey!
              </FavoritesEmptyText>
            </FavoritesEmptyTextWrapper>
          </FavoritesEmptyWrapper>
        </FavoritesEmptyContainer>
      ) : (
        <FavoritesContainer>
          <FavoritesMenu>
            {favoriteCars?.map((items) => {
              return <CarItems key={uuid()} items={items} />;
            })}
          </FavoritesMenu>
        </FavoritesContainer>
      )}
    </>
  );
}

export default Favorites;
