import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SectionSpacingBottom from './index';

describe('SectionSpacingBottom', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(<SectionSpacingBottom />);
    expect(baseElement).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
  });
});
