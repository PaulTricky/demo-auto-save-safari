const common = require('./common');

module.exports = {
  ...common,
  BUILD_ENV: 'beta',
  BASE_URL: 'https://beta-api.zalow.com',
  WEBSOCKET_BASE_URL: 'wss://beta-chat.zalow.com',
  STRIPE_PUBLIC_KEY:
    'pk_test_51MRktPDv7drpcFfSC8iGuTtvE5mK7OZsqeNSNHTYU8ctDHULehvq6itx1PnHLRTzwwBiRd5v2rFD5OxUiuSFEyFH00qrb8ZDdG',
  DEFAULT_TIMEZONE: 'America/Chicago',
  SENTRY_DSN: 'https://cfaf337c6663c29a3da5f79c9cc757bf@o4505752118624256.ingest.sentry.io/4506324455456768',
  SENTRY_AUTH_TOKEN:
    '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',
  SENTRY_ORG: 'calibrate-3bcb5b933',
  SENTRY_PROJECT: 'zalow-beta-web',
  INTERCOM_APP_ID: 'dxxky79p',
  SEGMENT_KEY: 'Uh6wQ6qPFmfuLH8ZTYt5IF0MSXZXdcKH',
  SEGMENT_HOST: 'cdn.segment.com',
};
