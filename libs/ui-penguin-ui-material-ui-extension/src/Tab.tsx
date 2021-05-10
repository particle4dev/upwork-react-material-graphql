import * as React from 'react';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Tab, { TabProps } from '@material-ui/core/Tab';

// interface StyledTabProps extends TabProps {
//   label: string | React.ReactNode,
//   dataValue?: string,
// }

type StyledTabProps = TabProps & {
  label: string | React.ReactNode,
  dataValue?: string,
  component?: string,
  href?: string,
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
    /* Styles applied to the root element if both `icon` and `label` are provided. */
    labelIcon: {
      minHeight: 72,
      paddingTop: 9,
      '& $wrapper > *:first-child': {
        marginRight: 6,
        marginBottom: 0
      },
    },
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'row',
    },
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

export default StyledTab;
