require('dotenv').config();
module.exports = {
  AWS_SECRETS_MANAGER_NAME: process.env.AWS_SECRETS_MANAGER_NAME,
  AWS_SECRETS_MANAGER_REGION: process.env.AWS_SECRETS_MANAGER_REGION,
  AWS_SECRETS_MANAGER_TIMEOUT: process.env.AWS_SECRETS_MANAGER_TIMEOUT,
};