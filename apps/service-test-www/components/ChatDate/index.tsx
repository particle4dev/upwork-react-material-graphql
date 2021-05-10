import * as React from 'react';
import { WithStyles, createStyles, withStyles, Theme } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('containers:ChatDate');

const styles = (theme: Theme) => createStyles({
  root: {
    position: 'relative',
    width: '100%',
    textAlign: 'center',
  },

  line: {
    '&::before, &::after': {
      position: 'absolute',
      top: 16,
      display: 'inline-block',
      width: '40%',
      height: 1,
      content: '""',
      backgroundColor: theme.palette.divider
    },
    '&::before': {
      left: 0
    },
    '&::after': {
      right: 0
    }
  },
});

type ChatDateProps = WithStyles<typeof styles> & {
  title: string;
}

const ChatDate = React.forwardRef(function ChatDate({
  classes,
  title
}: ChatDateProps, ref: React.Ref<HTMLDivElement>) {
  debug(`render`);

  return (
    <div ref={ref} className={classes.root}>
      <Chip label={title} variant="outlined" className={classes.line} />
    </div>
  );
});

if (process.env.NODE_ENV !== 'production') {
  ChatDate.displayName = 'components__ChatDate';
}

export default withStyles(styles, { name: 'ChatDate' })(ChatDate);
