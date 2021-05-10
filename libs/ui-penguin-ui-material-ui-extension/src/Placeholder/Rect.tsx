import React from 'react';
import ClassNames from 'classnames';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';
import Animation from './Animation';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/material-ui-extension:Placeholder:Rect');

const styles = () => createStyles({
  root: {
    borderRadius: 4,
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 48,
    height: 48
  }
});

export type ILineProps = WithStyles<typeof styles> & {
  readonly style?: React.CSSProperties,
  readonly className?: string
}
const Rect = React.forwardRef(function Rect(props: ILineProps, ref: React.Ref<HTMLElement>) {
  debug('render');

  const { className, classes, style } = props;
  const classesLine = ClassNames(
    classes.root,
    className
  );

  return <Animation ref={ref} className={classesLine} style={style} />;
});

if (process.env.NODE_ENV !== 'production') {
  Rect.displayName = 'penguin_ui_mui_extension__Placeholder_Rect';
}

Rect.defaultProps = {
  className: ''
};

export default withStyles(styles, { name: 'penguin_ui_mui_extension__Placeholder_Rect' })(Rect);
