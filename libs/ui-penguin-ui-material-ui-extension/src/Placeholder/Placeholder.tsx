import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/mui-extension:Placeholder');

interface IPlaceholderProps {
  delay?: number,
  firstLaunchOnly?: boolean,
  ready: boolean,
  placeholder: React.ReactNode,
  children: React.ReactNode
}

function Placeholder(props: IPlaceholderProps) {
  debug('render');

  const {firstLaunchOnly, children, placeholder, ready: propReady, delay} = props;
  const [ready, setReadyState] = React.useState(propReady);
  const [loaded, setLoadedState] = React.useState(false);
  let timeout: number;

  const setReady = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (!loaded) {
      setLoadedState(true);
    }
    if (!ready) {
      setReadyState(true);
    }
  };

  const setNotReady = () => {
    if (delay > 0) {
      timeout = window.setTimeout(() => {
        setReadyState(false);
      }, delay);
    } else {
      setReadyState(false);
    }
  };

  React.useEffect(() => {
    if (!firstLaunchOnly && !loaded && ready && !propReady) {
      setNotReady();
    } else if (propReady) {
      setReady();
    }
  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [propReady]);

  if (ready) return children;

  return placeholder;
}

if (process.env.NODE_ENV !== 'production') {
  Placeholder.displayName = 'penguin_ui_mui_extension__Placeholder';
}

Placeholder.defaultProps = {
  delay: 0,
  firstLaunchOnly: true
};

export default Placeholder;
