var S3 = require('amazon-s3');

function R2(config) {
    config.domain = `${config.accountId}.r2.cloudflarestorage.com`;
    S3.call(this, config);
}

R2.prototype = Object.create(S3.prototype);
R2.prototype.constructor = R2;

module.exports = R2;
