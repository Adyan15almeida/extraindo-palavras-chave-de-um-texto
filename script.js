function extrairPalavras() {
    const texto = document.getElementById("inputText").value;
    
    // Expressão regular para capturar palavras (somente letras e números)
    const palavras = texto.match(/\w+/g);
    
    // Se houver palavras no texto
    if (palavras) {
        mostrarResultado(palavras);
    } else {
        mostrarResultado([]);
    }
}

function mostrarResultado(palavras) {
    const listaPalavras = document.getElementById("listaPalavras");
    listaPalavras.innerHTML = ""; // Limpa a lista antes de adicionar as novas palavras
    
    if (palavras.length > 0) {
        palavras.forEach(palavra => {
            const item = document.createElement("li");
            item.textContent = palavra;
            listaPalavras.appendChild(item);
        });
    } else {
        const item = document.createElement("li");
        item.textContent = "Nenhuma palavra encontrada.";
        listaPalavras.appendChild(item);
    }
}
