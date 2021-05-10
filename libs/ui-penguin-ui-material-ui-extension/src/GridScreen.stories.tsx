import * as React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import GridScreen from './GridScreen';

export default {
  title: "GridScreen",
  decorators: [withKnobs]
};

export const Basic = () => {
  return <>
    <GridScreen xs={12}>
      <div style={{
        background: 'hsla(0, 100%, 50%, 0.7)',
        padding: 16,
        textAlign: 'center',
      }}>xs=12</div>
    </GridScreen>
    <GridScreen item xs={6}>
      <div style={{
        background: 'hsla(60, 100%, 50%, 0.7)',
        padding: 16,
        textAlign: 'center',
      }}>xs=6</div>
    </GridScreen>
    <GridScreen item xs={3}>
      <div style={{
        background: 'hsla(120, 100%, 50%, 0.7)',
        padding: 16,
        textAlign: 'center',
      }}>xs=3</div>
    </GridScreen>
  </>;
};
