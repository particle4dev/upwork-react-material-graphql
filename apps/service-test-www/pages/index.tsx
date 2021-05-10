import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import NavigationLayout from '../components/NavigationLayout';
import UnderlineNavAction from '../containers/UnderlineNavAction';
import Navbar from '../containers/Navbar';
import DetailDialog from '../containers/DetailDialog';
import PreviewDialog from '../containers/PreviewDialog';
import DataTable from '../containers/DataTable';
import { HomeProvider } from '../containers/HomeContext';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('pages:Index');

export const Index = () => {
  debug('render');

  return (<HomeProvider>
    <NavigationLayout>
      <Navbar />
      <div style={{
        marginTop: 60,
        padding: '30px 28px 28px 28px'
      }}>
        <Typography variant="h5" style={{
          fontFamily: 'Arial',
          marginBottom: 8,
          fontSize: '24px',
          fontWeight: 700,
          lineHeight: '32px',
          color: '#253858'
        }}>
          Actions
        </Typography>

        <UnderlineNavAction />

        <DataTable />
      </div>
      <DetailDialog />
      <PreviewDialog />
    </NavigationLayout>
  </HomeProvider>);
};

if (process.env.NODE_ENV !== 'production') {
  Index.displayName = 'pages__Index';
}

Index.defaultProps = {};

export default Index;
