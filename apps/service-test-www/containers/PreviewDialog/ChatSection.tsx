import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';
import {
  SectionSpacingBottom,
} from '@penguin-ui/material-ui-extension';
import Message from '../../components/Message';
import ChatDate from '../../components/ChatDate';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('containers:ChatSection');

export const styles = () => createStyles({
  chatLeft: {
    float: 'left',
    alignSelf: 'flex-start',
    marginRight: 100
  },

  chatRight: {
    float: 'right',
    alignSelf: 'flex-end',
    marginLeft: 100
  },

  messsage: {
    border: 'none',

    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '21px',
    letterSpacing: '0.15px',

    paddingLeft: 0
  },

  messsageTitle: {
    fontFamily: 'Arial',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0.15px',
    fontStyle: 'normal',

    paddingLeft: 0,
    marginRight: 15,
    color: '#253858'
  },

  time: {
    color: '#9E9F9E'
  }
});

type ChatSectionProps = WithStyles<typeof styles>;

const ChatSection = React.forwardRef(function ChatSection({ classes }: ChatSectionProps, ref: React.Ref<HTMLElement>) {
  debug('render');

  return (<>
    <ChatDate title="4 April 21" />

    <Message title="Vic Beall (VolcanoTek)" time="4:01pm" classes={{
      message: classes.messsage,
      title: classes.messsageTitle,
      time: classes.time
    }}>
      Hi Bob,<br />
      Waiting on an update from my team - should have an answer by Monday 4/5. <br />
      Thanks, <br />
      Vic
    </Message>

    <ChatDate title="27 March 21" />

    <Message title="Bob Press (LaptopGems)" time="2:30pm" classes={{
      message: classes.messsage,
      title: classes.messsageTitle,
      time: classes.time
    }}>
      We have both at Expeditors. They're labeled with DM's part numbers, but obviously not the part numbers specified in this email. <br />
      Can they reference DM part numbers instead? <br />
      If they really need to be labeled with their numbers, I suppose we could ask Exp... <br />
    </Message>
    <SectionSpacingBottom />
  </>);
});

if (process.env.NODE_ENV !== 'production') {
  ChatSection.displayName = 'containers__ChatSection';
}

ChatSection.defaultProps = {};

export default withStyles(styles, { name: 'ChatSection' })(ChatSection);

