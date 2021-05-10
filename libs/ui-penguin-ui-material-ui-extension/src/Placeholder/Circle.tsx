import React from 'react';
import ClassNames from 'classnames';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';
import Animation from './Animation';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/material-ui-extension:Placeholder:Circle');

const styles = () => createStyles({
  root: {
    borderRadius: '50%',
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 56,
    height: 56
  }
});

export type ICircleProps = WithStyles<typeof styles> & {
  readonly style?: React.CSSProperties,
  readonly className?: string
}

const Circle = React.forwardRef(function Circle(props: ICircleProps, ref: React.Ref<HTMLElement>) {
  debug('render');
  const { className, classes, style } = props;
  const classesCircle = ClassNames(classes.root, className);

  return <Animation ref={ref} className={classesCircle} style={style} />;
});

if (process.env.NODE_ENV !== 'production') {
  Circle.displayName = 'penguin_ui_mui_extension__Placeholder_Circle';
}

Circle.defaultProps = {
  className: '',
  style: {}
};

export default withStyles(styles, { name: 'penguin_ui_mui_extension__Placeholder_Circle' })(Circle);
