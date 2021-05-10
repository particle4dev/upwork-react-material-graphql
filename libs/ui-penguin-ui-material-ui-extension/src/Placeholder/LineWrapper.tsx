import * as React from 'react';
import ClassNames from 'classnames';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/material-ui-extension:Placeholder:LineWrapper');

const styles = () => createStyles({
  placeholder__lineWrapper: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: 10
  }
});

export type ILineWrapperProps = WithStyles<typeof styles> & {
  readonly className?: string,
  children: React.ReactNode
}

const LineWrapper = React.forwardRef(function LineWrapper(props: ILineWrapperProps, ref: React.Ref<HTMLDivElement>) {
  debug('render');

  const { className, classes, children } = props;
  const classesLineWrapper = ClassNames(
    classes.placeholder__lineWrapper,
    className
  );
  return <div ref={ref} className={classesLineWrapper}>{children}</div>;
});

if (process.env.NODE_ENV !== 'production') {
  LineWrapper.displayName = 'penguin_ui_mui_extension__Placeholder_LineWrapper';
}

LineWrapper.defaultProps = {
  className: '',
  children: null
};

export default withStyles(styles, { name: 'penguin_ui_mui_extension__Placeholder_LineWrapper' })(LineWrapper);
