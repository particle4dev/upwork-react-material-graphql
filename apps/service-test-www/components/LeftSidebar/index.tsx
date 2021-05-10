import * as React from 'react';
import classnames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { WithStyles, createStyles, withStyles, Theme } from '@material-ui/core';
import { ReactComponent as LogoIcon } from './logo.svg';
import { ReactComponent as HomeIcon } from './home.svg';
import { ReactComponent as InboxIcon } from './inbox.svg';
import { ReactComponent as SettingsIcon } from './setting.svg';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('components:LeftSidebar');

export const styles = (theme: Theme) => createStyles({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 12,
  },

  paper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
    borderRight: 'none',
    background: '#252F3D'
  },

  paperClose: {
    overflowX: 'hidden',
    width: 60,
    // width: theme.spacing(7),
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing(9),
    // }
  },

  docked: {
    height: '100%'
  },

  icon: {
    position: 'relative',
    width: 60,
    height: 52,
    padding: '8px 22px 8px 22px',
    marginBottom: 12,
    justifyContent: 'center',

    '& svg': {
      fill: '#3E4D67'
    },
  },

  listItem: {
    display: 'block',
    minWidth: 'auto',
  },

  iconSelected: {
    backgroundColor: '#3E4D67 !important',

    '& svg': {
      fill: '#fff'
    },
  },
});

type LeftSidebarProps = WithStyles<typeof styles>;

const LeftSidebar = React.forwardRef(function DICDrawer({ classes }: LeftSidebarProps, ref: React.Ref<HTMLElement>) {
  debug(`render`);

  const [value, setValue] = React.useState(1);

  // Note: avoid to create a new function every time re-render happens
  function onClickHomeIcon() {
    setValue(0);
  }

  function onClickInboxIcon() {
    setValue(1);
  }

  function onClickSettingIcon() {
    setValue(2);
  }

  return (
    <Drawer
      ref={ref}
      open={true}
      variant="permanent"
      classes={{
        docked: classes.docked,
        paper: classnames(classes.paper, classes.paperClose)
      }}
      anchor="left"
    >
      <div className={classes.toolbar}>
        <LogoIcon width={45} height={45} />
      </div>
      <List disablePadding>
        <ListItem
          button
          selected={value === 0}
          onClick={onClickHomeIcon}
          className={classnames(classes.icon, {
            [classes.iconSelected]: value === 0
          })}
        >
          <ListItemIcon className={classes.listItem}>
            <HomeIcon width={28} height={28} />
          </ListItemIcon>
        </ListItem>
        <ListItem
          button
          selected={value === 1}
          onClick={onClickInboxIcon}
          className={classnames(classes.icon, {
            [classes.iconSelected]: value === 1
          })}
        >
          <ListItemIcon className={classes.listItem}>
            <InboxIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem
          button
          selected={value === 2}
          onClick={onClickSettingIcon}
          className={classnames(classes.icon, {
            [classes.iconSelected]: value === 2
          })}
        >
          <ListItemIcon className={classes.listItem}>
            <SettingsIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
});

if (process.env.NODE_ENV !== 'production') {
  LeftSidebar.displayName = 'components__LeftSidebar';
}

LeftSidebar.defaultProps = {};

export default withStyles(styles, { name: 'LeftSidebar' })(LeftSidebar);
