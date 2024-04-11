/* eslint-disable react/prop-types */
import { CardBtn } from "../CarItems/CarItems.styled";
import { useState } from "react";
import defaultCar from "../../../public/images/default-car.jpg";
import {
  ModalImg,
  ModalTitle,
  ModalTitleText,
  ModalWrapper,
  ModalTitleWrapper,
  ModalTitleContainer,
  ModalTitleDescrContainer,
  ModalTextContainer,
  ModalBtn,
  ModalDescr,
  ModalDiv,
  ModalDescrText,
  ModalCondition,
  ModalConditionWrapper,
  ModalConditionContainer,
  ModalConditionAdd,
  ModalConditionAccentColor,
  CloseModal,
  ModalTitleModel,
} from "./Modal.styled";

function ModalPopUp({ items }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <CardBtn type="button" onClick={openModal}>
        Learn More
      </CardBtn>
      <ModalDiv
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
        contentLabel="Example Modal"
      >
        <ModalWrapper>
          <CloseModal onClick={closeModal} />
          <ModalImg
            src={
              items.img
                ? items.img
                : items.photoLink
                ? items.photoLink
                : defaultCar
            }
            alt={items.make}
          />
          <ModalTextContainer>
            <ModalTitleDescrContainer>
              <ModalTitleContainer>
                <ModalTitleWrapper>
                  <ModalTitle>
                    {items.make}{" "}
                    <ModalTitleModel>{items.model}</ModalTitleModel>
                  </ModalTitle>
                  <ModalTitleText>, {items.year}</ModalTitleText>
                </ModalTitleWrapper>
                <div>
                  <div>
                    <ModalDescr>{items.address}</ModalDescr>
                    <ModalDescr> | Id: {items.id}</ModalDescr>
                    <ModalDescr> | Year: {items.year}</ModalDescr>
                    <ModalDescr> | Type: {items.type}</ModalDescr>
                  </div>
                  <div>
                    <ModalDescr>
                      Fuel Consumption: {items.fuelConsumption}
                    </ModalDescr>
                    <ModalDescr> | Engine Size: {items.engineSize}</ModalDescr>
                  </div>
                </div>
              </ModalTitleContainer>
              <ModalDescrText>{items.description}</ModalDescrText>
            </ModalTitleDescrContainer>
            <div>
              <ModalDescrText style={{ fontFamily: "500" }}>
                Accessories and functionalities:
              </ModalDescrText>
              <div>
                {items.accessories.map((item, index) => (
                  <ModalDescr key={item}>
                    {item}
                    {index !== items.accessories.length - 1 && <span> | </span>}
                  </ModalDescr>
                ))}
              </div>
            </div>
            <div>
              <ModalConditionContainer>
                <ModalDescrText style={{ fontFamily: "500" }}>
                  Rental Conditions:{" "}
                </ModalDescrText>
                <ModalConditionWrapper>
                  {items.rentalConditions
                    .split("\n")
                    .map((condition, index) => (
                      <ModalCondition key={index}>
                        {index === 0 ? (
                          <>
                            {condition.split(":")[0]}:{" "}
                            <span
                              style={{
                                color: "#3470ff",
                              }}
                            >
                              {condition.split(":")[1]}
                            </span>
                          </>
                        ) : (
                          condition.trim()
                        )}
                      </ModalCondition>
                    ))}
                  {/* {items.rentalConditions
                    .split("\n")
                    .map((condition, index) => (
                      <ModalCondition key={index}>
                        {condition.trim()}
                      </ModalCondition>
                    ))} */}
                  <ModalConditionAdd>
                    Mileage:{" "}
                    <ModalConditionAccentColor>
                      {parseInt(items.mileage).toLocaleString()}
                    </ModalConditionAccentColor>
                  </ModalConditionAdd>
                  <ModalConditionAdd>
                    Price:{" "}
                    <ModalConditionAccentColor>
                      {items.rentalPrice}
                    </ModalConditionAccentColor>
                  </ModalConditionAdd>
                </ModalConditionWrapper>
              </ModalConditionContainer>
            </div>
            <div>
              <ModalBtn
                href="tel:+17734141884"
                aria-label="Call us to rent a car"
                title="Call us to rent a car"
              >
                RENT A CAR
              </ModalBtn>
            </div>
          </ModalTextContainer>
        </ModalWrapper>
      </ModalDiv>
    </>
  );
}

export default ModalPopUp;
