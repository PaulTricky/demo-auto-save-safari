const common = require('./common');

module.exports = {
  ...common,
  BUILD_ENV: 'alpha',
  BASE_URL: 'https://dev-api.zalow.com',
  WEBSOCKET_BASE_URL: 'wss://dev-consumer.zalow.com',
  STRIPE_PUBLIC_KEY:
    'pk_test_51MRktPDv7drpcFfSC8iGuTtvE5mK7OZsqeNSNHTYU8ctDHULehvq6itx1PnHLRTzwwBiRd5v2rFD5OxUiuSFEyFH00qrb8ZDdG',
  DEFAULT_TIMEZONE: 'America/Chicago',
  SENTRY_DSN: 'https://0be438e0fd820252335c4758af5494ff@o4505752118624256.ingest.sentry.io/4506324451983360',
  SENTRY_AUTH_TOKEN:
    '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',
  SENTRY_ORG: 'calibrate-3bcb5b933',
  SENTRY_PROJECT: 'zalow-dev-web',
  INTERCOM_APP_ID: 'rqwmoiyv',
  SEGMENT_KEY: 'Uh6wQ6qPFmfuLH8ZTYt5IF0MSXZXdcKH',
  SEGMENT_HOST: 'cdn.segment.com',
  USERNAP_API_KEY: 'bb3b64b0-e2f6-430c-a7a2-3673db2b92d4',
};
