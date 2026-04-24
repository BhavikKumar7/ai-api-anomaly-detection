const logger = require('../utils/logger');

exports.detectAnomaly = async (apiData) => {
  try {
    const threshold = 1000;
    const traffic = apiData.traffic;

    if (traffic > threshold) {
      logger.warn(`Anomaly detected: Traffic = ${traffic}`);
      return true;
    }

    logger.info(`Traffic is normal: Traffic = ${traffic}`);
    return false;
  } catch (error) {
    logger.error('Error in anomaly detection: ' + error.message);
    throw error;
  }
};