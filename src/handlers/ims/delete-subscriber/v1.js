const { defaultMiddleware: middleware } = require('../../../middlewares/middy');
const { Subscribers } = require('../../../models/index');
const { httpResponseCodes } = require('../../../common/response-codes');
const logger = require('../../../utils/logger');

module.exports.handler = middleware(async ({ pathParameters }) => {
  const { phoneNumber } = pathParameters;
  logger.debug(JSON.stringify({ phoneNumber }));
  await Subscribers.destroy({ where: { phoneNumber } });
  return { data: httpResponseCodes.SUBSCRIBER_DELETED };
});
