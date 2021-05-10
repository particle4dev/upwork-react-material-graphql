import * as React from 'react';
import classnames from 'classnames';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('components:TimeColor');

export const styles = () => createStyles({
  warning: {
    color: '#E31B0C',
  },
  watchLater: {
    color: '#C77700'
  }
});

type TimeColorProps = WithStyles<typeof styles> & {
  type?: string;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

const TimeColor = React.forwardRef(function TimeColor({ classes, children, type, style }: TimeColorProps, ref: React.Ref<HTMLElement>) {
  debug(`render`);

  const cls = classnames({
    [classes.warning]: type === 'warning',
    [classes.watchLater]: type === 'watch-later'
  });

  return (
    <Typography className={cls} component="span" variant="body2">{children}</Typography>
  );
});

if (process.env.NODE_ENV !== 'production') {
  TimeColor.displayName = 'components__TimeColor';
}

TimeColor.defaultProps = {};

export default withStyles(styles, { name: 'TimeColor' })(TimeColor);
