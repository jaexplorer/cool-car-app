// @ts-nocheck
import React, { FC, useEffect, useState, useRef } from 'react';
import {
  ModalContainer,
  PickerContainer,
  PickerTitle,
  ButtonContainer,
  ButtonImg,
} from './ModalStyles';
import Play from '../../../../assets/images/play-button.png';
import Button from '../../../../components/Button';
import { CarItem } from '../../../../lib/types';

// NOTE: For the purposes of limited time, it is assumed all "cool" companies have the same cars
// NOTE2: For also the purposes of limited time, all cars have the same specs
const Modal: FC<ModalProps> = ({ modal, openModal, cars, setCars }) => {
  const [car, setCar] = useState<CarItem>({
    id: Math.floor(Math.random() * 10000),
    image: 'ferrari',
    title: 'ferrari',
    description:
      'This car is a really cool and special car, it can out perform and out race most cars it goes up against',
    purchasedPrice: '',
    downPercentage: 41,
    owner: '',
    company: '',
    currentValue: '539,999',
    topSpeed: 230,
    range: 970,
  });
  const myRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!myRef.current.contains(e.target)) {
        openModal(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  const onSubmit = () => {
    setCars([car, ...cars]);
    openModal(false);
  };

  // Note these would usually be combined into one onChange function
  const setCompany = (e) => {
    setCar({ ...car, company: e.target.value });
  };

  const setCarName = (e) => {
    setCar({ ...car, image: e.target.value, title: e.target.value });
  };

  const setPrice = (e) => {
    setCar({ ...car, purchasedPrice: e.target.value });
  };

  const setName = (e) => {
    setCar({ ...car, owner: e.target.value });
  };

  return (
    <ModalContainer display={modal} ref={myRef}>
      {console.log(car)}
      <PickerContainer>
        <PickerTitle>Pick a cool Company</PickerTitle>
        <select onChange={setCompany}>
          <option value="Toms Motors">Toms Motors</option>
          <option value="Wills Motors">Wills Motors</option>
          <option value="Lux Motors">Lux Motors</option>
        </select>
      </PickerContainer>
      <PickerContainer>
        <PickerTitle>Pick a cool Car</PickerTitle>
        <select onChange={setCarName}>
          <option value="ferrari">Ferrari</option>
          <option value="lamborghini">Lamborghini</option>
          <option value="mclaren">Mclaren</option>
          <option value="mustang">Mustang</option>
          <option value="porsche">Porsche</option>
        </select>
      </PickerContainer>
      <PickerContainer>
        <PickerTitle>Purchased Price</PickerTitle>
        <input
          onChange={setPrice}
          type="text"
          name="purchasedPrice"
          placeholder="Purchased price"
        ></input>
      </PickerContainer>
      <PickerContainer>
        <PickerTitle>Your Name</PickerTitle>
        <input onChange={setName} type="text" name="purchasedPrice" placeholder="Your name"></input>
      </PickerContainer>
      <Button onClick={onSubmit} styles={ButtonContainer} imgStyles={ButtonImg} image={Play} />
    </ModalContainer>
  );
};

export interface ModalProps {
  modal: boolean;
  openModal: (a: boolean) => void;
  cars: CarItem[];
  setCars: any;
}

export default Modal;
