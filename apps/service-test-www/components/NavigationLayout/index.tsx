import * as React from 'react';
import { WithStyles, createStyles, withStyles, Theme } from '@material-ui/core';
import LeftSidebar from '../LeftSidebar';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('components:NavigationLayout');

const styles = (theme: Theme) => createStyles({
  content: {
    flexGrow: 1,
    marginLeft: 60,
    minHeight: '100%'
  },

  dicoDrawer: {
    position: 'fixed',
    top: 0,
    left: 0,
    boxSizing: 'border-box',
    width: 60,
    maxWidth: 60,
    height: '100%',
    overflow: 'hidden',
    contain: 'strict',
    zIndex: theme.zIndex.drawer,
  }
});

type NavigationLayoutProps = WithStyles<typeof styles> & {
  children?: React.ReactNode;
}

function NavigationLayout({ classes, children }: NavigationLayoutProps) {
  debug(`render`);

  return (
    <>
      <aside className={classes.dicoDrawer}>
        <LeftSidebar />
      </aside>
      <main className={classes.content}>{children}</main>
    </>
  );
}

if (process.env.NODE_ENV !== 'production') {
  NavigationLayout.displayName = 'components__NavigationLayout';
}

NavigationLayout.defaultProps = {};

export default withStyles(styles)(NavigationLayout);
