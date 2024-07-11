function searchFiles() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const fileInput = document.getElementById('fileInput');
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (fileInput.files.length === 0) {
        alert("Veuillez sélectionner des fichiers texte à rechercher.");
        return;
    }

    for (const file of fileInput.files) {
        if (file.type === "text/plain") {
            const reader = new FileReader();
            reader.onload = function(event) {
                const fileContent = event.target.result.toLowerCase();
                if (fileContent.includes(searchInput)) {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'result-item';
                    resultItem.textContent = fileContent;
                    resultsDiv.appendChild(resultItem);
                }
            };
            reader.readAsText(file);
        }
    }
}
