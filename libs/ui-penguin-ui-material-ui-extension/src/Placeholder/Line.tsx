import React from 'react';
import ClassNames from 'classnames';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';
import Animation from './Animation';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/material-ui-extension:Placeholder:Line');

const styles = () => createStyles({
  placeholder__line: {
    height: 10,
    margin: '10px 0'
  },

  placeholder__width60: {
    width: 60
  },

  placeholder__width90: {
    width: 90
  },

  placeholder__width110: {
    width: 110
  },

  placeholder__width120: {
    width: 120
  },

  placeholder__width160: {
    width: 160
  },

  placeholder__width190: {
    width: 190
  },

  placeholder__width220: {
    width: 220
  },

  placeholder__width250: {
    width: 250
  },

  placeholder__width270: {
    width: 270
  },

  placeholder__width300: {
    width: 300
  },

  placeholder__width340: {
    width: 340
  },

  placeholder__width470: {
    width: 470
  },

  placeholder__width500: {
    width: 500
  }
});

export type ILineProps = WithStyles<typeof styles> & {
  readonly style?: React.CSSProperties,
  readonly className?: string,
  readonly width?: number
}

const Line = React.forwardRef(function Line(props: ILineProps, ref: React.Ref<HTMLElement>) {
  debug('render');

  const { className, classes, width, style } = props;
  const classesLine = ClassNames(
    classes.placeholder__line,
    {
      [classes.placeholder__width60]: width === 60,
      [classes.placeholder__width90]: width === 90,
      [classes.placeholder__width110]: width === 110,
      [classes.placeholder__width120]: width === 120,
      [classes.placeholder__width160]: width === 160,
      [classes.placeholder__width190]: width === 190,
      [classes.placeholder__width220]: width === 220,
      [classes.placeholder__width250]: width === 250,
      [classes.placeholder__width270]: width === 270,
      [classes.placeholder__width300]: width === 300,
      [classes.placeholder__width340]: width === 340,
      [classes.placeholder__width470]: width === 470,
      [classes.placeholder__width500]: width === 500
    },
    className
  );

  return <Animation ref={ref} className={classesLine} style={style} />;
});

if (process.env.NODE_ENV !== 'production') {
  Line.displayName = 'penguin_ui_mui_extension__Placeholder_Line';
}

Line.defaultProps = {
  width: 500,
  className: ''
};

export default withStyles(styles, { name: 'penguin_ui_mui_extension__Placeholder_Line' })(Line);
