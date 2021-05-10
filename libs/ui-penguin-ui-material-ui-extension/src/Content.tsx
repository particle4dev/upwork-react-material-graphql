import * as React from 'react';
import ClassNames from 'classnames';
import { makeStyles, Theme } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/material-ui-extension:Content');

type StyleProps = {
  top: number,
  bottom: number
}

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: StyleProps) => ({
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    // padding: theme.spacing.unit * 3,
    minHeight: '100%',
    marginTop: props.top,
    marginBottom: props.bottom,
    // padding: '40px 24px 24px 24px',
  }),
}), {name: 'Content'});

type IContentProps = {
  children: React.ReactNode,
  className?: string;
  readonly top?: number,
  readonly bottom?: number,
}

const Content = React.forwardRef(function Content(props: IContentProps, ref: React.Ref<HTMLElement>) {
  debug('render');
  const { children, className, top, bottom, ...other } = props;

  const classes = useStyles({
    top,
    bottom
  });

  const cls = ClassNames(classes.root, className);
  return <main ref={ref} className={cls} {...other}>{ children }</main>;
});

if (process.env.NODE_ENV !== 'production') {
  Content.displayName = 'penguin_ui_material_ui_extension__Content';
}

Content.defaultProps = {
  top: 115,
  bottom: 0
};

export default Content;
