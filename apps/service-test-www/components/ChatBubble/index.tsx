import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('components:ChatBubble');

export const styles = () => createStyles({
  text: {
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '17px',
    letterSpacing: '0.15px',
    fill: '#fff',
  },
  iconContainer: {
    width: 20,
    height: 20,
  }
});

type ChatBubbleProps = WithStyles<typeof styles> & {
  number?: number;
  style?: React.CSSProperties;
  className?: string;
};

const ChatBubble = React.forwardRef(function ChatBubble({ classes, number, style }: ChatBubbleProps, ref: React.Ref<HTMLSpanElement>) {
  debug(`render`);

  return (
    <span ref={ref} className={classes.iconContainer} style={style}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.99 2C19.99 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H16L20 20L19.99 2Z" fill="black" fillOpacity="0.38"/>
        {number && <text className={classes.text} x="10" y="12" textAnchor="middle">{number}</text>}
      </svg>
    </span>
  );
});

if (process.env.NODE_ENV !== 'production') {
  ChatBubble.displayName = 'components__ChatBubble';
}

ChatBubble.defaultProps = {};

export default withStyles(styles, { name: 'ChatBubble' })(ChatBubble);
