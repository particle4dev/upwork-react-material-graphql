import * as React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { StylesProvider } from "@material-ui/styles";

const StylesDecorator = storyFn => (
  <StylesProvider injectFirst>
    {storyFn()}
  </StylesProvider>
);

addDecorator(StylesDecorator);
addDecorator(withKnobs);
