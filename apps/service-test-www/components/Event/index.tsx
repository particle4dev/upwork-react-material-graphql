import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';
import { ReactComponent as ErrorIcon } from './error.svg';
import { ReactComponent as WarningIcon } from './warning.svg';
import { ReactComponent as SuccessIcon } from './success.svg';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('components:Event');

export const styles = () => createStyles({
  root: {
    background: '#F5F5F5',
    borderRadius: 16,
    padding: 8,
    textAlign: 'center',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center'
  },

  icon: {
    marginRight: 5
  }
});

type EventProps = WithStyles<typeof styles> & {
  type?: string;
  children?: React.ReactNode;
};

const Event = React.forwardRef(function Event({ classes, type, children }: EventProps, ref: React.Ref<HTMLElement>) {
  debug('render');

  return (
    <div className={classes.root}>
      {type === 'error' && <ErrorIcon className={classes.icon} />}
      {type === 'warning' && <WarningIcon className={classes.icon} />}
      {type === 'success' && <SuccessIcon className={classes.icon} />}
      {children}
    </div>
  );
});

if (process.env.NODE_ENV !== 'production') {
  Event.displayName = 'components__Event';
}

Event.defaultProps = {};

export default withStyles(styles, { name: 'Event' })(Event);
