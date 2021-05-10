import * as React from "react";
import classnames from 'classnames';
import { WithStyles, createStyles, withStyles, Theme } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import { AppBar, ToolbarSection } from '@penguin-ui/material-ui-extension';
import { ReactComponent as NotificationsIcon } from './notification.svg';
import { ReactComponent as SearchIcon } from './search.svg';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('containers:Navbar');

const styles = (theme: Theme) => createStyles({
  root: {
    boxShadow: 'none',
    // backgroundColor: theme.palette.background.default,
    backgroundColor: '#fff',
    // left: 72
    paddingLeft: 60
  },

  avatar: {
    margin: '8px 0px 8px 12px',
    width: 40,
    height: 40,

    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '26px',
    letterSpacing: '0.46px',
    textAlign: 'left'
  },

  searchButton: {
    margin: '8px 12px',
  },

  searchIcon: {
    width: 19,
    height: 19,
    color: '#C5C5C5'
  },

  indicator: {
    display: 'none'
  },

  nav: {
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '26px',
    letterSpacing: '0.46px',
  },

  volcanotek: {
    width: 229,
  },

  moofisk: {
    width: 222,
  },

  toolbar: {
    minHeight: 60,
  },

  endTab: {
    alignContent: 'center',
  },

  badge: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '12px',
    letterSpacing: '0.14px',
    textAlign: 'center',

    backgroundColor: '#FC6471',
    top: -1,
    right: -13
  },

  time: {
    display: 'flex',
    flexDirection: 'column',
    margin: '8px 16px 0 28px',
  },

  timeDay: {
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '26px',
    letterSpacing: '0.46px',
    color: '#9E9F9E',
    textAlign: 'center'
  },

  timeMonth: {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '26px',
    letterSpacing: '0.46px',
    color: '#9E9F9E',
    textAlign: 'center'
  },

  onlyForBigScreen: {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
  },
});

type INavbarProps = WithStyles<typeof styles> & {
  title?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

function Navbar({ children, classes, title, style }: INavbarProps) {
  debug('render');

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar className={classes.root} style={style} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <ToolbarSection
          start
          style={{
            flex: 1,
          }}
        >
          <Tabs value={value} onChange={handleChange} className={classes.onlyForBigScreen} classes={{
            indicator: classes.indicator
          }}>
            <Tab label="Volcanotek" className={classnames(classes.volcanotek, classes.nav)} />
            <Tab label="Moofisk" className={classnames(classes.moofisk, classes.nav)} />
          </Tabs>
        </ToolbarSection>

        <ToolbarSection end className={classes.endTab}>
          <IconButton aria-label="search" className={classes.searchButton}>
            <SearchIcon fontSize="inherit" className={classes.searchIcon} />
          </IconButton>

          <IconButton aria-label="notification" className={classes.searchButton}>
            <Badge badgeContent={12} max={99} color="secondary" classes={{
              badge: classes.badge
            }}>
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <div className={classes.time}>
            <div className={classes.timeDay}>2</div>
            <div className={classes.timeMonth}>APRIL</div>
          </div>

          <Avatar alt="Remy Sharp" className={classes.avatar}>BP</Avatar>
        </ToolbarSection>
      </Toolbar>
      {children}
    </AppBar>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Navbar.displayName = 'containers__Navbar';
}

Navbar.defaultProps = {
  title: null
};

export default React.memo(withStyles(styles, {name: 'Navbar'})(Navbar));
