const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint example
app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from the server!" });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
