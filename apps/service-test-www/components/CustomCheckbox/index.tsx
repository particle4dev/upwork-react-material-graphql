import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

const CustomCheckbox = withStyles(() =>
  createStyles({
    checked: {
      color: '#007DFF !important'
    }
  }),
)((props: CheckboxProps) => <Checkbox {...props} />);

export default CustomCheckbox;

