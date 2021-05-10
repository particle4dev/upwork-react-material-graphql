import React from 'react';
import ClassNames from 'classnames';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('@penguin-ui/material-ui-extension:Placeholder:Animation');

const styles = () => createStyles({
  placeholder__animation: {
    background: '#E1E9EE',
    animation: '$pulse .65s infinite alternate'
  },
  '@keyframes pulse': {
    '0%': {
      opacity: 0.5
    },
    '100%': {
      opacity: 1
    }
  },

  // '@keyframes appear': {
  //   '0%': {
  //     opacity: 0,
  //     transform: 'translateY(-10px)'
  //   }

  //   '100%': {
  //     opacity: 1,
  //     transform: 'translateY(0)'
  //   }
  // },

  // '@keyframes initial-loading': {
  //   '0%,100%': {
  //     transform: 'translate(-34px, 0)'
  //   },

  //   '50%': {
  //     transform: 'translate(96px, 0)'
  //   }
  // }

});

export type IAnimationProps = WithStyles<typeof styles> & {
  readonly style?: React.CSSProperties,
  readonly className?: string
}

const Animation = React.forwardRef(function Animation(props: IAnimationProps, ref: React.Ref<HTMLElement>) {
  debug('render');

  const { className, classes, style } = props;
  const classesAnimation = ClassNames(classes.placeholder__animation, className);
  return <div className={classesAnimation} style={style} />;
});

if (process.env.NODE_ENV !== 'production') {
  Animation.displayName = 'penguin_ui_mui_extension__Placeholder_Animation';
}

Animation.defaultProps = {
  style: {},
  className: ''
};

export default withStyles(styles, { name: 'penguin_ui_mui_extension__Placeholder_Animation' })(Animation);
