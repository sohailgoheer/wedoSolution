const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 8000;

// Enable CORS
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the GLB file
app.get('/web3d.glb', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'web3d.glb'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
