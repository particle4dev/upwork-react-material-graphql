import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('components:GlobalStyle');

const useStyles = makeStyles({
  '@global': {
    a: {
      '&:active, &:hover, &:focus, &': {
        textDecoration: 'none',
      }
    },

    body: {
      backgroundColor: '#F6F7F9'
    },

    '#data-table::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
      borderRadius: '10px',
      backgroundColor: '#F5F5F5',
    },
    '#data-table::-webkit-scrollbar': {
      width: '12px',
      backgroundColor: '#F5F5F5',
    },

    '#data-table::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,.3)',
      backgroundColor: '#555'
    }
  }
});

function GlobalStyle() {
  debug('render');

  useStyles({});

  return null;
}

if (process.env.NODE_ENV !== 'production') {
  GlobalStyle.displayName = 'components__GlobalStyle';
}

GlobalStyle.defaultProps = {};

export default GlobalStyle;
