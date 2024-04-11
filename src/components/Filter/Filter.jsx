import makesData from "../../../makes.json";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchAllCars } from "../../redux/cars/operations";
import { toast } from "react-toastify";
import { commonToastOptions } from "../../helpers/toastOptions";
import {
  setBrandFilter,
  setMileageRangeFilter,
  setPriceFilter,
} from "../../redux/cars/slice";
import {
  FormBtn,
  FormLabel,
  FormWrapper,
  OptionWrapper,
  FormInputLeft,
  FormInputRight,
  SelectInput,
  SelectedOption,
  SelectedOptionText,
  FormInputMileageWrapper,
  ArrowIconDown,
  ArrowIconUp,
  ResetBtn,
} from "./Filter.styled";

// eslint-disable-next-line react/prop-types
function Filter({ handlePage, setDisplayedCars, setFilteredSearch }) {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);

  const dispatch = useDispatch();

  const generatePriceOptions = () => {
    const options = [];

    for (let price = 10; price <= 250; price += 10) {
      options.push(
        <SelectedOptionText
          key={uuid()}
          onClick={() => handleOptionPriceClick(price)}
        >
          {price} $
        </SelectedOptionText>
      );
    }

    return options;
  };

  const handleOptionClick = (brand) => {
    setSelectedBrand(brand);
    setIsOpen(false);
  };

  const handleOptionPriceClick = (price) => {
    setSelectedPrice(price);
    setIsOpenPrice(false);
  };

  const resetFilters = async () => {
    setSelectedBrand("");
    setSelectedPrice("");
    setMileageFrom("");
    setMileageTo("");

    const allCarsResponse = await dispatch(fetchAllCars());
    setDisplayedCars(allCarsResponse.payload);

    dispatch(setBrandFilter(""));
    dispatch(setPriceFilter(""));
    dispatch(setMileageRangeFilter({ min: "", max: "" }));

    setFilteredSearch(false);
  };

  const handleReset = () => {
    resetFilters();
    handlePage();
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      selectedBrand.length === 0 &&
      !selectedPrice &&
      mileageFrom.length === 0 &&
      mileageTo.length === 0
    ) {
      toast.warning(
        "Please choose a brand, price, or mileage range to refine your search.",
        commonToastOptions
      );

      return;
    }

    const filters = {
      brand: selectedBrand,
      price: selectedPrice || "250",
      mileage: {
        from: mileageFrom || "0",
        to: mileageTo || "15000",
      },
    };

    const allCarsResponse = await dispatch(fetchAllCars());
    setDisplayedCars(allCarsResponse.payload);

    setFilteredSearch(true);

    dispatch(setBrandFilter(filters.brand));
    dispatch(setPriceFilter(filters.price));
    dispatch(
      setMileageRangeFilter({
        min: filters.mileage.from,
        max: filters.mileage.to,
      })
    );

    handlePage();
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <OptionWrapper>
        <FormLabel htmlFor="carBrand">Car brand:</FormLabel>
        <SelectInput onClick={() => setIsOpen(!isOpen)}>
          {selectedBrand || "Enter the text"}
          {isOpen ? <ArrowIconUp /> : <ArrowIconDown />}
        </SelectInput>
        {isOpen && (
          <SelectedOption>
            {makesData.map((option) => (
              <SelectedOptionText
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </SelectedOptionText>
            ))}
          </SelectedOption>
        )}
      </OptionWrapper>
      <OptionWrapper>
        <FormLabel htmlFor="price">Price / 1 hour</FormLabel>
        <SelectInput onClick={() => setIsOpenPrice(!isOpenPrice)}>
          {selectedPrice || "To $"}
          {isOpenPrice ? <ArrowIconUp /> : <ArrowIconDown />}
        </SelectInput>
        {isOpenPrice && (
          <SelectedOption>{generatePriceOptions()}</SelectedOption>
        )}
      </OptionWrapper>
      <OptionWrapper>
        <FormLabel htmlFor="mileage">Car mileage / km</FormLabel>
        <FormInputMileageWrapper>
          <FormInputLeft
            type="text"
            placeholder="From"
            value={mileageFrom ? parseInt(mileageFrom).toLocaleString() : ""}
            onChange={(e) => setMileageFrom(e.target.value)}
          />
          <FormInputRight
            type="text"
            placeholder="To"
            value={mileageTo ? parseInt(mileageTo).toLocaleString() : ""}
            onChange={(e) => setMileageTo(e.target.value)}
          />
        </FormInputMileageWrapper>
      </OptionWrapper>
      <FormBtn type="submit">Search</FormBtn>
      <ResetBtn onClick={handleReset} type="button">
        Reset
      </ResetBtn>
    </FormWrapper>
  );
}

export default Filter;
