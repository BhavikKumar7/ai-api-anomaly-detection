# AI-Based API Anomaly Detection and Self-Healing System

## Problem Statement
Modern applications heavily rely on APIs (Application Programming Interfaces) to communicate between services. As systems grow more complex and distributed, APIs become critical points of dependency—and failure. Ensuring reliability, performance, and security of APIs is essential for maintaining seamless user experiences.

### Key Challenges:
- Abnormal traffic spikes (intentional or accidental)
- Latency anomalies affecting performance
- Broken dependencies between services
- Malicious or abnormal API usage patterns

### Objective:
Design and develop an AI-based system that can:
- Continuously monitor API behavior and performance
- Detect anomalies using behavioral and time-series analysis
- Automatically initiate self-healing actions to maintain system stability

---

## Features
- **Anomaly Detection**: Detects both obvious and subtle anomalies in API traffic.
- **Self-Healing Actions**: Automatically applies rate limiting, fallback routing, or service isolation based on detected anomalies.
- **Log Monitoring**: Displays real-time logs of API activity and actions taken.
- **Frontend Interface**: Simple web interface to test anomaly detection and view logs.

---

## Project Structure
ai-api-anomaly-detection/
├── public/
│ ├── index.html # Frontend HTML
│ ├── style.css # Frontend CSS
│ └── app.js # Frontend JavaScript
├── logs/
│ └── app.log # Log file for API activity
├── controllers/
├── models/
├── routes/
├── services/
├── utils/
├── app.js # Main backend application
├── package.json # Node.js dependencies
├── .env # Environment variables
├── README.md # Project documentation
└── INSTALL.md # Installation instructions


---

## API Endpoints

### **1. Monitor API Traffic**
- **URL**: `/api/monitor`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "apiData": {
      "traffic": 1200
    }
  }

Response:
{
  "message": "API traffic monitored successfully",
  "isAnomalous": true
}

2. Fetch Logs
URL: /logs
Method: GET
Response:
{
  "logs": [
    {
      "timestamp": "2026-04-24T07:38:34.338Z",
      "level": "info",
      "message": "Traffic is normal: Traffic = 800"
    },
    {
      "timestamp": "2026-04-24T07:39:34.338Z",
      "level": "warn",
      "message": "Anomaly detected: Traffic = 1500"
    }
  ]
}

How It Works
Anomaly Detection:

The backend analyzes API traffic data and determines if it exceeds a predefined threshold.
Logs are generated for both normal and anomalous traffic.
Self-Healing:

If an anomaly is detected, the system triggers self-healing actions such as rate limiting or fallback routing.
Frontend:

Users can input traffic data to test anomaly detection.
Logs are displayed in real-time on the frontend.

Technologies Used
Backend: Node.js, Express.js
Frontend: HTML, CSS, JavaScript
Logging: Winston
AI/ML: TensorFlow.js (for anomaly detection)