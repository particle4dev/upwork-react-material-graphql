import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import AttachmentIcon from '@material-ui/icons/Attachment';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('components:MessageSection');

export const styles = () => createStyles({
  root: {
    position: 'relative',
  },

  textarea: {
    height: '100px !important',
    width: '100%',
    borderRadius: 16,
    padding: 16,

    fontFamily: 'Arial',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0.15px',
    textAlign: 'left'
  },

  attachmentIcon: {
    color: '#757575',
    position: 'absolute',
    bottom: 16,
    right: 108,
  },

  sendButton: {
    position: 'absolute',
    bottom: 16,
    right: 24
  }
});

type MessageSectionProps = WithStyles<typeof styles>;

const MessageSection = React.forwardRef(function MessageSection({ classes }: MessageSectionProps, ref: React.Ref<HTMLDivElement>) {
  debug('render');

  return (<div ref={ref} className={classes.root}>
    <TextareaAutosize aria-label="message textarea" placeholder="Send a message..." className={classes.textarea} />
    <IconButton size="small" color="inherit" aria-label="up" className={classes.attachmentIcon}>
      <AttachmentIcon />
    </IconButton>

    <Button variant="outlined" color="primary" className={classes.sendButton}>
      Send
    </Button>
  </div>
  );
});

if (process.env.NODE_ENV !== 'production') {
  MessageSection.displayName = 'components__MessageSection';
}

MessageSection.defaultProps = {};

export default withStyles(styles, { name: 'MessageSection' })(MessageSection);

