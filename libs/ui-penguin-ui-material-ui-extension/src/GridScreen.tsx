import * as React from 'react';
import isNumber from 'lodash/isNumber';
import classnames from 'classnames';
import { WithStyles, createStyles, withStyles, Theme } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/react:Content');

const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme: Theme, breakpoint) {
  const styles = {};

  GRID_SIZES.forEach((size: any) => {
    const key = `grid-${breakpoint}-${size}`;

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        width: '100%',
      };
    }

    if (size === 'auto') {
      styles[key] = {
        width: 'none',
      };
    }

    if(isNumber(size)) {
      // Keep 7 significant numbers.
      const width = `calc(${Math.round((size / 12) * 10e7) / 10e5}vw)`;

      // Close to the bootstrap implementation:
      // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41
      styles[key] = {
        width: width,
      };
    }
  });

  // No need for a media query for the first size.
  if (breakpoint === 'xs') {
    Object.assign(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

// Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
export const styles = (theme: Theme) => createStyles({
  /* Styles applied to the root element. */
  root: {
    boxSizing: 'border-box',
    margin: '0', // For instance, it's useful when used with a `figure` element.
  },
  /* Styles applied to the root element if `zeroMinWidth={true}`. */
  zeroMinWidth: {
    minWidth: 0,
  },
  /* Styles applied to the root element if `wrap="nowrap"`. */
  'wrap-xs-nowrap': {
    flexWrap: 'nowrap',
  },
  /* Styles applied to the root element if `wrap="reverse"`. */
  'wrap-xs-wrap-reverse': {
    flexWrap: 'wrap-reverse',
  },
  ...theme.breakpoints.keys.reduce((accumulator, key) => {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}),
});

export type GridSize = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type GridScreenProps = WithStyles<typeof styles> & {
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg?: boolean | GridSize;
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md?: boolean | GridSize;
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm?: boolean | GridSize;
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   * @default false
   */
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap?: GridWrap;
  xl?: boolean | GridSize;
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs?: boolean | GridSize;
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth?: boolean;

  className?: string;

  component?: React.ElementType;
};

const GridScreen = React.forwardRef(function GridScreen(props: GridScreenProps, ref: React.Ref<HTMLElement>) {
  debug('render');

  const {
    classes,
    className: classNameProp,
    component: Component = 'div',
    lg = false,
    md = false,
    sm = false,
    wrap = 'wrap',
    xl = false,
    xs = false,
    zeroMinWidth = false,
    ...other
  } = props;

  const className = classnames(
    classes.root,
    {
      [classes.zeroMinWidth]: zeroMinWidth,
      [classes[`wrap-xs-${String(wrap)}`]]: wrap !== 'wrap',
      [classes[`grid-xs-${String(xs)}`]]: xs !== false,
      [classes[`grid-sm-${String(sm)}`]]: sm !== false,
      [classes[`grid-md-${String(md)}`]]: md !== false,
      [classes[`grid-lg-${String(lg)}`]]: lg !== false,
      [classes[`grid-xl-${String(xl)}`]]: xl !== false,
    },
    classNameProp,
  );

  return (<Component className={className} ref={ref} {...other} />);
});

if (process.env.NODE_ENV !== 'production') {
  GridScreen.displayName = 'penguin_ui_react__GridScreen';
}

GridScreen.defaultProps = {};

export default withStyles(styles, { name: 'GridScreen' })(GridScreen);
