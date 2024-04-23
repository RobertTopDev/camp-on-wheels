import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFiltersCars } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import { fetchCars } from "../../redux/cars/operations";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CarItems from "../../components/CarItems/CarItems";
import Filter from "../../components/Filter/Filter";
import LoadMore from "../../components/LoadMore/LoadMore";
import { v4 as uuid } from "uuid";
import splitAndCapitalize from "../../helpers/camelCase";
import {
  CarsMenu,
  CarsMenuWrapper,
  CatalogContainer,
  NoMatchCar,
} from "./Catalog.styled";

function Catalog() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const [filteredSearch, setFilteredSearch] = useState(false);
  const [page, setPage] = useState(1);
  const [showLoadBtn, setShowLoadBtn] = useState(true);
  const [displayedCars, setDisplayedCars] = useState([]);

  const filteredCars = useSelector(selectFiltersCars);

  function onLoadMoreClick() {
    setPage((page) => page + 1);
  }

  function handlePage() {
    setPage(1);
  }

  const carsPerPage = 4;

  const totalCarsOnServer = 20;

  const totalCars = Math.ceil(totalCarsOnServer / carsPerPage);

  useEffect(() => {
    async function fetchedData() {
      try {
        setShowLoadBtn(page < totalCars);

        await dispatch(fetchCars(page)).unwrap();
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchedData();
  }, [dispatch, page, totalCars]);

  function filteredByCars() {
    const filtered = displayedCars.filter((item) => {
      const locationFilter =
        !filteredCars.location || item.location === filteredCars.location;
      const typeFilter =
        !filteredCars.type ||
        splitAndCapitalize(item.form) === filteredCars.type;
      return locationFilter && typeFilter;
    });

    return filtered;
  }

  const visibleCars = filteredByCars();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Camp On Wheels - Explore the Catalog</title>
          <meta
            name="description"
            content="Browse through our diverse catalog of stylish and comfortable camping cars at Camp On Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium camping car rentals."
          />
          <meta
            name="keywords"
            content="car catalog, camping car rental, stylish cars, comfortable journeys, Camp On Wheels, premium rental services"
          />
        </Helmet>
      </HelmetProvider>
      <CatalogContainer>
        <Filter
          handlePage={handlePage}
          setDisplayedCars={setDisplayedCars}
          setFilteredSearch={setFilteredSearch}
        />
        <CarsMenuWrapper>
          <CarsMenu>
            {visibleCars && visibleCars?.length === 0 && filteredSearch ? (
              <NoMatchCar>
                No camper cars match your search filters. Please try adjusting
                your filters or exploring other options.
              </NoMatchCar>
            ) : visibleCars?.length > 0 ? (
              visibleCars?.map((items) => {
                return <CarItems key={uuid()} items={items} />;
              })
            ) : (
              cars?.map((items) => {
                return <CarItems key={uuid()} items={items} />;
              })
            )}
          </CarsMenu>
          {!filteredSearch && showLoadBtn && (
            <LoadMore onLoadMoreClick={onLoadMoreClick} />
          )}
        </CarsMenuWrapper>
      </CatalogContainer>
    </>
  );
}

export default Catalog;
