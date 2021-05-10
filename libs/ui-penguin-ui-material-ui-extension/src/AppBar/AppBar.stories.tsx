import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { withKnobs } from "@storybook/addon-knobs";
import ToolbarSection from '../ToolbarSection';
import Content from '../Content';
import AppBar from './AppBar';

export default {
  title: "AppBar",
  decorators: [withKnobs]
};

export const Basic = () => (<>
  <AppBar color="primary">
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
  <Content top={64}>
    <Container>
      <Box my={2}>
        {[...new Array(12)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')}
      </Box>
    </Container>
  </Content>
</>);
