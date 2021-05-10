import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';
import classnames from 'classnames';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('components:TextOneLine');

export const styles = () => createStyles({
  root: {
    clear: 'both',
    display: 'inline-block',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  }
});

type TextOneLineProps = WithStyles<typeof styles> & {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

const TextOneLine = React.forwardRef(function TextOneLine({ classes, className, children, style }: TextOneLineProps, ref: React.Ref<HTMLSpanElement>) {
  debug(`render`);

  const cls = classnames(classes.root, className);

  return (
    <span className={cls} ref={ref} style={style}>{children}</span>
  );
});

if (process.env.NODE_ENV !== 'production') {
  TextOneLine.displayName = 'components__TextOneLine';
}

TextOneLine.defaultProps = {};

export default withStyles(styles, { name: 'TextOneLine' })(TextOneLine);
