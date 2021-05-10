import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { useHomeContext, updateDetailDialog, addNewRow, removeRow, updateDataId, updatePreviewDialog } from '../HomeContext';
import Tag from '../../components/Tag';
import CustomCheckbox from '../../components/CustomCheckbox';
import ChatBubble from '../../components/ChatBubble';
import TimeColor from '../../components/TimeColor';
import TextOneLine from '../../components/TextOneLine';
import { ReactComponent as WarningIcon } from './warning.svg';
import { ReactComponent as WatchLaterIcon } from './watchlater.svg';
import { ReactComponent as NothingIcon } from './nothing.svg';
import CollapseTags from './CollapseTags';
import { DataRow, RowTag } from '../../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('components:DataTableRow');

type DataTableRowProps = WithStyles<typeof styles> & {
  data: DataRow;
};

const TIME_DELAY = 500;
const TIME_DELAY_FOR_CHECK_CURSORMOVING = 50;

export const styles = () => createStyles({
  checkedCheckbox: {
    color: '#007DFF !important'
  },

  sizeSmall: {
    padding: '10px 24px 3px 16px'
  },

  tableRow: {
    '&:hover': {
      backgroundColor: '#F2F7FB !important'
    }
  },

  status: {
    fontFamily: 'Arial',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: '0.1px',
    marginLeft: 7,
  },

  subject: {
    color: '#3C4693',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '20px',
    letterSpacing: '0.15px',
  },

  tableCell: {
    cursor: 'pointer'
  }
});

const DataTableRow = React.forwardRef(function DataTableRow({ classes, data }: DataTableRowProps, ref: React.Ref<HTMLElement>) {
  debug(`render`);

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const [state, dispatch] = useHomeContext();

  const [checked, setChecked] = React.useState(false);

  const [mouseMoving, setMouseMoving] = React.useState(false);

  const timeoutRef = React.useRef<number | null>();

  function onClickCheckboxItem(evt: React.SyntheticEvent) {
    evt.stopPropagation();
    setChecked(oldValue => !oldValue);
    if(state.editAction.indexOf(data.id) === -1) {
      dispatch(addNewRow(data.id));
    } else {
      dispatch(removeRow(data.id));
    }
  }

  function onClickRow(evt: React.SyntheticEvent) {
    evt.preventDefault();
    dispatch(updateDataId(data.id));
    dispatch(updateDetailDialog(true));
    dispatch(updatePreviewDialog(false)); // close preview dialog
  }

  function setMouseMove(evt: React.SyntheticEvent) {
    evt.preventDefault();

    if(!mouseMoving) {
      setMouseMoving(true);
    }

    (() => {
      window.clearInterval(timeoutRef.current || 0);

      timeoutRef.current = window.setTimeout(() => setMouseMoving(false), TIME_DELAY_FOR_CHECK_CURSORMOVING);
    })();
  }

  const timeoutOpenDialogRef = React.useRef<number | null>();

  React.useEffect(() => {
    if(anchorEl && !mouseMoving) {
      // open
      (() => {
        window.clearInterval(timeoutOpenDialogRef.current || 0);

        timeoutOpenDialogRef.current = window.setTimeout(() => {
          // check anchorEl again before open it
          // - we ONLY open when anchorEl is set
          // - don't show Preview Dialog when Detail Dialog is displayed
          if(anchorEl && !mouseMoving && !state.detailDialogStatus) {
            dispatch(updatePreviewDialog(true, anchorEl));
          }
        }, TIME_DELAY - TIME_DELAY_FOR_CHECK_CURSORMOVING);
      })();
    }
    if(!anchorEl && mouseMoving) {
      // close
      (() => {
        window.clearInterval(timeoutOpenDialogRef.current || 0);

        timeoutOpenDialogRef.current = window.setTimeout(() => {
          dispatch(updatePreviewDialog(false));
        }, 150);
      })();
    }

  }, [anchorEl, mouseMoving]);

  React.useEffect(() => {
    setChecked(state.isSelectALl);
    if(state.isSelectALl) {
      dispatch(addNewRow(data.id));
    } else {
      dispatch(removeRow(data.id));
    }
  }, [state.isSelectALl, data.id]);

  return (
    <TableRow hover onClick={onClickRow} className={classes.tableRow}>
      <TableCell padding="checkbox" classes={{
        sizeSmall: classes.sizeSmall
      }}>
        <CustomCheckbox checked={checked} onClick={onClickCheckboxItem} />
      </TableCell>
      <TableCell component="th" scope="row" style={{
        padding: '4px 24px 3px 0px'
      }}>
        <div style={{
          padding: 11,
          display: 'inline-flex',
          flex: '0 0 auto'
        }}>
          {data.type === 'warning' && <WarningIcon style={{ marginRight: 20 }} />}
          {data.type === 'watch-later' && <WatchLaterIcon style={{ marginRight: 20 }} />}
          {data.type !== 'warning' && data.type !== 'watch-later' && <NothingIcon style={{ marginRight: 20 }} />}
          <TextOneLine className={classes.status}>{data.status}</TextOneLine>
        </div>
      </TableCell>
      <TableCell
        className={classes.tableCell}
        classes={{
          sizeSmall: classes.sizeSmall
        }}
        onMouseMove={setMouseMove}
      >
        <div
        style={{
          display: 'flex',
          alignContent: 'center'
        }}>
          <div
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Typography
              variant="body1"
              component="span"
              className={classes.subject}
            >
              <TextOneLine>{data.subject.label} </TextOneLine>
            </Typography>
            {data.subject.message > 0 && <ChatBubble number={data.subject.message} style={{
              marginLeft: 16,
              paddingTop: 3
            }}/>}
          </div>
        </div>
      </TableCell>
      <TableCell classes={{
        sizeSmall: classes.sizeSmall
      }}>
        <TimeColor type={data.type}><TextOneLine>{data.dueOn}</TextOneLine></TimeColor>
      </TableCell>
      <TableCell classes={{
        sizeSmall: classes.sizeSmall
      }}><TextOneLine>{data.assignedBy}</TextOneLine></TableCell>
      <TableCell classes={{
        sizeSmall: classes.sizeSmall
      }}
      style={{
        paddingTop: 5,
        position: 'relative'
      }}
      >
        <CollapseTags>
          {data.tags.map((e: RowTag) => <Tag key={e.id} id={e.id} type={e.type} avatar={e.avatar} label={e.label} />)}
        </CollapseTags>
      </TableCell>
    </TableRow>
  );
});

if (process.env.NODE_ENV !== 'production') {
  DataTableRow.displayName = 'components__DataTableRow';
}

DataTableRow.defaultProps = {};

export default withStyles(styles, { name: 'DataTableRow' })(DataTableRow);
