import React from 'react';
import { render } from '@testing-library/react';
import ListItem from '../ListItem';
import MOCKDATA from '../../../../../../../lib/mockdata';

test('renders component', () => {
  const { container } = render(<ListItem setSelectedCar={() => null} car={MOCKDATA[0]} />);
  expect(container).toMatchSnapshot();
});
