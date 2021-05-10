import * as React from 'react';
import SearchContext from './Context';
import reducer, {initialState} from './reducer';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('components:HomeContext:HomeProvider');

export type HomeProviderProps = {
  children: React.ReactNode;
}

const HomeProvider = ({ children }: HomeProviderProps) => {
  debug('render');

  const contextValue = React.useReducer(reducer, initialState);

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

if (process.env.NODE_ENV !== 'production') {
  HomeProvider.displayName = 'components__HomeContext_HomeProvider';
}

HomeProvider.defaultProps = {};

export default HomeProvider;
