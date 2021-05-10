import * as React from 'react';
import HomeContext from './Context';

export const useHomeContext = () => {
  const contextValue = React.useContext(HomeContext);
  return contextValue;
};
