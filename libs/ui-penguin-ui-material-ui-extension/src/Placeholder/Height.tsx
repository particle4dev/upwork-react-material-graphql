import * as React from 'react';
import ClassNames from 'classnames';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/material-ui-extension:Placeholder:PlaceholderHeight');

const styles = () => createStyles({
  placeholder__height8: {
    height: 8,
  },

  placeholder__height10: {
    height: 10
  },

  placeholder__height15: {
    height: 15
  },

  placeholder__height20: {
    height: 20
  },

  placeholder__height32: {
    height: 32
  },

  placeholder__height40: {
    height: 40
  },

  placeholder__height49: {
    height: 49
  },

  placeholder__height50: {
    height: 50
  },

  placeholder__height70: {
    height: 70
  },

  placeholder__height90: {
    height: 90
  },

  placeholder__height100: {
    height: 100
  },

  placeholder__height110: {
    height: 110
  },

  placeholder__height200: {
    height: 200
  },

  placeholder__height250: {
    height: 250
  },

  placeholder__height300: {
    height: 300
  },

  placeholder__height610: {
    height: 610
  },
});

export type IPlaceholderHeightProps = WithStyles<typeof styles> & {
  readonly className?: string,
  height: number
}

const PlaceholderHeight = React.forwardRef(function PlaceholderHeight(props: IPlaceholderHeightProps, ref: React.Ref<HTMLDivElement>) {
  debug('render');

  const { className, classes, height } = props;
  const classesLineWrapper = ClassNames(
    {
      [classes.placeholder__height8]: height === 8,
      [classes.placeholder__height10]: height === 10,
      [classes.placeholder__height15]: height === 15,
      [classes.placeholder__height20]: height === 20,
      [classes.placeholder__height32]: height === 32,
      [classes.placeholder__height40]: height === 40,
      [classes.placeholder__height49]: height === 49,
      [classes.placeholder__height50]: height === 50,
      [classes.placeholder__height70]: height === 70,
      [classes.placeholder__height90]: height === 90,
      [classes.placeholder__height100]: height === 100,
      [classes.placeholder__height110]: height === 110,
      [classes.placeholder__height200]: height === 200,
      [classes.placeholder__height250]: height === 250,
      [classes.placeholder__height300]: height === 300,
      [classes.placeholder__height610]: height === 610
    },
    className
  );
  return <div ref={ref} className={classesLineWrapper} />;
});

if (process.env.NODE_ENV !== 'production') {
  PlaceholderHeight.displayName = 'penguin_ui_mui_extension__Placeholder_Height';
}

PlaceholderHeight.defaultProps = {
  className: '',
};

export default withStyles(styles, { name: 'penguin_ui_mui_extension__Placeholder_Height' })(PlaceholderHeight);
