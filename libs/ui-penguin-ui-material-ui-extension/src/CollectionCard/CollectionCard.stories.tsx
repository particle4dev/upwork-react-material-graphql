import React from 'react';
import Typography from '@material-ui/core/Typography';
import CollectionCard from './CollectionCard';

export default {
  component: CollectionCard,
  title: 'CollectionCard',
};

export const primary = () => {
  /* eslint-disable-next-line */
  // const props: any = {};

  return <div style={{
    width: 'calc(33.33333% - 16px)'
  }}><CollectionCard
      title="Cavan Images"
      // image="//images.ctfassets.net/hrltx12pl8hq/IvM4V1dC6gNbQ4pmgWsul/8304aa18a25da7f670c837c73e9971ea/canva-images.jpg?fit=fill&w=480&h=270"
      image="//images.ctfassets.net/hrltx12pl8hq/3kqxjx3XhAKxafAffxddyA/807700aacfcd355d1925d7e6e2258db4/Oct_thumbnail_04.jpg?fit=fill&w=480&h=270"
    /></div>;
};

export const secondary = () => {
  /* eslint-disable-next-line */
  // const props: any = {};
  return <div style={{
    width: 'calc(50% - 16px)'
  }}><CollectionCard
      title="Gingerbread"
      image="//image.shutterstock.com/image-photo/winter-holiday-banner-set-gingerbread-260nw-1842993550.jpg"
      // 650 x 280
      style={{
        paddingTop: 'calc(43%)',
      }}
    /></div>;
};

export const googleartsandculture = () => {
  /* eslint-disable-next-line */
  // const props: any = {};
  return <div style={{
    width: 'calc(50% - 16px)'
  }}>
    <CollectionCard
      image="//image.shutterstock.com/image-photo/winter-holiday-banner-set-gingerbread-260nw-1842993550.jpg"
      style={{
        paddingTop: 'calc(43%)',
      }}
    >
      <span>
        <div style={{
          borderBottom: '2px solid #fff',
          display: 'block',
          marginTop: 8,
          width: 24,
        }}></div>
      </span>
      <Typography variant="h6" component="h3" style={{
        color: '#fff'
      }}>
        Games
      </Typography>
      <Typography
      variant="body1"
      component="h4"
      title="Play with arts and culture through coloring, crosswords, and more"
      data-language="en"
      data-target-language="en"
      style={{
        color: '#fff'
      }}>
        Play with arts and culture through coloring, crosswords, and more
      </Typography>
    </CollectionCard>
    </div>;
};
