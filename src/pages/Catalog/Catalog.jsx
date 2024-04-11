import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFiltersCars } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import { fetchCars } from "../../redux/cars/operations";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CarItems from "../../components/CarItems/CarItems";
import { CarsMenu, CatalogContainer, NoMatchCar } from "./Catalog.styled";
import Filter from "../../components/Filter/Filter";
import LoadMore from "../../components/LoadMore/LoadMore";
import { v4 as uuid } from "uuid";

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

  const carsPerPage = 12;

  const totalCarsOnServer = 52;

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
      const brandCondition =
        !filteredCars.brand || item.make === filteredCars.brand;
      const priceCondition =
        parseInt(item.rentalPrice.replace("$", "")) <= filteredCars.price;
      const mileageCondition =
        !filteredCars.mileageRange ||
        (item.mileage >= filteredCars.mileageRange.min &&
          item.mileage <= filteredCars.mileageRange.max);

      return brandCondition && priceCondition && mileageCondition;
    });

    return filtered;
  }

  const visibleCars = filteredByCars();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Cruise Wheels - Explore the Catalog</title>
          <meta
            name="description"
            content="Browse through our diverse catalog of stylish and comfortable cars at Cruise Wheels. Find the perfect vehicle for your next adventure and experience the joy of premium car rentals."
          />
          <meta
            name="keywords"
            content="car catalog, car rental, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"
          />
        </Helmet>
      </HelmetProvider>
      <CatalogContainer>
        <Filter
          handlePage={handlePage}
          setDisplayedCars={setDisplayedCars}
          setFilteredSearch={setFilteredSearch}
        />
        <CarsMenu>
          {visibleCars && visibleCars?.length === 0 && filteredSearch ? (
            <NoMatchCar>No matching cars found</NoMatchCar>
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
        {filteredSearch && visibleCars.length > 12 && (
          <LoadMore onLoadMoreClick={onLoadMoreClick} />
        )}
        {!filteredSearch && showLoadBtn && (
          <LoadMore onLoadMoreClick={onLoadMoreClick} />
        )}
      </CatalogContainer>
    </>
  );
}

export default Catalog;
