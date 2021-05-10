import * as React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/material-ui-extension:AppBar:HideOnScroll');

export type HideOnScrollProps = {
  children: React.ReactElement;
  contentRef?: React.RefObject<HTMLElement>;
}

function HideOnScroll(props: HideOnScrollProps) {
  debug(`render`);

  const { children, contentRef } = props;
  const [ scrollTarget, setScrollTarget ] = React.useState(undefined);

  const trigger = useScrollTrigger({
    target: scrollTarget
  });

  React.useEffect(() => {
    if(contentRef && contentRef.current) {
      setScrollTarget(contentRef.current);
    }
  }, [contentRef]);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

if (process.env.NODE_ENV !== 'production') {
  HideOnScroll.displayName = 'penguin_ui_material_ui_extension__AppBar__HideOnScroll';
}

HideOnScroll.defaultProps = {};

export default HideOnScroll;
