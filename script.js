function searchFiles() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    fetch('/search?query=' + encodeURIComponent(searchInput))
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            data.files.forEach(file => {
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item';
                resultItem.textContent = file.content;
                resultsDiv.appendChild(resultItem);
            });
        });
}
