const { defaultMiddleware: middleware } = require('../../../middlewares/middy');
const { Subscribers } = require('../../../models/index');
const { httpResponseCodes } = require('../../../common/response-codes');
const logger = require('../../../utils/logger');

module.exports.handler = middleware(async ({ pathParameters }) => {
  const data = await Subscribers.findOne({ where: { phoneNumber: pathParameters.phoneNumber } });
  logger.debug(JSON.stringify({ pathParameters, data }));
  if (!data) return { data: httpResponseCodes.SUBSCRIBER_NOT_FOUND };
  return { data: data };
});
