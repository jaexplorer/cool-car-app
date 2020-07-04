import React, { FC } from 'react';
import {
  ListContainer,
  ListHeader,
  HeaderTitle,
  HeaderSubtitle,
  HeaderButton,
  ButtonImg,
  ListWrapper,
} from './ListViewStyles';
import Button from '../../../../components/Button';
import Plus from '../../../../assets/images/plus.png';
import ListItem from './components/ListItem';
import { CarItem } from '../../../../lib/types';

const ListView: FC<ListViewProps> = ({ cars, openModal, setSelectedCar }) => {
  return (
    <ListContainer>
      <ListHeader>
        <HeaderTitle>Cool Car App</HeaderTitle>
        <HeaderSubtitle>Fast Exotic Cars Pty Ltd</HeaderSubtitle>
        <Button
          onClick={() => openModal(true)}
          styles={HeaderButton}
          image={Plus}
          imgStyles={ButtonImg}
        />
      </ListHeader>
      <ListWrapper>
        {cars.map((item, index) => (
          <ListItem car={item} key={index} setSelectedCar={setSelectedCar} />
        ))}
      </ListWrapper>
    </ListContainer>
  );
};

export interface ListViewProps {
  cars: CarItem[];
  openModal: (a: boolean) => void;
  setSelectedCar: any;
}

export default ListView;
