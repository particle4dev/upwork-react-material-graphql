import * as React from 'react';
import clsx from 'classnames';
import { WithStyles, createStyles, withStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

export const styles = (theme: Theme) => createStyles({
  root: {
    paddingTop: 'calc(56.25%)', // 16:9
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 4,
    display: 'block',
    textAlign: 'inherit',
    width: '100%',

    '&:hover $focusHighlight': {
      opacity: theme.palette.action.hoverOpacity,
      '@media (hover: none)': {
        opacity: 0,
      }
    },
    '&:hover img': {
      transform: 'scale3d(1.1, 1.1, 1)'
    },
    '&$focusVisible $focusHighlight': {
      opacity: theme.palette.action.focusOpacity,
    },
  },

  /* Pseudo-class applied to the ButtonBase root element if the action area is keyboard focused. */
  focusVisible: {},

  focusHighlight: {
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
    opacity: 0,
    backgroundColor: 'currentcolor',
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.short,
    }),
  },

  root__img: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: 'transform 1000ms cubic-bezier(0.190,1.000,0.220,1.000)',
    // transition: theme.transitions.create('transform'),
    margin: 'auto'
  },

  root__title: {
    position: 'absolute',
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
    margin: '0 auto',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    boxPack: 'center',
    boxAlign: 'center',
    padding: 12,
    whiteSpace: 'normal',
    textShadow: '1px 1px 1em rgba(0,0,0,.38)',
  }
});

type CollectionCardProps = WithStyles<typeof styles> & {
  children?: React.ReactNode,
  title?: string,
  image?: string,
  className?: string,
  style?: React.CSSProperties,
  component?: React.ElementType
}

const CollectionCard = React.forwardRef(function CollectionCard(props: CollectionCardProps, ref: React.Ref<HTMLElement>) {
  const {
    title,
    image,
    children,
    classes,
    className: classNameProp,
    component: Component = 'div',
    ...other
  } = props;

  const className = clsx(
    classes.root,
    classNameProp,
  );

  return (<ButtonBase component={Component} className={className} ref={ref} {...other}>
    {image && <img
      className={classes.root__img}
      src={image}
      data-src={image}
      alt={`${title} Pics`}
      width="100%"
    ></img>}
    <div className={classes.root__title}>
      {title && <Typography variant="h6" style={{
        color: '#fff'
      }}>
        {title}
      </Typography>}
      {children}
    </div>
    <span className={classes.focusHighlight} />
  </ButtonBase>);
});

if (process.env.NODE_ENV !== 'production') {
  CollectionCard.displayName = 'penguin_ui__CollectionCard';
}

CollectionCard.defaultProps = {};

export default withStyles(styles, { name: 'mui_extension__CollectionCard' })(CollectionCard);
