document.getElementById('apiForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const traffic = document.getElementById('traffic').value;
  const resultDiv = document.getElementById('result');

  try {
    const response = await fetch('/api/monitor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ apiData: { traffic: parseInt(traffic, 10) } }),
    });

    const data = await response.json();

    if (response.ok) {
      resultDiv.textContent = data.isAnomalous
        ? 'Anomaly detected in API traffic!'
        : 'No anomaly detected.';
      resultDiv.style.color = data.isAnomalous ? 'red' : 'green';
    } else {
      resultDiv.textContent = `Error: ${data.error}`;
      resultDiv.style.color = 'red';
    }
  } catch (error) {
    resultDiv.textContent = 'Failed to connect to the server.';
    resultDiv.style.color = 'red';
  }
});

async function fetchLogs() {
  const logsContainer = document.getElementById('logs');
  try {
    const response = await fetch('/logs');
    const data = await response.json();

    if (response.ok) {
      logsContainer.innerHTML = ''; // Clear previous logs
      data.logs.forEach(log => {
        const logElement = document.createElement('div');
        logElement.classList.add('log-entry');
        logElement.innerHTML = `
          <span class="log-timestamp">${log.timestamp}</span>
          <span class="log-level ${log.level.toLowerCase()}">${log.level}</span>
          <span class="log-message">${log.message}</span>
        `;
        logsContainer.appendChild(logElement);
      });
    } else {
      logsContainer.textContent = 'Failed to fetch logs.';
    }
  } catch (error) {
    logsContainer.textContent = 'Error connecting to the server.';
  }
}

setInterval(fetchLogs, 5000);
fetchLogs();