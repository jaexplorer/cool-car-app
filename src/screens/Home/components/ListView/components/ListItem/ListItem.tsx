// @ts-nocheck
import React, { FC } from 'react';
import {
  ListItemContainer,
  CarTitle,
  DetailsContainer,
  CarImg,
  SummaryContainer,
  Price,
  Person,
} from './ListItemStyles';
import PercentageDrop from '../../../../../../components/PercentageDrop';
import { CarItem } from '../../../../../../lib/types';
import images from '../../../../../../assets/images';

const ListItem: FC<ListItemProps> = ({ car, setSelectedCar }) => {
  return (
    <ListItemContainer onClick={() => setSelectedCar(car)}>
      <CarTitle>{car.title}</CarTitle>
      <DetailsContainer>
        <CarImg src={images[car.image]} />
        <SummaryContainer>
          <Price>${car.purchasedPrice}</Price>
          <Person>By {car.owner}</Person>
        </SummaryContainer>
        <PercentageDrop percentage={car.downPercentage} />
      </DetailsContainer>
    </ListItemContainer>
  );
};

export interface ListItemProps {
  car: CarItem;
  setSelectedCar: any;
}

export default ListItem;
