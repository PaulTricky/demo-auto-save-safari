const common = require('./common');

module.exports = {
  ...common,
  BUILD_ENV: 'local',
  BASE_URL: 'http://api.zalow.localhost',
  WEBSOCKET_BASE_URL: 'ws://chat.zalow.localhost',
  STRIPE_PUBLIC_KEY:
    'pk_test_51MRktPDv7drpcFfSC8iGuTtvE5mK7OZsqeNSNHTYU8ctDHULehvq6itx1PnHLRTzwwBiRd5v2rFD5OxUiuSFEyFH00qrb8ZDdG',
  DEFAULT_TIMEZONE: 'America/Chicago',
  SENTRY_DSN: "",
  SENTRY_AUTH_TOKEN: "",
  SENTRY_ORG: "",
  SENTRY_PROJECT:  ""
};
