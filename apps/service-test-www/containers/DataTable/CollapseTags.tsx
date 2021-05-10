import * as React from 'react';
import classnames from 'classnames';
import debounce from 'lodash/debounce';
import { WithStyles, createStyles, withStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { PlaceholderLine } from '@penguin-ui/material-ui-extension';
import detectBreakpoints from '../../utils/detectBreakpoints';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('components:CollapseTags');

const COMPONENT_STATUS = {
  FIRST_LOAD: 'FIRST_LOAD',
  INIT: 'INIT',
  RENDERED: 'RENDERED'
};

export const styles = () => createStyles({
  root: {
    display: 'flex',
  },

  text: {
    verticalAlign: 'middle',
    lineHeight: '24px',
  },

  chipInit: {
    visibility: 'hidden'
  },
});

type CollapseTagsProps = WithStyles<typeof styles> & {
  children?: React.ReactNode;
};

const CollapseTags = React.forwardRef(function CollapseTags({
  classes,
  children: childrenProp,
}: CollapseTagsProps, ref: React.Ref<HTMLDivElement>) {
  debug(`render`);

  const [max, setMax] = React.useState(1);

  const [componentStatus, setComponentStatus] = React.useState(COMPONENT_STATUS.FIRST_LOAD);

  const sizeCache = React.useRef(detectBreakpoints([]));

  const total = React.Children.count(childrenProp);

  const children = React.Children.map(childrenProp, (child: React.ReactElement<any>, index) => {
    if(componentStatus === COMPONENT_STATUS.FIRST_LOAD) {
      return null;
    }
    if(max === -1 || index < max) {
      return React.cloneElement(child, {
        className: classnames(child.props.className, {
          // only on browser
          [classes.chipInit]: componentStatus === COMPONENT_STATUS.INIT
        }),
        callBack: registerElementToArray,
      });
    }
  });

  function registerElementToArray(id: string, width: number) {
    const c = sizeCache.current;
    if(!c.hasKey(id)) {
      c.push(id, width);
    }
    if(max < total) {
      setMax(max => max += 1);
    }
    if(c.showList().length === total) {
      const element = document.getElementById('data-table-tags');
      setMax(c.detect(element.offsetWidth));

      setComponentStatus(COMPONENT_STATUS.RENDERED);
    }
  }

  // React.useEffect(() => {
  //   // Todo something in RENDERED status
  //   if(componentStatus === COMPONENT_STATUS.RENDERED) {
  //   }
  // }, [componentStatus]);

  React.useEffect(() => {
    const handleResize = debounce(() => {
      const element = document.getElementById('data-table-tags');
      const c = sizeCache.current;
      setMax(c.detect(element.offsetWidth));
    }, 150);

    if(componentStatus === COMPONENT_STATUS.FIRST_LOAD) {
      setComponentStatus(COMPONENT_STATUS.INIT);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (<div ref={ref} className={classes.root} style={{
    position: 'absolute',
    top: 14
  }}>
    {(componentStatus === COMPONENT_STATUS.FIRST_LOAD || componentStatus === COMPONENT_STATUS.INIT) && <PlaceholderLine width={90} style={{
      margin: '7px 0'
    }} />}
    {children}
    {(total > max && max !== -1 && componentStatus === COMPONENT_STATUS.RENDERED) && <Typography variant="body2" className={classes.text} style={{
      right: 0
    }}>
      +{total - max}
    </Typography>}
  </div>);
});

if (process.env.NODE_ENV !== 'production') {
  CollapseTags.displayName = 'components__CollapseTags';
}

CollapseTags.defaultProps = {};

export default withStyles(styles, { name: 'CollapseTags' })(CollapseTags);
