function searchFiles() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    fetch('/search?query=' + encodeURIComponent(searchInput))
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            if (data.files.length === 0) {
                resultsDiv.innerHTML = '<p>Aucun fichier trouvé.</p>';
            } else {
                data.files.forEach(file => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'result-item';
                    resultItem.textContent = `Nom du fichier: ${file.name}\n\n${file.content}`;
                    resultsDiv.appendChild(resultItem);
                });
            }
        })
        .catch(error => console.error('Error:', error));
}
