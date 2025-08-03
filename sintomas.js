const bancoDoencas = [
    {
        nome: "Clamídia",
        sintomas: ["corrimento", "dor ao urinar", "dor pélvica"],
        descricao: "Infecção bacteriana que pode ser assintomática ou causar corrimento e dor ao urinar."
    },
    {
        nome: "Gonorreia",
        sintomas: ["corrimento", "dor ao urinar", "dor nos testículos"],
        descricao: "Infecção bacteriana que afeta genitais, reto e garganta."
    },
    {
        nome: "Sífilis",
        sintomas: ["feridas", "manchas vermelhas", "lesões na boca"],
        descricao: "Doença que evolui em estágios e pode causar lesões graves se não tratada."
    },
    {
        nome: "Herpes Genital",
        sintomas: ["bolhas", "feridas dolorosas", "coceira"],
        descricao: "Infecção viral caracterizada por bolhas dolorosas na região genital."
    }
];
 
function buscarSintomas() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ""; // Limpa os resultados anteriores
 
    if (input.trim() === "") {
        alert("Digite um sintoma para pesquisar.");
        return;
    }
 
    const encontrados = bancoDoencas.filter(doenca =>
        doenca.sintomas.some(sintoma => sintoma.includes(input))
    ); 
    if (encontrados.length === 0) {
        resultadoDiv.innerHTML = "<p>Nenhuma doença encontrada para o sintoma pesquisado.</p>";
    } else {
        encontrados.forEach(doenca => {
            const itemHTML = `
                <div class="resultado-item">
                    <div class="titulo">Doença provável: ${doenca.nome}</div>
                    <div class="descricao">${doenca.descricao}</div>
                </div>
            `;
            resultadoDiv.innerHTML += itemHTML;
        });
    }
}

