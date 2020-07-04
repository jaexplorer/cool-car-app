import React from 'react';
import { render } from '@testing-library/react';
import PercentageDrop from '../PercentageDrop';

test('renders component', () => {
  const { container } = render(<PercentageDrop percentage={23} />);
  expect(container).toMatchSnapshot();
});
