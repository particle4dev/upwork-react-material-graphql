import * as React from 'react';
import classnames from 'classnames';
import { WithStyles, createStyles, withStyles, Theme } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import ButtonActionGroup from '../../components/ButtonActionGroup';
import { useHomeContext } from '../HomeContext';
import FilterActions from './FilterActions';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('containers:UnderlineNavAction');

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    marginBottom: 10,
  },

  start: {
    flex: '1 1 auto'
  },

  end: {
    flex: '0 0 auto'
  },

  tab: {
    fontFamily: 'Roboto',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '26px',
    letterSpacing: '0.46px',
  },

  onlyForSmallScreen: {
    display: 'none',

    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
  },

  onlyForBigScreen: {
    display: 'block',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
});

type UnderlineNavActionProps = WithStyles<typeof styles>;

function UnderlineNavAction({ classes }: UnderlineNavActionProps) {
  debug(`render`);

  const [state] = useHomeContext();

  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classnames(classes.start, classes.onlyForBigScreen)}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto">
        <Tab label="Assigned to me (12)" className={classes.tab} style={{
          minWidth: 220
        }} />
        <Tab label="Assigned by me (2)" className={classes.tab} style={{
          minWidth: 185
        }} />
        <Tab label="cc’d (3)" className={classes.tab} style={{
          minWidth: 95
        }}/>
        <Tab label="completed" className={classes.tab} style={{
          minWidth: 145
        }} />
      </Tabs>

      <div className={classnames(classes.start, classes.onlyForSmallScreen)}>
        <FilterActions />
      </div>

      <div className={classes.end}>
        {state.editAction.length > 0 && <ButtonActionGroup />}
        <Button variant="outlined" color="primary">
          + Add Action
        </Button>
      </div>
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  UnderlineNavAction.displayName = 'containers__UnderlineNavAction';
}

UnderlineNavAction.defaultProps = {};

export default withStyles(styles, { name: 'UnderlineNavAction' })(UnderlineNavAction);
