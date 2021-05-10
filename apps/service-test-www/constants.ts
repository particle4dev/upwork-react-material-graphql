import keys from 'lodash/keys';

export const ROUTER = {
  SEARCH: {
    label: 'Search',
    path: '/search'
  },
  BROWSE: {
    label: 'Browse',
    path: '/browse'
  },
  US: {
    label: 'About Us',
    path: '/us'
  },
  HOME: {
    label: 'Home',
    path: '/'
  }
};

export const ALL_ROUTER: string[] = keys(ROUTER);

export const PORT = parseInt(process.env.PORT, 10) || 3000;
