import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';
import {
  SectionSpacingBottom,
} from '@penguin-ui/material-ui-extension';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import Message from '../../components/Message';
import ChatDate from '../../components/ChatDate';
import Event from '../../components/Event';
import Text from '../../components/Text';

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

  firstMesssage: {
    border: '2px solid #000000',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '21px',
    letterSpacing: '0.15px'
  },

  firstMesssageTitle: {
    fontFamily: 'Arial',
    fontSize: 14,
    fontWeight: 700,
    lineHeight: '20px',
    letterSpacing: '0.15px'
  },

  searchIcon: {
    position: 'absolute',
    right: 0,
    top: 24,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  }
});

type ChatSectionProps = WithStyles<typeof styles>;

const ChatSection = React.forwardRef(function ChatSection({ classes }: ChatSectionProps, ref: React.Ref<HTMLElement>) {
  debug('render');

  return (<>
    <div style={{
      position: 'relative'
    }}>
      <div className={classes.searchIcon}>
        <SearchIcon style={{
          color: '#C4C4C4',
          marginRight: 8
        }} />
        <Text style={{
          color: '#757575',
        }}>
          All
        </Text>
        <ExpandMoreIcon style={{
          color: '#757575',
          width: 16,
          height: 16,
        }}/>
      </div>
    </div>
    <ChatDate title="4 April 21" />
    <SectionSpacingBottom />

    <Message title="Vic Beall (VolcanoTek)" time="4:01pm" className={classes.chatRight} classes={{
      message: classes.firstMesssage,
      title: classes.firstMesssageTitle
    }}>
      Hi Bob,<br />
      Waiting on an update from my team - should have an answer by Monday 4/5. <br />
      Thanks, <br />
      Vic
    </Message>
    <SectionSpacingBottom />

    <ChatDate title="3 April 21" />
    <SectionSpacingBottom />

    <Event type="error">Action Acknowledged by Vic Beall (VolcanoTek)</Event>
    <SectionSpacingBottom />

    <ChatDate title="2 April 21" />
    <SectionSpacingBottom />

    <Event type="warning">RFQ Furnace 3.4 is due today</Event>
    <SectionSpacingBottom />

    <ChatDate title="27 March 21" />
    <SectionSpacingBottom />

    <Message title="Bob Press (LaptopGems)" time="2:30pm" className={classes.chatLeft}>
      We have both at Expeditors. They're labeled with DM's part numbers, but obviously not the part numbers specified in this email. <br />
      Can they reference DM part numbers instead? <br />
      If they really need to be labeled with their numbers, I suppose we could ask Expeditors to do that before they ship to them. <br />
    </Message>
    <SectionSpacingBottom />

    <ChatDate title="25 March 21" />
    <SectionSpacingBottom />

    <Message title="Vic Beall (VolcanoTek)" time="4:01pm" className={classes.chatRight}>
      Hi Bob, <br />
      Would you have time for a quick discussion regarding the supply of gen 3.4 insulation packs and heaters? We are trying to determine how best to quote based on manufacturing in parallel with production of gen 3.5 units for Factory1. <br />
      Also, providing we have an ongoing need for the 3.5 units then we should be able to reuse the 7 jails. <br />
      Thanks, <br />
      Vic <br />
    </Message>
    <SectionSpacingBottom />

    <ChatDate title="17 March 21" />
    <SectionSpacingBottom />

    <Event type="success">Action Acknowledged by Vic Beall (VolcanoTek)</Event>
    <SectionSpacingBottom />

    <ChatDate title="17 March 21" />
    <SectionSpacingBottom />

    <Message title="Bob Press (LaptopGems)" time="2:30pm" className={classes.chatLeft}>
      Hi Vic, <br /><br />
      As discussed, please send RFQ by 4/7/21.
      <br /><br />
      Thanks<br />
      Bob
    </Message>
    <SectionSpacingBottom />

    <Event type="success">Action Initiated by Bob Press (LaptopGems)</Event>
    <SectionSpacingBottom />
  </>);
});

if (process.env.NODE_ENV !== 'production') {
  ChatSection.displayName = 'containers__ChatSection';
}

ChatSection.defaultProps = {};

export default withStyles(styles, { name: 'ChatSection' })(ChatSection);

