import React from 'react';
import { render } from '@testing-library/react';
import ItemView from '../ItemView';
import MOCKDATA from '../../../../../lib/mockdata';

test('renders component', () => {
  const { container } = render(
    <ItemView
      setSelectedCar={() => null}
      setCars={() => null}
      cars={MOCKDATA}
      selectedCar={MOCKDATA[0]}
    />,
  );
  expect(container).toMatchSnapshot();
});
