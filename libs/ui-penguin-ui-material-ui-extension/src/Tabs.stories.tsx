import * as React from 'react';
import HeadsetIcon from '@material-ui/icons/Headset';
import BookIcon from '@material-ui/icons/Book';
import Tab from './Tab';
import Tabs from './Tabs';
import TabContainer from './TabContainer';
import { AppBar } from './AppBar';
import Content from './Content';

export default {
  component: Tabs,
  title: 'Tabs',
};

export const Basic = () => {
  const [value, setValue] = React.useState('Ebooks');

  const onChange = (event: React.SyntheticEvent, value: string) => {
    // event.preventDefault();
    setValue(value);
  };

  return (<>
    <AppBar>
      <Tabs
        value={value}
        onChange={onChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab
          id="scrollable-force-tab-ebooks"
          ariaControls="scrollable-force-tabpanel-ebooks"
          component={"a" as string}
          icon={<BookIcon />}
          value="Ebooks"
          label="Ebooks"
        />
        <Tab
          id="scrollable-force-tab-audiobooks"
          ariaControls="scrollable-force-tabpanel-audiobooks"
          component={'a' as string}
          icon={<HeadsetIcon />}
          value="Audiobooks"
          label="Audiobooks"
        />
      </Tabs>
    </AppBar>
    <Content top={64}>
      <TabContainer
        selected={value === "Ebooks"}
        id="scrollable-force-tabpanel-ebooks"
        ariaLabelledby="scrollable-force-tab-ebooks"
      >Ebooks</TabContainer>
      <TabContainer
        selected={value === "Audiobooks"}
        id="scrollable-force-tabpanel-audiobooks"
        ariaLabelledby="scrollable-force-tab-audiobooks"
      >Audiobooks</TabContainer>
    </Content>
  </>);
};
