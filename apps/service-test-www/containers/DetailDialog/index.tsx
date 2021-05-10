import * as React from 'react';
import classnames from 'classnames';
import { WithStyles, createStyles, withStyles, Theme } from '@material-ui/core';
import { get } from 'dot-prop';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { ToolbarSection } from '@penguin-ui/material-ui-extension';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {
  SectionSpacingBottom,
} from '@penguin-ui/material-ui-extension';
import Tag from '../../components/Tag';
import Text from '../../components/Text';
import ChatBubble from '../../components/ChatBubble';
import TimeColor from '../../components/TimeColor';
import { useHomeContext, updateDetailDialog, updateDataId } from '../HomeContext';
import ChatSection from './ChatSection';
import MessageSection from './MessageSection';
import CustomStepIcon from './CustomStepIcon';
import { ReactComponent as ExpandMoreIcon } from './expandmoreicon.svg';
import { ReactComponent as ArrowUpwardIcon } from './arrowupward.svg';
import { ReactComponent as ArrowDownwardIcon } from './arrowdownward.svg';
import { ReactComponent as CloseIcon } from './close.svg';
import { DataRow } from '../../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('containers:ReviewsDialog');

const divider = (<Divider style={{
  margin: '16px 0'
}} />);

function RowTitle({ title }: {title: string}) {
  return (<Typography component="span" variant="body2" style={{
    color: '#777777',
    marginRight: 5
  }}>
    {title}
  </Typography>);
}

function getSteps() {
  return ['Initiated', 'Acknowledged', 'Pending Submission', 'Approved', 'Completed'];
}

const styles = (theme: Theme) => createStyles({
  paper: {
    maxWidth: 590,
    overflowX: 'hidden'
  },

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
  }
});

export type DetailDialogProps = WithStyles<typeof styles>;

const DetailDialog = React.forwardRef(function DetailDialog({ classes }: DetailDialogProps, ref: React.Ref<HTMLElement>) {
  debug('render');

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    setExpanded(!expanded);
  };

  const steps = getSteps();

  const [state, dispatch] = useHomeContext();

  const { tableData, selectDataId } = state;

  const data = tableData.find((e: DataRow) => e.id === selectDataId);

  function onHandleClose(evt: React.SyntheticEvent) {
    dispatch(updateDetailDialog(false));
    dispatch(updateDataId(null));
  }

  return (
    <Drawer
      ref={ref}
      open={state.detailDialogStatus}
      anchor="right"
      onClose={onHandleClose}
      classes={{
        paper: classes.paper
      }}
    >

      <AppBar color="inherit" elevation={0} position="static">
        <Toolbar style={{
          height: 48,
          minHeight: 48,
          padding: '12px 14px'
        }}>
          <ToolbarSection
            start
            style={{
              flex: '2 1 0%',
              marginLeft: 10
            }}
          >
            <Typography variant="h6">
              {get(data, 'subject.label', '')}
            </Typography>
          </ToolbarSection>

          <ToolbarSection end>
            <IconButton size="small" color="inherit" aria-label="up" className={classes.icon} style={{
              marginRight: 15,
              padding: 1
            }}>
              <ArrowUpwardIcon />
            </IconButton>

            <IconButton size="small" color="inherit" aria-label="down" className={classes.icon} style={{
              marginRight: 22,
              padding: 1
            }}>
              <ArrowDownwardIcon />
            </IconButton>

            <IconButton size="small" edge="end" color="inherit" onClick={onHandleClose} className={classes.icon} aria-label="close" style={{
              padding: 1
            }}>
              <CloseIcon />
            </IconButton>
          </ToolbarSection>

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

      <Divider />

      <DialogContent style={{
        display: 'flex',
        flexDirection: 'column',
        contain: 'layout style',
        padding: '0px 14px'
      }}>
        <SectionSpacingBottom />
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <RowTitle title="Assigned to" />
            Vic Beall (VolcanoTek)
          </Grid>
          <Grid item xs={6}>
            <RowTitle title="Assigned By" />
            Bob Press (LaptopGems)
          </Grid>
        </Grid>

        {divider}

        <Grid container>
          <Grid item xs={6}>
            <RowTitle title="Due on" />
            <TimeColor type={get(data, 'type', '')}>{get(data, 'dueOn', '')}</TimeColor>
          </Grid>
          <Grid item xs={6}>
            <RowTitle title="Approvers" />
            Tom Pat (LaptopGems)
          </Grid>
        </Grid>

        {divider}

        <div>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Grid container>
              <Grid item xs={12}>
                <RowTitle title="CC" />
                Tom Pat (LaptopGems) - Joe Michellini (VolcanoTek) - Engineering (LaptopGems)
              </Grid>
            </Grid>

            {divider}

            <Grid container>
              <Grid item xs={12}>
                <Typography component="span" variant="body2" style={{
                  color: '#777777',
                  marginRight: 5
                }}>
                  Tags
                </Typography>
                <Tag type="green" avatar="S" label="VolcanoTek"/>
                <Tag type="red" avatar="P" label="Furnace"/>
              </Grid>
            </Grid>

            {divider}

            <RowTitle title="Description" /><br />
            Hi Vic, <br />
            We are working on a plan to stock the Furnace 3.4 Insulation Packs and Heaters into spares/consumables as we transition to Furnace 3.5. <br />
            <br />
            Can you please provide a quote with lead time for the Furnace 3.4 Insulation Packs and heaters at quantity 10/25/50 please? <br />
            <br />
            Thanks <br />
            Bob
            {divider}

            <IconButton size="small" color="inherit" aria-label="up" style={{
              color: '#757575',
            }}>
              <AttachFileIcon />
            </IconButton>

            {divider}

          </Collapse>

          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{
              flex: '1 1 auto',
              display: 'flex',
              alignContent: 'center'
            }}>
              <Typography variant="body1" style={{
                fontWeight: 'bold'
              }}>
                Messages
              </Typography>
              {get(data, 'subject.message', 0) !== 0 && <ChatBubble number={get(data, 'subject.message', 0)} style={{
                marginLeft: 4,
                paddingTop: 3
              }} />}

            </div>
            <div style={{
              flex: '0 0 auto'
            }}>
              <a onClick={handleExpandClick} href="#click-more" style={{
                color: '#0094FF',
              }}>
                <Text>
                  {expanded !== true ? 'More...' : 'Less Details'}
                  <ExpandMoreIcon className={classnames(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })} />
                </Text>
              </a>
            </div>
          </div>
        </div>

        <SectionSpacingBottom />

        <MessageSection />

        <SectionSpacingBottom />

        <div>
          <Button variant="contained" color="primary" style={{
            color: '#fff',
            marginRight: 8
          }}>
            Submit
          </Button>
          <Button variant="outlined" color="primary" style={{
            marginRight: 8
          }}>
            Reassign
          </Button>
          <Button variant="outlined" color="primary" style={{
            marginRight: 8
          }}>
            Propose New date
          </Button>
        </div>

        <SectionSpacingBottom />
        <ChatSection />

      </DialogContent>
    </Drawer>
  );
});

if (process.env.NODE_ENV !== 'production') {
  DetailDialog.displayName = 'containers__DetailDialog';
}

DetailDialog.defaultProps = {};

export default withStyles(styles, {name: 'DetailDialog'})(DetailDialog);
