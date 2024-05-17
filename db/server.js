const express = require('express');
const barrel = require('../routes/index.js');
const PORT = process.env.PORT || 3004;
const app = express();

// Serve static files with correct MIME types
app.use(express.static("public"));

// Include routes from the index barrel
app.use("/", barrel);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});