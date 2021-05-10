import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import ToolbarSection from './index';

export default {
  component: ToolbarSection,
  title: 'ToolbarSection',
};

export const Basic = () => {
  return (
    <AppBar>
      <Toolbar>
        <ToolbarSection
          start
          style={{
            flex: 2,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
        </ToolbarSection>
        <ToolbarSection end>
          <Button
            variant="contained"
            color="primary"
            disableElevation
          >
            Sign In
          </Button>
        </ToolbarSection>
      </Toolbar>
    </AppBar>
  );
};

