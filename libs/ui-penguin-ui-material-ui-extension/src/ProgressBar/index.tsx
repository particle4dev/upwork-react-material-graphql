import * as React from 'react';
import { WithStyles, createStyles, withStyles, Theme } from '@material-ui/core';
import LinearProgress, {LinearProgressProps} from '@material-ui/core/LinearProgress';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/material-ui-extension:ProgressBar');

const styles = (theme: Theme) => createStyles({
  linearprogress: {
    zIndex: theme.zIndex.drawer + 10,
    height: 3,
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    right: 0
  }
});

export type ProgressBarProps = LinearProgressProps & WithStyles<typeof styles>

const ProgressBar = React.forwardRef(function ProgressBar(props: ProgressBarProps, ref: React.Ref<HTMLElement>) {
  debug('render');

  const { classes, ...other } = props;
  return <LinearProgress ref={ref} className={classes.linearprogress} {...other} />;
});

if (process.env.NODE_ENV !== 'production') {
  ProgressBar.displayName = 'penguin_ui_material_ui_extension__ProgressBar';
}

ProgressBar.defaultProps = {};

export default withStyles(styles, {name: 'ProgressBar'})(ProgressBar);
