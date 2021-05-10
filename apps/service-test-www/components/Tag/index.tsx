import * as React from 'react';
import classnames from 'classnames';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('components:Tag');

const styles = () => createStyles({
  root: {
    marginRight: 8,
    display: 'inline'
  },

  chip: {
    height: 24,
  },

  avatar: {
    color: '#fff !important',
    width: '18px !important',
    height: '18px !important'
  },

  backgroundGreen: {
    backgroundColor: '#55D6BE',
  },

  backgroundRed: {
    backgroundColor: '#FDA2AA',
  },

  backgroundBlue: {
    backgroundColor: '#70B6FF',
  },

  backgroundDefault: {
    backgroundColor: '#7F7F7F',
  },

  borderGreen: {
    borderColor: '#55D6BE',
  },

  borderRed: {
    borderColor: '#FDA2AA',
  },

  borderBlue: {
    borderColor: '#70B6FF',
  },

  borderDefault: {
    borderColor: '#7F7F7F',
  }
});

type TagProps = WithStyles<typeof styles> & {
  type?: string;
  avatar: string;
  label: string;
  className?: string;
  id?: string;
  callBack?: (id: string, width: number) => void;
};

const Tag = React.forwardRef(function Tag({ classes, id, className, type, avatar, label, callBack }: TagProps, ref: React.Ref<HTMLDivElement>) {
  debug('render');

  const anchorRef = React.useRef<HTMLDivElement>(null);

  const clsAvatar = classnames(classes.avatar, {
    [classes.backgroundGreen]: type === 'green',
    [classes.backgroundRed]: type === 'red',
    [classes.backgroundBlue]: type === 'blue',
    [classes.backgroundDefault]: type !== 'green' && type !== 'red' && type !== 'blue',
  });

  const clsChip = classnames(classes.chip, {
    [classes.borderGreen]: type === 'green',
    [classes.borderRed]: type === 'red',
    [classes.borderBlue]: type === 'blue',
    [classes.borderDefault]: type !== 'green' && type !== 'red' && type !== 'blue',
  });

  React.useEffect(() => {
    callBack && callBack(id, anchorRef.current.offsetWidth + 8);
  }, []);

  return (<div id={id} ref={anchorRef} className={classnames(classes.root, className)}>
    <Chip
      avatar={<Avatar className={clsAvatar}>{avatar}</Avatar>}
      label={label}
      className={clsChip}
      variant="outlined"
    />
  </div>
  );
});

if (process.env.NODE_ENV !== 'production') {
  Tag.displayName = 'components__Tag';
}

Tag.defaultProps = {};

export default withStyles(styles, {name: 'Tag'})(Tag);
