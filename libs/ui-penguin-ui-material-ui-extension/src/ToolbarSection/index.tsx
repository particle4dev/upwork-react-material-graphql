import * as React from 'react';
import ClassNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/material-ui-extension:ToolbarSection');

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
    flex: 1,
    alignItems: 'start',
    justifyContent: 'center',
    boxSizing: 'border-box',
    minWidth: 0,
    height: '100%',
  },

  root__alignStart: {
    justifyContent: 'flex-start',
    order: -1,
  },

  root__alignEnd: {
    justifyContent: 'flex-end',
    order: 1,
  }
}), {name: 'ToolbarSection'});

export type ToolbarSectionProps = {
  start?: boolean,
  end?: boolean,
  className?: string,
  children: React.ReactNode,
  style?: React.CSSProperties
}

function ToolbarSection({ start, end, className, children, ...other }: ToolbarSectionProps) {
  debug('render');

  const classes = useStyles({});

  const cls = ClassNames(classes.root, {
    [classes.root__alignStart]: start,
    [classes.root__alignEnd]: end,
  }, className);

  return (<section className={cls} {...other}>{children}</section>);
}

if (process.env.NODE_ENV !== 'production') {
  ToolbarSection.displayName = 'penguin_ui_material_ui_extension__ToolbarSection';
}

ToolbarSection.defaultProps = {
  start: true,
  end: false
};

export default ToolbarSection;
