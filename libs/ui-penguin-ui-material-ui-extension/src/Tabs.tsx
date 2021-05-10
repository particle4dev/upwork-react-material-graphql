import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs, { TabsProps } from '@material-ui/core/Tabs';

interface StyledTabsProps extends Omit<TabsProps, "onChange"> {
  value: string | number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (event: React.SyntheticEvent, value: any) => void
}

const StyledTabs = withStyles({
  root: {
    overflow: 'visible',
    minHeight: 48,
    WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
    display: 'flex',
  },
  // indicator: {
  // display: 'flex',
  // justifyContent: 'center',
  // backgroundColor: 'transparent',
  // '& > div': {
  //     maxWidth: 40,
  //     width: '100%',
  //     backgroundColor: '#635ee7',
  // },
  // },
})((props: StyledTabsProps) => <Tabs {...props} />);

// TabIndicatorProps={{ children: <div /> }}

export default StyledTabs;
