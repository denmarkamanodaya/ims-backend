const { defaultMiddleware: middleware } = require('../../../middlewares/middy');
const { Subscribers } = require('../../../models/index');
const { httpResponseCodes } = require('../../../common/response-codes');
const logger = require('../../../utils/logger');

module.exports.handler = middleware(async ({ body }) => {
  const data = await Subscribers.findAll();
  logger.debug(JSON.stringify({ body, data }));
  if (!data) return { data: httpResponseCodes.SUBSCRIBER_NOT_FOUND };
  return { data: data };
});
