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
            fetch(file)
                .then(response => response.text())
                .then(content => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'result-item';
                    resultItem.innerHTML = `<h3>${file}</h3><pre>${content}</pre>`;
                    resultsDiv.appendChild(resultItem);
                });
        });
    }
}
