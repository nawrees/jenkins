const express = require('express');
const path = require('path');
const client = require('prom-client'); // Require prom-client first

const app = express();
const PORT = 4000;

// Initialize Prometheus metrics collection
client.collectDefaultMetrics();

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint example
app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from the server!" });
});

// Metrics endpoint for Prometheus
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

