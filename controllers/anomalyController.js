const anomalyDetectionService = require('../services/anomalyDetectionService');
const selfHealingService = require('../services/selfHealingService');
const logger = require('../utils/logger');

exports.monitorAPI = async (req, res) => {
  try {
    const { apiData } = req.body;
    const isAnomalous = await anomalyDetectionService.detectAnomaly(apiData);

    if (isAnomalous) {
      logger.warn('Anomaly detected in API traffic');
      await selfHealingService.triggerAction(apiData);
    }

    res.status(200).json({ message: 'API traffic monitored successfully', isAnomalous });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: 'Failed to monitor API traffic' });
  }
};

exports.triggerSelfHealing = async (req, res) => {
  try {
    const { apiData } = req.body;
    await selfHealingService.triggerAction(apiData);

    res.status(200).json({ message: 'Self-healing action triggered successfully' });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: 'Failed to trigger self-healing action' });
  }
};