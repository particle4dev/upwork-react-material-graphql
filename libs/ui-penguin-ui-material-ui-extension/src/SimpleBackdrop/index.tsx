import * as React from 'react';
import ClassNames from 'classnames';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  /* Styles applied to the root element. */
  root: {
    zIndex: theme.zIndex.modal,
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    // Disable scroll capabilities.
    touchAction: 'none',
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent',
  }
}));

type IHeaderProps = {
  readonly invisible?: boolean,
  readonly open: boolean
}

function SimpleBackdrop(props: IHeaderProps) {
  const { invisible = false, open } = props;

  const classes = useStyles({});
  const rootClasses = ClassNames(classes.root, {
    [classes.invisible]: invisible
  });
  return open ? (
    <div
      className={rootClasses}
      data-mui-test="SimpleBackdrop"
      aria-hidden
    />
  ) : null;
}

SimpleBackdrop.defaultProps = {
  invisible: false
};

if (process.env.NODE_ENV !== 'production') {
  SimpleBackdrop.displayName = 'penguin_ui_material_ui_extension__SimpleBackdrop';
}

export default SimpleBackdrop;
