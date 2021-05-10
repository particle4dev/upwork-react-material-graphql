import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CustomCheckbox from '../../components/CustomCheckbox';
import { useHomeContext, setSelectAll } from '../HomeContext';
import DataTableRow from './DataTableRow';
import { ReactComponent as NarrowIcon } from './narrow.svg';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('containers:DataTable');

export const styles = () => createStyles({
  container: {
    maxHeight: 576,
  },

  table: {
    minWidth: 650,
    backgroundColor: '#fff',
    overflowX: 'hidden'
  },

  tableHead: {
    backgroundColor: '#fff',
  },

  tableHeadRow: {
    minHeight: 56,
    height: 56
  },

  cell: {
    color: '#42526E',
    backgroundColor: '#fff !important'
  },

});

type DataTableProps = WithStyles<typeof styles>;

const DataTable = React.forwardRef(function DataTable({ classes }: DataTableProps, ref: React.Ref<HTMLDivElement>) {
  debug('render');

  const [state, dispatch] = useHomeContext();

  function onClickCheckboxItem(evt: React.SyntheticEvent) {
    dispatch(setSelectAll(!state.isSelectALl));
  }

  return (
    <TableContainer ref={ref} className={classes.container}>
      <Table id="data-table" stickyHeader size="small" className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow className={classes.tableHeadRow}>
            <TableCell padding="checkbox" className={classes.cell} style={{
              width: 52
            }}>
              <CustomCheckbox checked={state.isSelectALl} onClick={onClickCheckboxItem} />
            </TableCell>
            <TableCell className={classes.cell} style={{
              width: 238,
              padding: '6px 24px 6px 10px'
            }}>Status <NarrowIcon style={{
                marginLeft: 15
              }}/></TableCell>
            <TableCell className={classes.cell} style={{
              width: 365
            }}> Subject</TableCell>
            <TableCell className={classes.cell} style={{
              width: 150
            }}>Due On</TableCell>
            <TableCell className={classes.cell} style={{
              width: 219
            }}>Assigned By</TableCell>
            <TableCell id="data-table-tags" className={classes.cell} style={{
              minWidth: 150
            }}>
              Tags
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.tableData.map(row => (<DataTableRow key={row.id} data={row} />))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

if (process.env.NODE_ENV !== 'production') {
  DataTable.displayName = 'containers__DataTable';
}

DataTable.defaultProps = {};

export default withStyles(styles, { name: 'DataTable' })(DataTable);

