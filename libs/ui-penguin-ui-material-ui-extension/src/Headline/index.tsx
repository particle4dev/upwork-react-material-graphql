import * as React from 'react';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/material-ui-extension:Headline');

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  action: {
    flex: '0 0 auto',
    // alignSelf: 'flex-start',
  },
  content: {
    flex: '1 1 auto',
  },
}), {name: 'Headline'});

export type HeadlineProps = {
  subheader?: string,
  className?: string,
  style?: React.CSSProperties,
  component?: React.ElementType,
  action?: React.ReactNode,
  children?: React.ReactNode,
}

const Headline = React.forwardRef(function Headline(props: HeadlineProps, ref: React.Ref<HTMLDivElement>) {
  debug('render');

  const {
    children,
    subheader,
    action,
    className,
    component: Component = 'div',
    ...other
  } = props;

  const classes = useStyles({});

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <div className={classes.content}>
        <Typography component={Component} variant="h5">{children}</Typography>
        {props.subheader && <Typography variant="body2">{subheader}</Typography>}
      </div>
      {action && <div className={classes.action}>{action}</div>}
    </div>
  );
});

if (process.env.NODE_ENV !== 'production') {
  Headline.displayName = 'penguin_ui_material_ui_extension__Headline';
}

Headline.defaultProps = {};

export default React.memo(Headline);
