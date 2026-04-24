const logger = require('../utils/logger');

exports.triggerAction = async (apiData) => {
  try {
    const traffic = apiData.traffic;

    if (traffic > 1000) {
      logger.info(`Action taken: Rate limiting applied for traffic = ${traffic}`);
    } else {
      logger.info(`Action taken: Fallback routing initiated for traffic = ${traffic}`);
    }
  } catch (error) {
    logger.error('Error in self-healing action: ' + error.message);
    throw error;
  }
};