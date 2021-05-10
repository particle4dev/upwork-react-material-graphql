import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

type TextProps = TypographyProps & {
  component?: string;
}

const Text = withStyles(() =>
  createStyles({
    root: {
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '21px',
      letterSpacing: '0.15px',
    }
  }),
)((props: TextProps) => <Typography variant="body1" {...props} />);

export default Text;

