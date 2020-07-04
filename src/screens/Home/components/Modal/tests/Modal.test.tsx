import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../Modal';
import MOCKDATA from '../../../../../lib/mockdata';

test('renders component', () => {
  const { container } = render(
    <Modal setCars={() => null} cars={MOCKDATA} openModal={() => null} modal={true} />,
  );
  expect(container).toMatchSnapshot();
});
