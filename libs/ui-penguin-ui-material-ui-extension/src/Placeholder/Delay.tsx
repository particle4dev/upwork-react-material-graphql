import React from 'react';
import ClassNames from 'classnames';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/material-ui-extension:Placeholder:Delay');

const styles = () => createStyles({
  placeholder__delay: {
    opacity: 0,
    transform: 'translateY(-10px)',
    animation: '$fade-slide-in 334ms cubic-bezier(0,0,.2,1) forwards'
  },

  placeholder__delay140: {
    animationDelay: '140ms'
  },

  placeholder__delay200: {
    animationDelay: '.2s'
  },

  placeholder__delay260: {
    animationDelay: '260ms'
  },

  placeholder__delay320: {
    animationDelay: '320ms'
  },

  placeholder__delay380: {
    animationDelay: '380ms'
  },

  '@keyframes fade-slide-in': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-10px)'
    },

    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },
});

export type PlaceholderDelayProps = WithStyles<typeof styles> & {
  readonly style?: React.CSSProperties,
  readonly className?: string,
  readonly value?: number,
  children: React.ReactNode
}

const PlaceholderDelay = React.forwardRef(function PlaceholderDelay(props: PlaceholderDelayProps, ref: React.Ref<HTMLDivElement>) {
  debug('render');

  const { className, classes, value, style, children } = props;
  const classesLine = ClassNames(
    classes.placeholder__delay,
    {
      [classes.placeholder__delay140]: value === 140,
      [classes.placeholder__delay200]: value === 200,
      [classes.placeholder__delay260]: value === 260,
      [classes.placeholder__delay320]: value === 320,
      [classes.placeholder__delay380]: value === 380,
    },
    className
  );

  return <div ref={ref} className={classesLine} style={style}>{children}</div>;
});

if (process.env.NODE_ENV !== 'production') {
  PlaceholderDelay.displayName = 'penguin_ui_mui_extension__Placeholder_Delay';
}

PlaceholderDelay.defaultProps = {
  className: ''
};

export default withStyles(styles, { name: 'penguin_ui_mui_extension__Placeholder_Delay' })(PlaceholderDelay);
