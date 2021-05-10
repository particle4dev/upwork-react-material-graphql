import * as React from 'react';
import AppBar, {AppBarProps} from '@material-ui/core/AppBar';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/material-ui-extension:AppBar');

export type MDCAppBarProps = AppBarProps;

const MDCAppBar = React.forwardRef(function MDCAppBar({ children, ...other }: MDCAppBarProps, ref: React.Ref<HTMLElement>) {

  debug(`render`);

  return (
    <AppBar
      position="fixed"
      color="default"
      ref={ref}
      {...other}
    >
      {children}
    </AppBar>
  );
});

if (process.env.NODE_ENV !== 'production') {
  MDCAppBar.displayName = 'penguin_ui_material_ui_extension__AppBar';
}

MDCAppBar.defaultProps = {};

export default MDCAppBar;
