document.addEventListener('DOMContentLoaded', () => {
    const githubUsername = 'cescmr';  // El teu nom d'usuari de GitHub
    const repoName = 'cesc_itb2425_mds';  // Nom del repositori
    const filePath = 'dateTime.py';  // Fitxer que vols mostrar
    const projectContainer = document.getElementById('github-project');

    // URL de l'API de GitHub per obtenir el contingut del fitxer
    const fileUrl = `https://api.github.com/repos/${githubUsername}/${repoName}/contents/${filePath}`;

    fetch(fileUrl)
        .then(response => response.json())
        .then(data => {
            if (data.message === "Not Found") {
                projectContainer.innerHTML = `<p>Fitxer no trobat.</p>`;
                return;
            }

            // Descomprimir el contingut del fitxer (codificat en base64)
            const content = atob(data.content); // "atob" desxifra base64

            const fileInfo = `
                <h4>Contingut de ${filePath}</h4>
                <pre>${content}</pre> <!-- Mostra el codi en un format llegible -->
            `;
            projectContainer.innerHTML = fileInfo;
        })
        .catch(error => {
            console.error('Error al carregar el fitxer:', error);
            projectContainer.innerHTML = `<p>Error al carregar el fitxer.</p>`;
        });
});
document.addEventListener('DOMContentLoaded', () => {
    const githubUsername = 'cescmr';  // El teu nom d'usuari de GitHub
    const repoName = 'cesc_itb2425_mds';  // Nom del repositori
    const filePath = 'TA02/comprovarEdat.py';  // Fitxer que vols mostrar
    const projectContainer = document.getElementById('github-project1');

    // URL de l'API de GitHub per obtenir el contingut del fitxer
    const fileUrl = `https://api.github.com/repos/${githubUsername}/${repoName}/contents/${filePath}`;

    fetch(fileUrl)
        .then(response => response.json())
        .then(data => {
            if (data.message === "Not Found") {
                projectContainer.innerHTML = `<p>Fitxer no trobat.</p>`;
                return;
            }

            // Descomprimir el contingut del fitxer (codificat en base64)
            const content = atob(data.content); // "atob" desxifra base64

            const fileInfo = `
                <h4>Contingut de ${filePath}</h4>
                <pre>${content}</pre> <!-- Mostra el codi en un format llegible -->
            `;
            projectContainer.innerHTML = fileInfo;
        })
        .catch(error => {
            console.error('Error al carregar el fitxer:', error);
            projectContainer.innerHTML = `<p>Error al carregar el fitxer.</p>`;
        });
});
