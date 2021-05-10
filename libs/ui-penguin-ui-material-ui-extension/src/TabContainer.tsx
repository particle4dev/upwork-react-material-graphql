import * as React from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/react:TabContainer');

const useStyles = makeStyles({
  tabContainer: {
    display: 'none',
    '&.isActive': {
      display: 'block'
    }
  }
});

export type TabContainerProps = {
  children: React.ReactNode,
  readonly id?: string,
  readonly 'aria-labelledby'?: string,
  readonly selected?: boolean,
  readonly className?: string
};

const TabContainer = React.forwardRef(function TabContainer(props: TabContainerProps, ref: React.Ref<HTMLDivElement>) {
  debug('render');
  const classes = useStyles({});
  const { children, id, 'aria-labelledby': ariaLabelledby, className, selected, ...other } = props;
  const classesTabContainer = classnames(
    classes.tabContainer,
    {
      isActive: selected
    },
    className
  );
  return (
    <div
      className={classesTabContainer}
      ref={ref}
      role="tabpanel"
      hidden={selected}
      id={id}
      aria-labelledby={ariaLabelledby}
      {...other}>
      {children}
    </div>
  );
});

if (process.env.NODE_ENV !== 'production') {
  TabContainer.displayName = 'penguin_ui__TabContainer';
}

TabContainer.defaultProps = {
  selected: false
};

export default TabContainer;
