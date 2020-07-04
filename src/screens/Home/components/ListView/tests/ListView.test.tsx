import React from 'react';
import { render } from '@testing-library/react';
import ListView from '../ListView';
import MOCKDATA from '../../../../../lib/mockdata';

test('renders component', () => {
  const { container } = render(
    <ListView setSelectedCar={() => null} cars={MOCKDATA} openModal={() => null} />,
  );
  expect(container).toMatchSnapshot();
});
