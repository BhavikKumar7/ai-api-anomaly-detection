const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const logger = require('./utils/logger');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api', apiRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to fetch logs
app.get('/logs', (req, res) => {
  const logFilePath = path.join(__dirname, 'logs', 'app.log');
  fs.readFile(logFilePath, 'utf8', (err, data) => {
    if (err) {
      logger.error('Failed to read logs: ' + err.message);
      return res.status(500).json({ error: 'Failed to fetch logs' });
    }

    // Format logs into an array of objects
    const logs = data.split('\n').filter(line => line).map(line => {
      const [timestamp, level, ...messageParts] = line.split(' ');
      return {
        timestamp,
        level: level.replace('[', '').replace(']', ''),
        message: messageParts.join(' '),
      };
    });

    res.status(200).json({ logs });
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});