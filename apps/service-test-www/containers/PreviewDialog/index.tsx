import * as React from 'react';
import { WithStyles, createStyles, withStyles, Theme } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Divider from '@material-ui/core/Divider';
import Popover from '@material-ui/core/Popover';
import ChatSection from './ChatSection';
import CustomStepIcon from './CustomStepIcon';
import { useHomeContext } from '../HomeContext';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('containers:ReviewsDialog');

function getSteps() {
  return ['Initiated', 'Acknowledged', 'Pending Submission', 'Approved', 'Completed'];
}

const styles = (theme: Theme) => createStyles({
  flexContainer: {
    display: 'inline-flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },

  overview: {
    margin: `0 -${theme.spacing(2)}px`
  },

  expand: {
    marginLeft: 9,
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },

  expandOpen: {
    transform: 'rotate(180deg)',
  },

  stepper: {
    padding: '12px 0'
  },

  step: {

    '&:first-child': {
      paddingLeft: 0
    }
  },

  icon: {
    color: '#757575',
  },

  popover: {
    pointerEvents: 'none',
  },

  paper: {
    padding: 8
  },
});

export type PreviewDialogProps = WithStyles<typeof styles>;

const PreviewDialog = React.forwardRef(function PreviewDialog({ classes }: PreviewDialogProps, ref: React.Ref<HTMLDivElement>) {
  debug('render');

  const steps = getSteps();

  const [state] = useHomeContext();

  const [isHover, setHover] = React.useState<boolean>(false);

  const handlePopoverOpen = () => {
    if(!isHover) {
      setHover(true);
    }
  };

  const handlePopoverClose = () => {
    if(isHover) {
      setHover(false);
    }
  };

  return (
    <Popover
      className={classes.popover}
      classes={{
        paper: classes.paper,
      }}
      open={!!state.previewDialog.position && !state.detailDialogStatus && (state.previewDialog.open || isHover)}
      anchorEl={state.previewDialog.position}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      disableRestoreFocus
    >

      <div
        ref={ref}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        style={{
          width: 600,
          pointerEvents: 'auto'
        }}
      >
        <AppBar color="inherit" elevation={0} position="static">
          <Toolbar style={{
            height: 48,
            minHeight: 48,
            padding: '12px 14px'
          }}>
            <Typography variant="h6" style={{
              marginLeft: 10
            }}>
            RFQ for Furnace 3.4
            </Typography>
          </Toolbar>
        </AppBar>
        <Divider />

        <div className={classes.overview}>
          <div>
            <Stepper activeStep={2} alternativeLabel className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label} className={classes.step}>
                  <StepLabel StepIconComponent={CustomStepIcon}>
                    <Typography variant="body2">
                      {label}
                    </Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
        </div>

        <DialogContent style={{
          display: 'flex',
          flexDirection: 'column',
          contain: 'layout style',
          padding: '0px 14px'
        }}>
          <ChatSection />
        </DialogContent>
      </div>
    </Popover>
  );
});

if (process.env.NODE_ENV !== 'production') {
  PreviewDialog.displayName = 'containers__PreviewDialog';
}

PreviewDialog.defaultProps = {};

export default withStyles(styles, {name: 'PreviewDialog'})(PreviewDialog);
