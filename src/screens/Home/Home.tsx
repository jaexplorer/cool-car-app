import React, { Fragment, FC, useState } from 'react';
import { HomeContainer } from './HomeStyles';
import ListView from './components/ListView';
import ItemView from './components/ItemView';
import { CarItem } from '../../lib/types';
import MOCKDATA from '../../lib/mockdata';
import Modal from './components/Modal';

const Home: FC<HomeProps> = () => {
  const [cars, setCars] = useState<CarItem[]>(MOCKDATA);
  const [modal, openModal] = useState<boolean>(false);
  const [selectedCar, setSelectedCar] = useState<CarItem>(MOCKDATA[0]);

  return (
    <Fragment>
      <HomeContainer blur={modal}>
        {console.log(selectedCar)}
        <ListView
          cars={cars}
          openModal={(a: boolean) => openModal(a)}
          setSelectedCar={setSelectedCar}
        />
        <ItemView
          selectedCar={selectedCar}
          setSelectedCar={setSelectedCar}
          cars={cars}
          setCars={setCars}
        />
      </HomeContainer>
      <Modal modal={modal} openModal={(a: boolean) => openModal(a)} cars={cars} setCars={setCars} />
    </Fragment>
  );
};

export interface HomeProps {}

export default Home;
