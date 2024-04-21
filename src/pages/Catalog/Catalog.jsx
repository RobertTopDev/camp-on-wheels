import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFiltersCars } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import { fetchCars } from "../../redux/cars/operations";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CarItems from "../../components/CarItems/CarItems";
import Filter from "../../components/Filter/Filter";
import LoadMore from "../../components/LoadMore/LoadMore";
import { v4 as uuid } from "uuid";
import { toCamelCase } from "../../helpers/camelCase";
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
    // const filtered = displayedCars.filter((item) => {
    //   const location = item.location;
    //   const equipment = item.selectedEquipment;
    //   const type = item.selectedType;
    //   return location && equipment && type;
    // });
    const filtered = displayedCars.filter((item) => {
      const locationFilter =
        !filteredCars.location || item.location === filteredCars.location;
      // const equipmentFilter =
      //   !filteredCars.equipment || item.location === filteredCars.location;
      const typeFilter =
        !toCamelCase(filteredCars.type) ||
        item.form === toCamelCase(filteredCars.type);
      return locationFilter && typeFilter;
    });

    // console.log(filtered);
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
          {cars.length >= carsPerPage && showLoadBtn && (
            <LoadMore onLoadMoreClick={onLoadMoreClick} />
          )}
        </CarsMenuWrapper>

        {/* {filteredSearch && visibleCars.length > 4 && (
          <LoadMore onLoadMoreClick={onLoadMoreClick} />
        )}
        {!filteredSearch && showLoadBtn && (
          <LoadMore onLoadMoreClick={onLoadMoreClick} />
        )} */}
      </CatalogContainer>
    </>
  );
}

export default Catalog;
