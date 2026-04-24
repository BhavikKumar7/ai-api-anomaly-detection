const express = require('express');
const { monitorAPI, triggerSelfHealing } = require('../controllers/anomalyController');

const router = express.Router();

router.post('/monitor', monitorAPI);

router.post('/self-heal', triggerSelfHealing);

module.exports = router;