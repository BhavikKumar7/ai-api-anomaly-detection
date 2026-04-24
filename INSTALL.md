# Installation Guide

Follow these steps to set up and run the AI-Based API Anomaly Detection and Self-Healing System.

---

## Prerequisites
1. **Node.js**: Install Node.js (v18 or higher) from [nodejs.org](https://nodejs.org/).
2. **npm**: Ensure npm is installed (comes with Node.js).
3. **Git**: Install Git from [git-scm.com](https://git-scm.com/).

---

## Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/ai-api-anomaly-detection.git
cd ai-api-anomaly-detection
```
### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a .env file in the root directory and add the following:
```bash
PORT=3000
```

### 4. Start the Application
To start the backend server:
```bash
npm run dev

The server will start on http://localhost:3000.
```

### Testing the Application
### 1. Access the Frontend
Open your browser and navigate to:
```bash
http://localhost:3000
```

### 2. Test Anomaly Detection
Enter a traffic value in the input field and click Check Anomaly.
The result will indicate whether an anomaly was detected.
### 3. View Logs
Scroll down to the Logs section to view real-time logs of API activity and actions taken.

### Troubleshooting
### 1. Port Already in Use
If port 3000 is already in use, change the PORT value in the .env file.

### 2. Logs Not Displaying
Ensure the logs/app.log file exists and is writable. If not, create it manually:
mkdir logs
touch app.log

### 3. Dependencies Not Installing
If npm install fails, ensure you have the correct Node.js version installed.
