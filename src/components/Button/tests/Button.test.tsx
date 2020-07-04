import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';

test('renders component', () => {
  const { container } = render(<Button styles={{}} image={null} />);
  expect(container).toMatchSnapshot();
});
