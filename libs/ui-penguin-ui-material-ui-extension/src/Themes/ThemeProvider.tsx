import * as React from 'react';
import mediaQuery from 'css-mediaquery';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { Theme as ThemeType } from '@material-ui/core/styles';

// https://material-ui.com/customization/breakpoints/#theme-breakpoints-up-key-media-query
// https://stackoverflow.com/questions/13315131/enforcing-the-type-of-the-indexed-members-of-a-typescript-object
interface IStringTMap<T> { [key: string]: T }
type IStringNumberMap = IStringTMap<number>

const width: IStringNumberMap = {
  mobile: 479,
  tablet: 767,
  desktop: 1024,
  smarttv: 1920,
  // console, not supported
  // wearable, not supported
  // embedded not supported
};

type IThemeProps = {
  children: React.ReactNode,
  deviceType?: string,
  theme: ThemeType,
  isBrowser: boolean
}

function Theme(props: IThemeProps) {
  const { children, deviceType, theme, isBrowser } = props;

  if(!isBrowser) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ssrMatchMedia = (query: string): any => ({
      matches: mediaQuery.match(query, {
        // The estimated CSS width of the browser.
        width: width[deviceType] || 0 // default value is 0
      }),
      addListener: null,
      removeListener: null
    });
    theme.props = {
      // Change the default options of useMediaQuery
      MuiUseMediaQuery: { ssrMatchMedia },
    };
  }

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Theme.displayName = 'penguin_ui_material_ui_extension__ThemeProvider';
}

Theme.defaultProps = {};


export default Theme;
