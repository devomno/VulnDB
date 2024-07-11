const files = [
    'texts/90.85.151.58 Orange Server, Using RapidLogic httpd 1.1 - SCAN MADE 11 JULY 2024.txt',

    // ajoutez ici tous les autres fichiers texte
];

function searchFiles() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const matchingFiles = files.filter(file => file.toLowerCase().includes(searchInput));
    if (matchingFiles.length === 0) {
        resultsDiv.innerHTML = '<p>Aucun fichier trouvé.</p>';
    } else {
        matchingFiles.forEach(file => {
            const encodedFile = encodeURIComponent(file);
            fetch(encodedFile)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Erreur HTTP: ${response.status}`);
                    }
                    return response.text();
                })
                .then(content => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'result-item';
                    resultItem.innerHTML = `<h3>${file}</h3><pre>${content}</pre>`;
                    resultsDiv.appendChild(resultItem);
                })
                .catch(error => {
                    console.error('Error fetching file:', error);
                    const errorItem = document.createElement('div');
                    errorItem.className = 'result-item';
                    errorItem.innerHTML = `<h3>${file}</h3><p>Erreur lors du chargement du fichier.</p>`;
                    resultsDiv.appendChild(errorItem);
                });
        });
    }
}
