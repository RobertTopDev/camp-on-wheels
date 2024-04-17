import locationData from "../../../location.json";
// import makesData from "../../../makes.json";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { fetchAllCars } from "../../redux/cars/operations";
import { toast } from "react-toastify";
import { commonToastOptions } from "../../helpers/toastOptions";
import { MdOutlineAir } from "react-icons/md";
import { TbAutomaticGearbox, TbToolsKitchen2 } from "react-icons/tb";
import { PiTelevisionSimple } from "react-icons/pi";
import { LuShowerHead } from "react-icons/lu";
import { TbCamper } from "react-icons/tb";
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
  ResetBtn,
  LocationIcon,
  FiltersWrapper,
  FiltersLine,
  SelectedFilterEquipment,
  SelectedFilterEquipmentWrapper,
  SelectedFilterEquipmentIcon,
  SelectedFilterEquipmentText,
  SelectedFilterEquipmentTitle,
  SelectedFilterEquipmentSubTitle,
  SelectedFilterEquipmentWrap,
  FormSearchBtn,
  SelectedFilterTypeWrapper,
} from "./Filter.styled";

// eslint-disable-next-line react/prop-types
function Filter({ handlePage, setDisplayedCars, setFilteredSearch }) {
  // const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  // const [selectedPrice, setSelectedPrice] = useState("");
  // const [mileageFrom, setMileageFrom] = useState("");
  // const [mileageTo, setMileageTo] = useState("");
  const locationRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  // const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const dispatch = useDispatch();

  const handleEquipmentFilter = (e) => {
    const equipment = e.target.innerText;
    setSelectedEquipment(equipment);
  };

  const handleTypeFilter = (e) => {
    const type = e.target.innerText;
    setSelectedType(type);
  };

  const handleOptionClick = (location) => {
    // setSelectedBrand(brand);
    setSelectedLocation(location);
    setIsOpen(false);
  };

  // const handleOptionPriceClick = (price) => {
  //   setSelectedPrice(price);
  //   setIsOpenPrice(false);
  // };

  const resetFilters = async () => {
    setSelectedEquipment("");
    setSelectedType("");
    setSelectedLocation("");
    // setSelectedBrand("");
    // setSelectedPrice("");
    // setMileageFrom("");
    // setMileageTo("");

    // const allCarsResponse = await dispatch(fetchAllCars());
    // setDisplayedCars(allCarsResponse.payload);

    // dispatch(setBrandFilter(""));
    // dispatch(setPriceFilter(""));
    // dispatch(setMileageRangeFilter({ min: "", max: "" }));

    // setFilteredSearch(false);
  };

  const handleReset = () => {
    resetFilters();
    handlePage();
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const locationValue = locationRef.current.innerText;

    const formData = {
      selectedEquipment: selectedEquipment,
      selectedType: selectedType,
    };

    // if (
    //   selectedBrand.length === 0 &&
    //   !selectedPrice &&
    //   mileageFrom.length === 0 &&
    //   mileageTo.length === 0
    // ) {
    //   toast.warning(
    //     "Please choose a brand, price, or mileage range to refine your search.",
    //     commonToastOptions
    //   );

    //   return;
    // }

    // const filters = {
    //   brand: selectedBrand,
    //   price: selectedPrice || "250",
    //   mileage: {
    //     from: mileageFrom || "0",
    //     to: mileageTo || "15000",
    //   },
    // };

    // const allCarsResponse = await dispatch(fetchAllCars());
    // setDisplayedCars(allCarsResponse.payload);

    // setFilteredSearch(true);

    // dispatch(setBrandFilter(filters.brand));
    // dispatch(setPriceFilter(filters.price));
    // dispatch(
    //   setMileageRangeFilter({
    //     min: filters.mileage.from,
    //     max: filters.mileage.to,
    //   })
    // );

    // handlePage();
    handleReset();
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FiltersWrapper>
        <OptionWrapper>
          <FormLabel htmlFor="location">Location</FormLabel>
          <SelectInput ref={locationRef} onClick={() => setIsOpen(!isOpen)}>
            <LocationIcon />
            <span>{selectedLocation || "Location"}</span>
          </SelectInput>
          {isOpen && (
            <SelectedOption>
              {locationData?.map((option) => (
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
        <SelectedFilterEquipmentWrap>
          <SelectedFilterEquipmentSubTitle>
            Filters
          </SelectedFilterEquipmentSubTitle>
          <SelectedFilterEquipmentTitle>
            Vehicle equipment
          </SelectedFilterEquipmentTitle>
          <FiltersLine></FiltersLine>
          <SelectedFilterEquipmentWrapper onClick={handleEquipmentFilter}>
            <SelectedFilterEquipment $active={selectedEquipment === "AC"}>
              <SelectedFilterEquipmentIcon>
                <MdOutlineAir />
              </SelectedFilterEquipmentIcon>
              <SelectedFilterEquipmentText>AC</SelectedFilterEquipmentText>
            </SelectedFilterEquipment>
            <SelectedFilterEquipment
              $active={selectedEquipment === "Automatic"}
            >
              <SelectedFilterEquipmentIcon>
                <TbAutomaticGearbox />
              </SelectedFilterEquipmentIcon>
              <SelectedFilterEquipmentText>
                Automatic
              </SelectedFilterEquipmentText>
            </SelectedFilterEquipment>
            <SelectedFilterEquipment $active={selectedEquipment === "Kitchen"}>
              <SelectedFilterEquipmentIcon>
                <TbToolsKitchen2 />
              </SelectedFilterEquipmentIcon>
              <SelectedFilterEquipmentText>Kitchen</SelectedFilterEquipmentText>
            </SelectedFilterEquipment>
            <SelectedFilterEquipment $active={selectedEquipment === "TV"}>
              <SelectedFilterEquipmentIcon>
                <PiTelevisionSimple />
              </SelectedFilterEquipmentIcon>
              <SelectedFilterEquipmentText>TV</SelectedFilterEquipmentText>
            </SelectedFilterEquipment>
            <SelectedFilterEquipment
              $active={selectedEquipment === "Shower/WC"}
            >
              <SelectedFilterEquipmentIcon>
                <LuShowerHead />
              </SelectedFilterEquipmentIcon>
              <SelectedFilterEquipmentText>
                Shower/WC
              </SelectedFilterEquipmentText>
            </SelectedFilterEquipment>
          </SelectedFilterEquipmentWrapper>
        </SelectedFilterEquipmentWrap>
        <SelectedFilterEquipmentWrap>
          <SelectedFilterEquipmentTitle>
            Vehicle type
          </SelectedFilterEquipmentTitle>
          <FiltersLine></FiltersLine>
          <SelectedFilterTypeWrapper onClick={handleTypeFilter}>
            <SelectedFilterEquipment $active={selectedType === "Van"}>
              <SelectedFilterEquipmentIcon>
                <TbCamper />
              </SelectedFilterEquipmentIcon>
              <SelectedFilterEquipmentText>Van</SelectedFilterEquipmentText>
            </SelectedFilterEquipment>
            <SelectedFilterEquipment
              $active={selectedType === "Fully Integrated"}
            >
              <SelectedFilterEquipmentIcon>
                <TbCamper />
              </SelectedFilterEquipmentIcon>
              <SelectedFilterEquipmentText>
                Fully Integrated
              </SelectedFilterEquipmentText>
            </SelectedFilterEquipment>
            <SelectedFilterEquipment $active={selectedType === "Alcove"}>
              <SelectedFilterEquipmentIcon>
                <TbCamper />
              </SelectedFilterEquipmentIcon>
              <SelectedFilterEquipmentText>Alcove</SelectedFilterEquipmentText>
            </SelectedFilterEquipment>
          </SelectedFilterTypeWrapper>
        </SelectedFilterEquipmentWrap>
      </FiltersWrapper>
      <FormSearchBtn>Search</FormSearchBtn>
    </FormWrapper>
  );
}

export default Filter;
