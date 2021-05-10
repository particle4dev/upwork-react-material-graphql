import * as React from 'react';
import Router from 'next/router';
import { SimpleBackdrop, ProgressBar } from '@penguin-ui/material-ui-extension';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('ui-mui-next-global:Global');

const linearProgress = <ProgressBar />;

function Global() {
  debug('render');

  const [backdropStatus, setBackdropStatus] = React.useState(false);

  React.useEffect(() => {

    const routeChangeStart = () => {
      setBackdropStatus(true);
    };

    const routeChangeComplete = () => {
      setBackdropStatus(false);
    };

    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeComplete);

    return () => {
      Router.events.off('routeChangeStart', routeChangeStart);
      Router.events.off('routeChangeComplete', routeChangeComplete);
    };

  }, []);

  return (<>
    {backdropStatus && linearProgress}
    <SimpleBackdrop open={backdropStatus} />
  </>);
}

if (process.env.NODE_ENV !== 'production') {
  Global.displayName = 'ui_mui_global__Global';
}

Global.defaultProps = {};

export default Global;
