const files = [
    'texts/file1.txt',
    'texts/file2.txt',
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
