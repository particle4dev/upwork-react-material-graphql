import React from 'react';
import Circle from './Circle';
import Placeholder from './Placeholder';
import Line from './Line';
import Rect from './Rect';
import Height from './Height';
import LineWrapper from './LineWrapper';
import Delay from './Delay';

export default {
  component: Placeholder,
  title: 'Placeholder',
};

export const basic = () => {
  /* eslint-disable-next-line */
  // const props: any = {};

  return <Placeholder
    ready={false}
    delay={100}
    placeholder={
      <Delay value={260}>
        <Circle />
        <LineWrapper>
          <Line width={110} />
          <Line width={250} />
        </LineWrapper>
        <Height height={20}></Height>
        <Line width={500} />
        <Line width={470} />
      </Delay>
    }
  >
    Content Here
  </Placeholder>;
};

export const circle = () => {
  return <Delay value={260}>
    <Circle />
  </Delay>;
};

export const rect = () => {
  return <Delay value={260}>
    <Rect />
  </Delay>;
};

export const line = () => {
  return <Delay value={380}>
    <Line width={500} />
    <Line width={470} />
    <br />
    <Line width={110} />
    <Line width={250} />
  </Delay>;
};

export const example1 = () => {
  return <LineWrapper>
    <Line width={500} />
    <Line width={470} />
    <br />
    <Line width={110} />
    <Line width={250} />
  </LineWrapper>;
};

export const example2 = () => {
  return <Delay value={380}>
    <Rect/>
    <LineWrapper>
      <Line width={110} />
      <Line width={250} />
    </LineWrapper>
    <Height height={20}></Height>
    <Rect/>
    <LineWrapper>
      <Line width={110} />
      <Line width={250} />
    </LineWrapper>
    <Height height={20}></Height>
    <Rect/>
    <LineWrapper>
      <Line width={110} />
      <Line width={250} />
    </LineWrapper>
  </Delay>;
};

export const example3 = () => {
  return <Delay value={260}>
    <Circle />
    <LineWrapper>
      <Line width={110} />
      <Line width={250} />
    </LineWrapper>
    <Height height={20}></Height>
    <Line width={500} />
    <Line width={470} />
  </Delay>;
};
