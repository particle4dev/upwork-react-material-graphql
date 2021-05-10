import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Headline from './index';

describe('Headline', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(<Headline>test</Headline>);
    expect(baseElement).toBeTruthy();
    expect(getByText('test')).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
