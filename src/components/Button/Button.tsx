import React, { FC } from 'react';
import { ButtonContainer, ButtonImg } from './ButtonStyles';

const Button: FC<ButtonProps> = ({ styles, imgStyles, image, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} style={styles}>
      <ButtonImg style={imgStyles} src={image} />
    </ButtonContainer>
  );
};

export interface ButtonProps {
  styles: object;
  imgStyles?: object;
  image: any;
  onClick?: () => void;
}

export default Button;
