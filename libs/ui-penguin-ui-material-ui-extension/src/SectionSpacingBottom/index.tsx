import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/material-ui-extension:SectionSpacingBottom');

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(2),
      height: 0
    }
  }),
);

export type SectionSpacingBottomProps = {
  style?: React.CSSProperties
}

const SectionSpacingBottom = React.forwardRef(function SectionSpacingBottom(props: SectionSpacingBottomProps, ref: React.Ref<HTMLDivElement>) {
  debug('render');

  const classes = useStyles();

  return (
    <div className={classes.root} ref={ref} {...props}>&nbsp;</div>
  );
});

if(process.env.NODE_ENV !== 'production') {
  SectionSpacingBottom.displayName = 'penguin_ui_material_ui_extension__SectionSpacingBottom';
}

SectionSpacingBottom.defaultProps = {};

export default SectionSpacingBottom;
