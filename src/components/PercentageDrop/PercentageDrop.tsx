import React, { FC } from 'react';
import { PercentageDropContainer, Arrow, Percentage } from './PercentageDropStyles';

const PercentageDrop: FC<PercentageDropProps> = ({ percentage }) => {
  return (
    <PercentageDropContainer>
      <Arrow />
      <Percentage>-{percentage}%</Percentage>
    </PercentageDropContainer>
  );
};

export interface PercentageDropProps {
  percentage: string | number;
}

export default PercentageDrop;
