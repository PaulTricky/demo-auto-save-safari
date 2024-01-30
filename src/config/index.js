const alpha = require('./alpha');

const env = process.env.BUILD_ENV;

const envObj = {
  alpha: { ...alpha },
};

/**
 * @type {typeof prod}
 **/
module.exports = envObj[env || 'alpha'];
