const { defaultMiddleware: middleware } = require('../../../middlewares/middy');
const { Subscribers } = require('../../../models/index');
const { httpResponseCodes } = require('../../../common/response-codes');
const logger = require('../../../utils/logger');

module.exports.handler = middleware(async ({ pathParameters, body }) => {
  const { phoneNumber } = pathParameters;
  const { username, password, domain, features, status } = body;
  const defaultParams = { username, password, status, domain, features };

  const [data, created] = await Subscribers.findOrCreate({
    where: { phoneNumber },
    defaults: { phoneNumber, ...defaultParams },
  });

  logger.debug(JSON.stringify({ pathParameters, body, defaultParams }));
  if (created) return { data: httpResponseCodes.SUBSCRIBER_ADDED };

  await Subscribers.update({ ...defaultParams }, { where: { phoneNumber } });
  return { data: httpResponseCodes.SUBSCRIBER_UPDATED };
});
