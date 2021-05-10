import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';
import Text from '../Text';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('containers:Message');

const styles = () => createStyles({
  message: {
    border: '1px solid #9E9E9E',
    borderRadius: 16,
    padding: '8px 20px',
  },

  title: {
    paddingLeft: 16,
    fontFamily: 'Arial',
  },

  time: {
    marginLeft: 5
  },

  head: {
    marginBottom: 5
  }
});

type MessageProps = WithStyles<typeof styles> & {
  title?: string | null;
  time?: string | null;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Message = React.forwardRef(function Message({
  classes,
  title,
  time,
  children,
  className,
  style,
}: MessageProps, ref: React.Ref<HTMLDivElement>) {
  debug(`render`);

  return (
    <div ref={ref} style={style} className={className}>
      <div className={classes.head}>
        {title && <Text component="span" variant="body1" className={classes.title}>
          {title}
        </Text>}

        {time && <Text component="span" variant="body1" className={classes.time}>
          {time}
        </Text>}
      </div>
      <Text className={classes.message}>
        {children}
      </Text>
    </div>
  );
});

if (process.env.NODE_ENV !== 'production') {
  Message.displayName = 'components__Message';
}

Message.defaultProps = {
  title: null
};

export default withStyles(styles, { name: 'Message' })(Message);
