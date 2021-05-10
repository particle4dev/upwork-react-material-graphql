// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');
const withNx = require('@nrwl/next/plugins/with-nx');

module.exports = withNx({
  nx: {
    // Set this to false if you do not want to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },

  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],

  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };
    // config.resolve.alias['components'] = path.join(__dirname, 'components')
    // config.resolve.alias['containers'] = path.join(__dirname, 'containers')
    // config.resolve.alias['libraries'] = path.join(__dirname, 'libraries')
    // config.resolve.alias['utils'] = path.join(__dirname, 'utils')

    config.plugins.push(
      new webpack.DefinePlugin({
        // "process.env.DEBUG": `"${process.env.DEBUG || ''}"`,
      })
    );

    return config;
  }
});

