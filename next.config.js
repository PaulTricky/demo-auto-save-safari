const config = require('./src/config');
const withPlugins = require('next-compose-plugins');
const { withSentryConfig } = require('@sentry/nextjs');

console.log('NODE_ENV', process.env.NODE_ENV);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: config.ANALYZE === true,
  openAnalyzer: config.ANALYZE === true,
});

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, configFile, stripPrefix, urlPrefix, include, ignore

  org: config.SENTRY_ORG,
  project: config.SENTRY_PROJECT,

  // An auth token is required for uploading source maps.
  // You can get an auth token from https://sentry.io/settings/account/api/auth-tokens/
  // The token must have `project:releases` and `org:read` scopes for uploading source maps
  authToken: config.SENTRY_AUTH_TOKEN,

  silent: true, // Suppresses all logs

  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

const nextConfig = {
  /* config options here */
  reactStrictMode: false,
  swcMinify: true,
  env: config,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  sentry: {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: false,
    hideSourceMaps: true,
    widenClientFileUpload: true,
    transpileClientSDK: true,
    tunnelRoute: '/monitoring-tunnel',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
};

const moduleExports = withPlugins([withBundleAnalyzer], nextConfig);
module.exports =
  process.env.NODE_ENV === 'production' ? withSentryConfig(moduleExports, sentryWebpackPluginOptions) : moduleExports;
