const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));

// Endpoint de recherche
app.get('/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const directoryPath = path.join(__dirname, 'texts');

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to scan directory' });
        }

        const matchingFiles = files.filter(file => file.toLowerCase().includes(query));
        const fileContents = matchingFiles.map(file => {
            const content = fs.readFileSync(path.join(directoryPath, file), 'utf8');
            return { name: file, content: content };
        });

        res.json({ files: fileContents });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
