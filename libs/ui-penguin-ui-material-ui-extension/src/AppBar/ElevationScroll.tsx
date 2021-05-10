import * as React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/material-ui-extension:AppBar:ElevationScroll');

export type ElevationScrollProps = {
  children: React.ReactElement;
}

function ElevationScroll(props: ElevationScrollProps) {
  debug(`render`);

  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

if (process.env.NODE_ENV !== 'production') {
  ElevationScroll.displayName = 'penguin_ui_material_ui_extension__AppBar__ElevationScroll';
}

ElevationScroll.defaultProps = {};

export default ElevationScroll;
