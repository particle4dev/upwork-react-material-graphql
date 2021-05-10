import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Section from './Section';

describe('Section', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(<Section>test</Section>);
    expect(baseElement).toBeTruthy();
    expect(getByText('test')).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });
});
