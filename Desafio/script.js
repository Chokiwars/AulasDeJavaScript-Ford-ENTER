function classificarHeroi() {
    let nome = document.getElementById("nome").value.trim();
    let xp = document.getElementById("xp").value.trim();
    let resultado = document.getElementById("resultado");

    // Limpa a mensagem anterior
    resultado.innerText = "";

    // Validar se os campos estão sendo preenchidos
    if (nome === "") {
        resultado.innerText = "Por favor, preencha o nome do herói.";
        return;
    }

    if (xp === "" || isNaN(xp) || Number(xp) < 0) {
        resultado.innerText = "Por favor, insira um valor numérico válido e positivo para o XP.";
        return;
    }

    xp = Number(xp); // converte para número
    let nivel = "";

    // Classificação dos XPs
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Resultado final
    resultado.innerText = `O Herói ${nome} está no nível ${nivel}`;
}
