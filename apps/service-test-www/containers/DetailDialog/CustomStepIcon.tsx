import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { StepIconProps } from '@material-ui/core/StepIcon';
import { ReactComponent as ErrorIcon } from './error.svg';
import { ReactComponent as SuccessIcon } from './success.svg';
import { ReactComponent as UpComingIcon } from './upcoming.svg';

const customStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
});

export default function CustomStepIcon(props: StepIconProps) {
  const classes = customStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={classes.root}
    >
      { active && <ErrorIcon />}
      { completed && <SuccessIcon /> }
      { (!active && !completed) && <UpComingIcon />}
    </div>
  );
}
