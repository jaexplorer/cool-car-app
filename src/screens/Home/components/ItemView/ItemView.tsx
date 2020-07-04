// @ts-nocheck
import React, { FC } from 'react';
import {
  ItemViewContainer,
  TitleContainer,
  Title,
  Description,
  ImageContainer,
  CarImg,
  PurchasedDetailsContainer,
  PurchaseTitle,
  PriceContainer,
  Price,
  Owner,
  SummaryContainer,
  SummaryItem,
  SummaryTitle,
  SummaryValue,
  DeleteButton,
  DeleteImg,
} from './ItemViewStyles';
import PercentageDrop from '../../../../components/PercentageDrop';
import removeImg from '../../../../assets/images/remove.png';
import Button from '../../../../components/Button';
import { CarItem } from '../../../../lib/types';
import images from '../../../../assets/images';

const ItemView: FC<ItemViewProps> = ({ cars, setCars, selectedCar, setSelectedCar }) => {
  const removeCar = () => {
    const result = cars.filter((car) => car.id !== selectedCar.id);
    setCars(result);
    setSelectedCar(result[0]);
  };

  return (
    <ItemViewContainer>
      <TitleContainer>
        <Title>{selectedCar.title}</Title>
        <Description>{selectedCar.description}</Description>
      </TitleContainer>
      <ImageContainer>
        <CarImg src={images[selectedCar.image]} />
      </ImageContainer>
      <PurchasedDetailsContainer>
        <PurchaseTitle>Purchased Price</PurchaseTitle>
        <PriceContainer>
          <Price>${selectedCar.purchasedPrice}</Price>
          <PercentageDrop percentage={23} />
        </PriceContainer>
        <Owner>
          By {selectedCar.owner} from {selectedCar.company}
        </Owner>
      </PurchasedDetailsContainer>
      <SummaryContainer>
        <SummaryItem>
          <SummaryTitle>Top Speed</SummaryTitle>
          <SummaryValue>{selectedCar.topSpeed}km/hr</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryTitle>Range</SummaryTitle>
          <SummaryValue>{selectedCar.range}kms</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryTitle>Current Value</SummaryTitle>
          <SummaryValue>${selectedCar.currentValue}</SummaryValue>
        </SummaryItem>
      </SummaryContainer>
      <Button image={removeImg} styles={DeleteButton} imgStyles={DeleteImg} onClick={removeCar} />
    </ItemViewContainer>
  );
};

export interface ItemViewProps {
  cars: CarItem[];
  setCars: any;
  selectedCar: CarItem;
  setSelectedCar: any;
}

export default ItemView;
